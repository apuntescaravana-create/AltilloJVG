import os
import re
import urllib.request
import urllib.parse
import json
import pdfplumber

# Configuración de URLs y directorios
BASE_URL = "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/horarios.php"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
AULAS_DIR = os.path.join(PROJECT_DIR, "Aulas")
OUTPUT_JS = os.path.join(PROJECT_DIR, "data", "aulas_data.js")
OUTPUT_JSON = os.path.join(PROJECT_DIR, "data", "aulas_data.json")

# Asegurar que existan las carpetas necesarias
os.makedirs(AULAS_DIR, exist_ok=True)
os.makedirs(os.path.dirname(OUTPUT_JS), exist_ok=True)

# Mapeo de nombres de carreras a nombres oficiales uniformes
CARRERA_MAP = {
    "CS. JURIDICAS": "Profesorado de Cs. Jurídicas",
    "JURIDICAS": "Profesorado de Cs. Jurídicas",
    "PSICOLOGIA": "Profesorado de Psicología",
    "CS. EDUCACION": "Profesorado de Cs. de la Educación",
    "EDUCACION": "Profesorado de Cs. de la Educación",
    "HISTORIA": "Profesorado de Historia",
    "GEOGRAFIA": "Profesorado de Geografía",
    "FILOSOFIA": "Profesorado de Filosofía",
    "MATEMATICA": "Profesorado de Matemática",
    "FISICA": "Profesorado de Física",
    "QUIMICA": "Profesorado de Química",
    "BIOLOGIA": "Profesorado de Biología",
    "NATURALES": "Profesorado de Ciencias Naturales",
    "INFORMATICA": "Profesorado de Informática",
    "INGLES": "Profesorado de Inglés",
    "FRANCES": "Profesorado de Francés",
    "ITALIANO": "Profesorado de Italiano",
    "LENGUA": "Profesorado de Lengua y Literatura",
    "CASTELLANO": "Profesorado de Lengua y Literatura",
    "ECONOMIA": "Profesorado de Economía",
    "ADMINISTRACION": "Profesorado de Ciencias de la Administración",
    "POLITICA": "Profesorado de Ciencia Política"
}

def normalize_carrera(raw_str):
    raw_upper = raw_str.upper()
    for key, official in CARRERA_MAP.items():
        if key in raw_upper:
            return official
    return raw_str.strip()

def download_aulas_pdfs():
    print(f"[*] Conectando con la cartelera oficial: {BASE_URL}")
    req = urllib.request.Request(BASE_URL, headers={'User-Agent': 'Mozilla/5.0'})
    
    try:
        with urllib.request.urlopen(req) as res:
            html = res.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"[!] Error al descargar cartelera: {e}")
        return []

    # Extraer todos los enlaces que contengan "aulas" y terminen en ".pdf"
    links = re.findall(r'href=[\"\'](.*?aulas.*?\.pdf)[\"\']', html, re.I)
    
    downloaded_files = []
    print(f"[*] Enlaces de aulas detectados en la web: {len(links)}")
    
    for link in links:
        # Convertir enlace relativo a absoluto si es necesario
        pdf_url = urllib.parse.urljoin(BASE_URL, link)
        filename = os.path.basename(pdf_url)
        dest_path = os.path.join(AULAS_DIR, filename)
        
        print(f"   -> Descargando: {filename} ...")
        try:
            urllib.request.urlretrieve(pdf_url, dest_path)
            downloaded_files.append(dest_path)
        except Exception as e:
            print(f"   [!] Error al descargar {filename}: {e}")
            
    return downloaded_files

def parse_pdf_to_records(filepath):
    fname = os.path.basename(filepath).lower()
    
    # Determinar turno y día según el nombre del archivo
    turno = "Mañana" if "-tm-" in fname or " tm " in fname else ("Tarde" if "-tt-" in fname or " tt " in fname else "Vespertino/Noche")
    
    dia = "Lunes"
    if "martes" in fname: dia = "Martes"
    elif "miercoles" in fname or "miércoles" in fname: dia = "Miércoles"
    elif "jueves" in fname: dia = "Jueves"
    elif "viernes" in fname: dia = "Viernes"
    elif "sabado" in fname or "sábado" in fname: dia = "Sábado"
    
    local_records = []
    
    try:
        with pdfplumber.open(filepath) as pdf:
            for page in pdf.pages:
                tables = page.extract_tables()
                if tables:
                    for table in tables:
                        for row in table:
                            if not row or len(row) < 4:
                                continue
                            
                            cols = [str(c or "").replace("\n", " ").strip() for c in row]
                            col_text = " ".join(cols).upper()
                            if "PROFESORADO" in col_text or "MATERIA" in col_text or "TURNO" in col_text:
                                continue
                            
                            # Detectar año y carrera en la primera columna
                            col0_is_year = bool(re.match(r'^\d+[°º]?$', cols[0]))
                            
                            if col0_is_year:
                                anio = f"{cols[0].replace('°','').replace('º','')}° Año"
                                carrera_raw = cols[1]
                                materia = cols[2]
                                horario = cols[3]
                                docente = cols[4] if len(cols) > 4 else ""
                                aula = cols[5] if len(cols) > 5 else (cols[4] if len(cols) > 4 else "")
                                if len(cols) == 5 and re.search(r'\d+|SUM|LAB|AUD|SAY', cols[4].upper()):
                                    docente = ""
                                    aula = cols[4]
                            else:
                                prof_raw = cols[0]
                                anio_match = re.search(r'(\d+)[°º]?', prof_raw)
                                anio = f"{anio_match.group(1)}° Año" if anio_match else "General"
                                carrera_raw = prof_raw
                                materia = cols[1]
                                horario = cols[2]
                                docente = cols[3] if len(cols) > 4 else ""
                                aula = cols[4] if len(cols) > 4 else cols[3]
                            
                            carrera = normalize_carrera(carrera_raw)
                            
                            if not materia or not horario or "HOJA" in materia.upper():
                                continue

                            local_records.append({
                                "carrera": carrera,
                                "anio": anio,
                                "materia": materia,
                                "horario": horario,
                                "docente": docente,
                                "aula": aula,
                                "turno": turno,
                                "dia": dia
                            })
                else:
                    # Método fallback basado en expresiones regulares de texto
                    text = page.extract_text()
                    if not text:
                        continue
                    for line in text.split("\n"):
                        line = line.strip()
                        if not line or "PROFESORADO" in line or "TURNO" in line or "AULAS DIA" in line or "HOJA" in line:
                            continue
                        
                        parts = re.split(r'\s{2,}', line)
                        if len(parts) >= 4:
                            prof_raw = parts[0]
                            materia = parts[1]
                            horario = parts[2]
                            docente = parts[3] if len(parts) >= 5 else ""
                            aula = parts[4] if len(parts) >= 5 else parts[3]
                            
                            anio_match = re.search(r'(\d+)[°º]?', prof_raw)
                            anio = f"{anio_match.group(1)}° Año" if anio_match else "General"
                            carrera = normalize_carrera(prof_raw)

                            local_records.append({
                                "carrera": carrera,
                                "anio": anio,
                                "materia": materia,
                                "horario": horario,
                                "docente": docente,
                                "aula": aula,
                                "turno": turno,
                                "dia": dia
                            })
    except Exception as e:
        print(f"[!] Error al parsear {fname}: {e}")
        
    return local_records

def main():
    print("=== AltilloJVG: Actualizador Automático de Aulas y Cursadas ===")
    
    # 1. Descargar PDFs más recientes del sitio
    pdf_files = download_aulas_pdfs()
    
    # Si no se pudo descargar nada de la web, usar archivos locales de respaldo en Aulas/
    if not pdf_files:
        print("[!] No se detectaron PDFs nuevos en la web o falló la conexión. Buscando archivos locales...")
        import glob
        pdf_files = glob.glob(os.path.join(AULAS_DIR, "*.pdf"))
        
    if not pdf_files:
        print("[!] ERROR: No hay archivos PDF disponibles para parsear. Proceso cancelado.")
        return
        
    # 2. Parsear todos los PDFs
    all_records = []
    print(f"[*] Procesando {len(pdf_files)} archivos de aulas...")
    for filepath in pdf_files:
        records = parse_pdf_to_records(filepath)
        all_records.extend(records)
        print(f"   -> {os.path.basename(filepath)}: {len(records)} registros extraídos.")
        
    print(f"[*] Extracción finalizada. Total de clases encontradas: {len(all_records)}")
    
    # 3. Guardar base de datos en formato JS (con el prefijo const para el navegador)
    try:
        with open(OUTPUT_JS, "w", encoding="utf-8") as f:
            f.write("const AULAS_DATABASE = " + json.dumps(all_records, ensure_ascii=False, indent=2) + ";\n")
        print(f"[+] Base de datos JS generada con éxito en: {OUTPUT_JS}")
        
        # 4. Guardar copia en JSON puro para integraciones de backend
        with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
            json.dump(all_records, f, ensure_ascii=False, indent=2)
        print(f"[+] Archivo JSON de respaldo guardado en: {OUTPUT_JSON}")
        
    except Exception as e:
        print(f"[!] Error al guardar la base de datos: {e}")

if __name__ == "__main__":
    main()
