"""
build_all_career_maps.py
Genera las plantillas oficiales de "Mapa de Carrera Personal" (.xlsx)
para las 18 carreras y profesorados del ISP Joaquín V. González.
Incluye menú desplegable nativo (SI/NO), fórmulas de avance automático,
corrección de LEO ("Lectura, Escritura y Oralidad") e identidad de La Caravana.
"""
import os
import json
import re
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation

BASE_DIR = r"d:\IA\AltilloJVG"
OUTPUT_DIR = os.path.join(BASE_DIR, "data", "mapas")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Cargar CURRICULUM_DATA desde js/upload_form.js
with open(os.path.join(BASE_DIR, "js", "upload_form.js"), "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find("const CURRICULUM_DATA = ")
end_idx = text.find(";\n\ndocument.addEventListener")
json_str = text[idx + len("const CURRICULUM_DATA = "):end_idx]
CURRICULUM_DATA = json.loads(json_str)

# 18 Carreras Oficiales
CAREER_FILENAMES = {
    "Profesorado de Filosofía": "Mapa_de_Carrera_Filosofia.xlsx",
    "Profesorado de Historia": "Mapa_de_Carrera_Historia.xlsx",
    "Profesorado de Lengua y Literatura": "Mapa_de_Carrera_Lengua_y_Literatura.xlsx",
    "Profesorado de Inglés": "Mapa_de_Carrera_Ingles.xlsx",
    "Profesorado de Matemática": "Mapa_de_Carrera_Matematica.xlsx",
    "Profesorado de Biología": "Mapa_de_Carrera_Biologia.xlsx",
    "Profesorado de Física": "Mapa_de_Carrera_Fisica.xlsx",
    "Profesorado de Química": "Mapa_de_Carrera_Quimica.xlsx",
    "Profesorado de Geografía": "Mapa_de_Carrera_Geografia.xlsx",
    "Profesorado de Informática": "Mapa_de_Carrera_Informatica.xlsx",
    "Profesorado de Psicología": "Mapa_de_Carrera_Psicologia.xlsx",
    "Profesorado de Ciencias de la Educación": "Mapa_de_Carrera_Ciencias_de_la_Educacion.xlsx",
    "Profesorado de Cs. de la Educación": "Mapa_de_Carrera_Ciencias_de_la_Educacion.xlsx",
    "Profesorado de Ciencias Jurídicas": "Mapa_de_Carrera_Ciencias_Juridicas.xlsx",
    "Profesorado de Cs. Jurídicas": "Mapa_de_Carrera_Ciencias_Juridicas.xlsx",
    "Profesorado de Ciencia Política": "Mapa_de_Carrera_Ciencia_Politica.xlsx",
    "Profesorado de Economía": "Mapa_de_Carrera_Economia.xlsx",
    "Profesorado de Ciencias de la Administración": "Mapa_de_Carrera_Ciencias_de_la_Administracion.xlsx",
    "Profesorado de Francés": "Mapa_de_Carrera_Frances.xlsx",
    "Profesorado de Italiano": "Mapa_de_Carrera_Italiano.xlsx"
}

def sanitize_subject_name(name):
    # Corregir Lectura y Escritura Académica a Lectura, Escritura y Oralidad
    name = re.sub(r'lectura\s+y\s+escritura\s+acad[eé]mica', 'Lectura, Escritura y Oralidad', name, flags=re.IGNORECASE)
    name = re.sub(r'LEO\s*1\s*\(.*?\)', 'LEO 1 (Lectura, Escritura y Oralidad)', name)
    name = re.sub(r'LEO\s*2\s*\(.*?\)', 'LEO 2 (Lectura, Escritura y Oralidad)', name)
    name = re.sub(r'\bLEO\s*1\b', 'LEO 1 (Lectura, Escritura y Oralidad)', name)
    name = re.sub(r'\bLEO\s*2\b', 'LEO 2 (Lectura, Escritura y Oralidad)', name)
    return name.strip()

def build_career_map(career_name, career_data, filename):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Mapa de Carrera"

    # Paleta de Colores Institucional
    navy_fill = PatternFill(start_color="0B2545", end_color="0B2545", fill_type="solid")
    cyan_fill = PatternFill(start_color="0284C7", end_color="0284C7", fill_type="solid")
    gold_fill = PatternFill(start_color="D99B26", end_color="D99B26", fill_type="solid")
    light_blue_fill = PatternFill(start_color="F0F9FF", end_color="F0F9FF", fill_type="solid")
    light_gray_fill = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")
    section_fill = PatternFill(start_color="134074", end_color="134074", fill_type="solid")
    green_soft = PatternFill(start_color="DCFCE7", end_color="DCFCE7", fill_type="solid")

    font_title = Font(name="Arial", size=14, bold=True, color="FFFFFF")
    font_subtitle = Font(name="Arial", size=10, italic=True, color="BAE6FD")
    font_section = Font(name="Arial", size=11, bold=True, color="FFFFFF")
    font_header = Font(name="Arial", size=10, bold=True, color="FFFFFF")
    font_regular = Font(name="Arial", size=10)
    font_bold = Font(name="Arial", size=10, bold=True)
    font_indicator = Font(name="Arial", size=11, bold=True, color="0B2545")

    thin_border = Border(
        left=Side(style='thin', color='CBD5E1'),
        right=Side(style='thin', color='CBD5E1'),
        top=Side(style='thin', color='CBD5E1'),
        bottom=Side(style='thin', color='CBD5E1')
    )

    # 1. Encabezado Institucional
    ws.merge_cells("A1:G1")
    ws["A1"] = f"MAPA DE CARRERA | {career_name.upper()}"
    ws["A1"].font = font_title
    ws["A1"].fill = navy_fill
    ws["A1"].alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[1].height = 32

    ws.merge_cells("A2:G2")
    ws["A2"] = "La Caravana + Estudiantes Independientes | Altillo JVG - ISP Joaquín V. González"
    ws["A2"].font = font_subtitle
    ws["A2"].fill = section_fill
    ws["A2"].alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[2].height = 20

    # 2. Encabezados de Columnas
    headers = [
        ("A3", "Asignatura / Materia", 42),
        ("B3", "¿Cursada Regular? (SI/NO)", 22),
        ("C3", "¿Final Aprobado? (SI/NO)", 22),
        ("D3", "Régimen / Año", 24),
        ("E3", "¿Cursada?", 18),
        ("F3", "¿Final?", 20),
        ("G3", "Estado de Avance", 24)
    ]

    for cell_id, text, col_width in headers:
        cell = ws[cell_id]
        cell.value = text
        cell.font = font_header
        cell.fill = cyan_fill
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        col_letter = cell_id[0]
        ws.column_dimensions[col_letter].width = col_width
    ws.row_dimensions[3].height = 28

    current_row = 4
    total_materias_count = 0

    # 3. Llenado de Materias por Año
    for anio_label, materias in career_data.items():
        if not materias:
            continue

        # Fila de Sección de Año
        ws.merge_cells(f"A{current_row}:G{current_row}")
        section_cell = ws[f"A{current_row}"]
        section_cell.value = f"📌 {anio_label.upper()}"
        section_cell.font = font_section
        section_cell.fill = section_fill
        section_cell.alignment = Alignment(horizontal="left", vertical="center")
        ws.row_dimensions[current_row].height = 24
        current_row += 1

        for raw_mat in materias:
            mat_name = sanitize_subject_name(raw_mat)
            r = current_row
            total_materias_count += 1
            row_fill = light_gray_fill if (r % 2 == 0) else PatternFill(fill_type=None)

            # Col A: Nombre de la Materia
            ws[f"A{r}"] = mat_name
            ws[f"A{r}"].font = font_regular
            ws[f"A{r}"].border = thin_border
            ws[f"A{r}"].alignment = Alignment(vertical="center")
            if row_fill.fill_type: ws[f"A{r}"].fill = row_fill

            # Col B: Cursada Regular (Por defecto NO)
            ws[f"B{r}"] = "NO"
            ws[f"B{r}"].font = font_bold
            ws[f"B{r}"].border = thin_border
            ws[f"B{r}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col C: Final Aprobado (Por defecto NO)
            ws[f"C{r}"] = "NO"
            ws[f"C{r}"].font = font_bold
            ws[f"C{r}"].border = thin_border
            ws[f"C{r}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col D: Año de Cursada
            ws[f"D{r}"] = anio_label
            ws[f"D{r}"].font = Font(name="Arial", size=9, color="64748B")
            ws[f"D{r}"].border = thin_border
            ws[f"D{r}"].alignment = Alignment(horizontal="center", vertical="center")
            if row_fill.fill_type: ws[f"D{r}"].fill = row_fill

            # Condiciones universales para SI / SÍ / TRUE
            is_reg = f'OR(B{r}="SI",B{r}="SÍ",B{r}=TRUE)'
            is_fin = f'OR(C{r}="SI",C{r}="SÍ",C{r}=TRUE)'

            # Col E: Estado de Cursada
            ws[f"E{r}"] = f'=IF({is_reg},"REGULAR","PENDIENTE")'
            ws[f"E{r}"].font = font_bold
            ws[f"E{r}"].border = thin_border
            ws[f"E{r}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col F: Estado de Final
            ws[f"F{r}"] = f'=IF({is_fin},"APROBADA",IF({is_reg},"RINDE FINAL","ADEUDA"))'
            ws[f"F{r}"].font = font_bold
            ws[f"F{r}"].border = thin_border
            ws[f"F{r}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col G: Estado General
            ws[f"G{r}"] = f'=IF({is_fin},"✅ Aprobada",IF({is_reg},"⏳ Cursada (Rinde Final)","⚪ Pendiente"))'
            ws[f"G{r}"].font = font_bold
            ws[f"G{r}"].border = thin_border
            ws[f"G{r}"].alignment = Alignment(horizontal="center", vertical="center")

            ws.row_dimensions[r].height = 20
            current_row += 1

    last_data_row = current_row - 1

    if total_materias_count > 0:
        # Menú Desplegable Nativo (Dropdown) con SI / NO
        dv = DataValidation(type="list", formula1='"SI,NO"', allow_blank=True)
        dv.showDropDown = None
        dv.sqref = f"B4:C{last_data_row}"
        ws.add_data_validation(dv)

        # Panel Lateral de Estadísticas y Avance
        ws.column_dimensions["I"].width = 30
        ws.column_dimensions["J"].width = 18

        ws.merge_cells("I3:J3")
        ws["I3"] = "📊 RESUMEN DE AVANCE"
        ws["I3"].font = font_header
        ws["I3"].fill = navy_fill
        ws["I3"].alignment = Alignment(horizontal="center", vertical="center")

        count_reg_formula = f'=COUNTIF(B4:B{last_data_row}, "S*") + COUNTIF(B4:B{last_data_row}, TRUE)'
        count_fin_formula = f'=COUNTIF(C4:C{last_data_row}, "S*") + COUNTIF(C4:C{last_data_row}, TRUE)'

        summary_rows = [
            ("Total Materias del Plan", total_materias_count, False),
            ("Cursadas Regulares", count_reg_formula, True),
            ("Finales Aprobados", count_fin_formula, True),
            ("Finales Adeudados", "=J5-J6", True),
            ("% Cursadas Completadas", f'=J5/{total_materias_count}', True),
            ("% Carrera Aprobada (Finales)", f'=J6/{total_materias_count}', True)
        ]

        r_idx = 4
        for label, val, is_formula in summary_rows:
            ws[f"I{r_idx}"] = label
            ws[f"I{r_idx}"].font = font_bold
            ws[f"I{r_idx}"].border = thin_border
            ws[f"I{r_idx}"].fill = light_blue_fill
            ws[f"I{r_idx}"].alignment = Alignment(vertical="center")

            ws[f"J{r_idx}"] = val
            ws[f"J{r_idx}"].font = font_indicator
            ws[f"J{r_idx}"].border = thin_border
            ws[f"J{r_idx}"].alignment = Alignment(horizontal="center", vertical="center")

            if "%" in label:
                ws[f"J{r_idx}"].number_format = '0.0%'
                ws[f"J{r_idx}"].fill = green_soft

            ws.row_dimensions[r_idx].height = 24
            r_idx += 1

        # Instrucciones de uso en el Excel
        r_idx += 1
        ws.merge_cells(f"I{r_idx}:J{r_idx}")
        ws[f"I{r_idx}"] = "💡 INSTRUCCIONES DE USO"
        ws[f"I{r_idx}"].font = font_header
        ws[f"I{r_idx}"].fill = gold_fill
        ws[f"I{r_idx}"].alignment = Alignment(horizontal="center", vertical="center")
        r_idx += 1

        instructions = [
            "1. Hacé clic en la celda y elegí 'SI' o 'NO' desde el menú desplegable.",
            "2. Columna B: Marcá 'SI' si tenés la cursada regular aprobada.",
            "3. Columna C: Marcá 'SI' si aprobaste el final o promocionaste.",
            "4. Las columnas E, F y G se actualizan automáticamente en tiempo real.",
            "5. El panel lateral calcula tu avance y porcentaje de carrera en vivo.",
            "6. Podés subir el archivo a tu Google Drive personal para editarlo online."
        ]
        for inst in instructions:
            ws.merge_cells(f"I{r_idx}:J{r_idx}")
            ws[f"I{r_idx}"] = inst
            ws[f"I{r_idx}"].font = font_regular
            ws[f"I{r_idx}"].alignment = Alignment(vertical="center", wrap_text=True)
            ws.row_dimensions[r_idx].height = 26
            r_idx += 1

    out_file = os.path.join(OUTPUT_DIR, filename)
    wb.save(out_file)
    print(f"[OK] Generado: {filename} ({total_materias_count} materias)")

# Generar para cada carrera
for career, filename in CAREER_FILENAMES.items():
    if career in CURRICULUM_DATA:
        build_career_map(career, CURRICULUM_DATA[career], filename)

# También crear plantilla genérica universal
default_general_data = {
    "1° Año": ["Pedagogía", "Didáctica General", "LEO (Lectura, Escritura y Oralidad)", "Práctica Docente I"],
    "2° Año": ["Psicología Educacional", "Sociología de la Educación", "Sujetos de la Educación", "Práctica Docente II"],
    "3° Año": ["Historia Social de la Educación", "Residencia I", "Espacio Institucional", "Práctica Docente III"],
    "4° Año": ["Residencia II", "Ética y Trabajo Docente", "Investigación Educativa", "Práctica Docente IV"]
}
build_career_map("Plantilla Universal de Carrera", default_general_data, "Mapa_de_Carrera_General_Plantilla.xlsx")
print("[COMPLETO] Todos los mapas generados exitosamente.")
