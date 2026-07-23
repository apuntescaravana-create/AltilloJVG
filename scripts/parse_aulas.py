import os
import glob
import json
import re
import pdfplumber

folder = r"d:\IA\Altillo\Aulas"
pdf_files = glob.glob(os.path.join(folder, "*.pdf"))

records = []

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

for filepath in pdf_files:
    fname = os.path.basename(filepath).lower()
    
    turno = "Mañana" if "tm" in fname else ("Tarde" if "tt" in fname else "Vespertino/Noche")
    
    dia = "Lunes"
    if "martes" in fname: dia = "Martes"
    elif "miercoles" in fname: dia = "Miércoles"
    elif "jueves" in fname: dia = "Jueves"
    elif "viernes" in fname: dia = "Viernes"
    elif "sabado" in fname: dia = "Sábado"
    
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
                        
                        # Detect structure based on column 0
                        # Case A: col[0] is '1°', col[1] is 'CS. JURIDICAS', col[2] is 'MATERIA', col[3] is '8,00 a 10,00', col[4] is 'DOCENTE', col[5] is 'AULA'
                        col0_is_year = bool(re.match(r'^\d+[°º]?$', cols[0]))
                        
                        if col0_is_year:
                            anio = f"{cols[0].replace('°','').replace('º','')}° Año"
                            carrera_raw = cols[1]
                            materia = cols[2]
                            horario = cols[3]
                            docente = cols[4] if len(cols) > 4 else ""
                            aula = cols[5] if len(cols) > 5 else (cols[4] if len(cols) > 4 else "")
                            # If col[4] looks like an aula (numbers/SUM/LAB), adjust
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

                        records.append({
                            "carrera": carrera,
                            "anio": anio,
                            "materia": materia,
                            "horario": horario,
                            "docente": docente,
                            "aula": aula,
                            "turno": turno,
                            "dia": dia
                        })

# Save to JS file so it can be loaded directly in browser without API dependencies
output_js = r"d:\IA\Academic\AltilloJVG\data\aulas_data.js"

with open(output_js, "w", encoding="utf-8") as f:
    f.write("const AULAS_DATABASE = " + json.dumps(records, ensure_ascii=False, indent=2) + ";\n")

print(f"Successfully generated {output_js} with {len(records)} clean aula entries!")
