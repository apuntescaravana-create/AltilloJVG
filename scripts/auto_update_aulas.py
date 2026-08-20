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
    "LENGUA Y LITER": "Profesorado de Lengua y Literatura",
    "LENGUA": "Profesorado de Lengua y Literatura",
    "CASTELLANO": "Profesorado de Lengua y Literatura",
    "ECONOMIA": "Profesorado de Economía",
    "ADMINISTRACION": "Profesorado de Ciencias de la Administración",
    "POLITICA": "Profesorado de Ciencia Política"
}

def normalize_carrera(raw_str):
    def clean_text(s):
        s = s.upper()
        replacements = {
            'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
            'Ü': 'U'
        }
        for a, b in replacements.items():
            s = s.replace(a, b)
        return s
    
    clean_str = clean_text(raw_str)
    for key, official in CARRERA_MAP.items():
        clean_key = clean_text(key)
        if clean_key in clean_str:
            return official
    return None

def parse_year_from_text(text):
    text_clean = str(text or "").upper().strip()
    match = re.search(r'(\d+)', text_clean)
    if match:
        return f"{match.group(1)}° Año"
    return "General"

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
                            if not row:
                                continue
                            
                            cols = [str(c or "").replace("\n", " ").strip() for c in row]
                            col_text = " ".join(cols).upper()
                            if "PROFESORADO" in col_text or "MATERIAS" in col_text or "TURNO" in col_text or "APELLIDO" in col_text:
                                continue
                                
                            non_empty = [c for c in cols if c]
                            if not non_empty or len(non_empty) <= 1:
                                continue
                                
                            carrera = ""
                            anio = "General"
                            materia = ""
                            horario = ""
                            docente = ""
                            aula = ""
                            
                            carrera_idx = -1
                            carrera_normalized = None
                            
                            for idx, cell in enumerate(cols):
                                c_norm = normalize_carrera(cell)
                                if c_norm:
                                    carrera_idx = idx
                                    carrera_normalized = c_norm
                                    break
                                    
                            if carrera_idx == -1:
                                continue
                                
                            carrera = carrera_normalized
                            
                            if carrera_idx == 0:
                                anio = parse_year_from_text(cols[0])
                                if len(cols) == 4:
                                    materia = cols[1]
                                    docente_field = cols[2]
                                    horario_match = re.search(r'(\d{1,2}[:\.]\d{2}\s*(?:A|a)\s*\d{1,2}[:\.]\d{2})', docente_field)
                                    if horario_match:
                                        horario = horario_match.group(1).replace('.', ':')
                                        docente = docente_field.replace(horario_match.group(1), "").strip()
                                    else:
                                        docente = docente_field
                                    aula = cols[3]
                                elif len(cols) == 5:
                                    materia = cols[1]
                                    horario = cols[2]
                                    docente = cols[3]
                                    aula = cols[4]
                                    
                            elif carrera_idx == 1:
                                if len(cols) == 5:
                                    docente = cols[0]
                                    materia = cols[2]
                                    anio = parse_year_from_text(cols[3])
                                    aula = cols[4]
                                elif len(cols) >= 6:
                                    anio = parse_year_from_text(cols[0])
                                    materia = cols[2]
                                    horario = cols[3]
                                    docente = cols[4]
                                    aula = cols[5]
                                    
                            elif carrera_idx == 2:
                                doc_parts = [c for c in cols[0:2] if c]
                                docente = ", ".join(doc_parts)
                                materia = cols[3]
                                anio = parse_year_from_text(cols[4])
                                aula = cols[5] if len(cols) > 5 else ""
                                
                            elif carrera_idx == 3:
                                doc_parts = [c for c in cols[0:3] if c]
                                docente = ", ".join(doc_parts)
                                materia = cols[4]
                                anio = parse_year_from_text(cols[5])
                                aula = cols[6] if len(cols) > 6 else ""
                                
                            else:
                                materia = cols[carrera_idx + 1] if len(cols) > carrera_idx + 1 else ""
                                aula = cols[-1] if len(cols) > carrera_idx + 2 else ""
                                
                            materia = materia.strip()
                            docente = docente.strip()
                            aula = aula.strip()
                            
                            if re.match(r'^[-·\s]+$', aula) or not aula:
                                aula = "A designar"
                                
                            if not carrera or carrera == docente or len(carrera) < 4:
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
                            if not carrera:
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
