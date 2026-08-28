"""
Script para generar los archivos oficiales de "Mapa de Carrera Personal" (.xlsx)
con la estética, marca de agua e identidad de:
La Caravana + Estudiantes Independientes (Lista 90) - AltilloJVG
"""
import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(BASE_DIR, "data", "mapas")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 1. Definición de materias para Profesorado de Filosofía
FILOSOFIA_DATA = [
    ("Primer Año", [
        ("Lógica 1 y Teoría de la Argumentación", []),
        ("Introducción a la Filosofía", []),
        ("Psicología Educacional", []),
        ("Psicología del Desarrollo", []),
        ("Sociología", []),
        ("Pedagogía", []),
        ("LEO 1 (Lectura y Escritura Académica)", []),
        ("Trabajo de Campo 1", []),
        ("Educación Sexual Integral (ESI)", []),
        ("Lengua Extranjera", [])
    ]),
    ("Segundo Año", [
        ("Didáctica General", ["Pedagogía"]),
        ("Historia de la Educación Argentina", ["Pedagogía", "Sociología"]),
        ("Historia de la Filosofía Antigua", ["Introducción a la Filosofía"]),
        ("Filosofía Argentina y Latinoamericana", ["Introducción a la Filosofía"]),
        ("Historia del Arte", []),
        ("Metodología de la Investigación", ["Lógica 1 y Teoría de la Argumentación"]),
        ("Nuevas Tecnologías", []),
        ("LEO 2", ["LEO 1 (Lectura y Escritura Académica)"]),
        ("Trabajo de Campo 2", ["Trabajo de Campo 1"])
    ]),
    ("Tercer Año", [
        ("Lógica 2", ["Lógica 1 y Teoría de la Argumentación"]),
        ("Filosofía de la Lógica", ["Lógica 1 y Teoría de la Argumentación"]),
        ("Historia de la Filosofía Medieval", ["Historia de la Filosofía Antigua"]),
        ("Metafísica", ["Historia de la Filosofía Antigua"]),
        ("Historia de la Ciencia", ["Metodología de la Investigación"]),
        ("Trabajo de Campo 3", ["Trabajo de Campo 2"]),
        ("Taller de Didáctica de la Filosofía y Prod. Materiales", ["Didáctica General"]),
        ("Sistema y Política Educativa", ["Historia de la Educación Argentina"]),
        ("Taller Filosofía y Educación", ["Historia de la Filosofía Antigua"]),
        ("Teoría del Conocimiento", ["Historia de la Filosofía Antigua"]),
        ("Ética", ["Introducción a la Filosofía"])
    ]),
    ("Cuarto Año", [
        ("Historia de la Filosofía Moderna", ["Historia de la Filosofía Medieval"]),
        ("Filosofía Política", ["Filosofía Argentina y Latinoamericana", "Ética"]),
        ("Filosofía del Lenguaje", ["Filosofía de la Lógica"]),
        ("Antropología Filosófica", ["Historia de la Filosofía Antigua"]),
        ("Estética", ["Historia del Arte"]),
        ("Práctica Docente 1", ["Taller de Didáctica de la Filosofía y Prod. Materiales", "Trabajo de Campo 3"])
    ]),
    ("Quinto Año", [
        ("Historia de la Filosofía Contemporánea", ["Historia de la Filosofía Moderna"]),
        ("Filosofía del Derecho", ["Filosofía Política"]),
        ("Filosofía de la Religión", ["Historia de la Filosofía Medieval"]),
        ("Filosofía de la Historia", ["Historia de la Filosofía Moderna"]),
        ("Filosofía de la Ciencia", ["Historia de la Ciencia", "Teoría del Conocimiento"]),
        ("Práctica Docente 2 y Residencia", ["Práctica Docente 1"])
    ])
]

def build_mapa_filosofia():
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Mapa de Carrera"

    # Paleta de Colores
    navy_fill = PatternFill(start_color="0B2545", end_color="0B2545", fill_type="solid")
    cyan_fill = PatternFill(start_color="0284C7", end_color="0284C7", fill_type="solid")
    gold_fill = PatternFill(start_color="D99B26", end_color="D99B26", fill_type="solid")
    light_blue_fill = PatternFill(start_color="F0F9FF", end_color="F0F9FF", fill_type="solid")
    light_gray_fill = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")
    section_fill = PatternFill(start_color="134074", end_color="134074", fill_type="solid")
    green_soft = PatternFill(start_color="DCFCE7", end_color="DCFCE7", fill_type="solid")

    font_title = Font(name="Arial", size=15, bold=True, color="FFFFFF")
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
    ws["A1"] = "MAPA DE CARRERA PERSONAL | ALTILLO JVG"
    ws["A1"].font = font_title
    ws["A1"].fill = navy_fill
    ws["A1"].alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[1].height = 32

    ws.merge_cells("A2:G2")
    ws["A2"] = "Desarrollado por La Caravana + Estudiantes Independientes (Lista 90) - Joaquín V. González"
    ws["A2"].font = font_subtitle
    ws["A2"].fill = section_fill
    ws["A2"].alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[2].height = 20

    # 2. Encabezados de Columnas
    headers = [
        ("A3", "Asignatura / Materia", 38),
        ("B3", "¿Cursada Regular? (SÍ / NO)", 20),
        ("C3", "¿Final Aprobado? (SÍ / NO)", 20),
        ("D3", "Correlativas para Cursar", 32),
        ("E3", "¿Podés Cursar?", 16),
        ("F3", "¿Podés Rendir Final?", 18),
        ("G3", "Estado Trayectoria", 20)
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
    materia_row_map = {}

    # 3. Llenado de Materias por Año
    for anio_label, materias in FILOSOFIA_DATA:
        # Fila de Año
        ws.merge_cells(f"A{current_row}:G{current_row}")
        section_cell = ws[f"A{current_row}"]
        section_cell.value = f"📌 {anio_label.upper()}"
        section_cell.font = font_section
        section_cell.fill = section_fill
        section_cell.alignment = Alignment(horizontal="left", vertical="center")
        ws.row_dimensions[current_row].height = 24
        current_row += 1

        for mat_name, correlativas in materias:
            materia_row_map[mat_name] = current_row
            
            row_fill = light_gray_fill if (current_row % 2 == 0) else PatternFill(fill_type=None)
            
            # Col A: Nombre
            ws[f"A{current_row}"] = mat_name
            ws[f"A{current_row}"].font = font_regular
            ws[f"A{current_row}"].border = thin_border
            ws[f"A{current_row}"].alignment = Alignment(vertical="center")
            if row_fill.fill_type: ws[f"A{current_row}"].fill = row_fill

            # Col B: Cursada Aprobada (Inicialmente NO)
            ws[f"B{current_row}"] = "NO"
            ws[f"B{current_row}"].font = font_bold
            ws[f"B{current_row}"].border = thin_border
            ws[f"B{current_row}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col C: Final Aprobado (Inicialmente NO)
            ws[f"C{current_row}"] = "NO"
            ws[f"C{current_row}"].font = font_bold
            ws[f"C{current_row}"].border = thin_border
            ws[f"C{current_row}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col D: Texto de Correlativas
            ws[f"D{current_row}"] = ", ".join(correlativas) if correlativas else "Sin correlativas previas"
            ws[f"D{current_row}"].font = Font(name="Arial", size=9, italic=(not correlativas), color="64748B" if not correlativas else "0F172A")
            ws[f"D{current_row}"].border = thin_border
            ws[f"D{current_row}"].alignment = Alignment(vertical="center")
            if row_fill.fill_type: ws[f"D{current_row}"].fill = row_fill

            # Col E: ¿Podés Cursar? (Fórmula condicional)
            if not correlativas:
                ws[f"E{current_row}"] = f'=IF(B{current_row}="SÍ","CURSADA REGULAR","¡HABILITADA!")'
            else:
                # Comprobar que todas las correlativas tengan cursada regular en Columna B
                conds = [f'B{materia_row_map[c]}="SÍ"' for c in correlativas if c in materia_row_map]
                if conds:
                    and_clause = f"AND({','.join(conds)})"
                    ws[f"E{current_row}"] = f'=IF(B{current_row}="SÍ","CURSADA REGULAR",IF({and_clause},"¡HABILITADA!","Faltan correlat."))'
                else:
                    ws[f"E{current_row}"] = f'=IF(B{current_row}="SÍ","CURSADA REGULAR","¡HABILITADA!")'
            
            ws[f"E{current_row}"].font = font_bold
            ws[f"E{current_row}"].border = thin_border
            ws[f"E{current_row}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col F: ¿Podés Rendir Final?
            if not correlativas:
                ws[f"F{current_row}"] = f'=IF(C{current_row}="SÍ","APROBADA",IF(B{current_row}="SÍ","¡LISTO P/ FINAL!","Falta cursada"))'
            else:
                conds_final = [f'C{materia_row_map[c]}="SÍ"' for c in correlativas if c in materia_row_map]
                if conds_final:
                    and_final = f"AND({','.join(conds_final)})"
                    ws[f"F{current_row}"] = f'=IF(C{current_row}="SÍ","APROBADA",IF(AND(B{current_row}="SÍ",{and_final}),"¡LISTO P/ FINAL!","Faltan finales prev."))'
                else:
                    ws[f"F{current_row}"] = f'=IF(C{current_row}="SÍ","APROBADA",IF(B{current_row}="SÍ","¡LISTO P/ FINAL!","Falta cursada"))'

            ws[f"F{current_row}"].font = font_bold
            ws[f"F{current_row}"].border = thin_border
            ws[f"F{current_row}"].alignment = Alignment(horizontal="center", vertical="center")

            # Col G: Estado General
            ws[f"G{current_row}"] = f'=IF(C{current_row}="SÍ","✅ Materia Aprobada",IF(B{current_row}="SÍ","⏳ Regular (Adeuda Final)","⚪ Pendiente"))'
            ws[f"G{current_row}"].font = font_bold
            ws[f"G{current_row}"].border = thin_border
            ws[f"G{current_row}"].alignment = Alignment(horizontal="center", vertical="center")

            ws.row_dimensions[current_row].height = 20
            current_row += 1

    last_data_row = current_row - 1
    total_materias = len(materia_row_map)

    # 4. Panel Lateral de Estadísticas y Avance
    ws.column_dimensions["I"].width = 30
    ws.column_dimensions["J"].width = 18

    ws.merge_cells("I3:J3")
    ws["I3"] = "📊 RESUMEN DE AVANCE"
    ws["I3"].font = font_header
    ws["I3"].fill = navy_fill
    ws["I3"].alignment = Alignment(horizontal="center", vertical="center")

    summary_rows = [
        ("Total Materias del Plan", total_materias, False),
        ("Cursadas Regulares", f'=COUNTIF(B4:B{last_data_row}, "SÍ")', True),
        ("Finales Aprobados", f'=COUNTIF(C4:C{last_data_row}, "SÍ")', True),
        ("Finales Adeudados", f'=COUNTIF(B4:B{last_data_row}, "SÍ") - COUNTIF(C4:C{last_data_row}, "SÍ")', True),
        ("% Cursadas Completadas", f'=COUNTIF(B4:B{last_data_row}, "SÍ") / {total_materias}', True),
        ("% Carrera Aprobada (Finales)", f'=COUNTIF(C4:C{last_data_row}, "SÍ") / {total_materias}', True)
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
        "1. Escribí 'SÍ' en la columna B cuando tengas la cursada regular aprobada.",
        "2. Escribí 'SÍ' en la columna C cuando hayas aprobado el examen final.",
        "3. Las columnas E y F te dirán automáticamente si estás en condiciones de cursar o rendir cada materia.",
        "4. El panel de la derecha calcula tus porcentajes en tiempo real.",
        "5. ¡Guardá una copia en tu Google Drive personal para no perder tus avances!"
    ]
    for inst in instructions:
        ws.merge_cells(f"I{r_idx}:J{r_idx}")
        ws[f"I{r_idx}"] = inst
        ws[f"I{r_idx}"].font = font_regular
        ws[f"I{r_idx}"].alignment = Alignment(vertical="center", wrap_text=True)
        ws.row_dimensions[r_idx].height = 28
        r_idx += 1

    out_file = os.path.join(OUTPUT_DIR, "Mapa_de_Carrera_Filosofia.xlsx")
    wb.save(out_file)
    print(f"[+] Archivo generado exitosamente: {out_file}")

if __name__ == "__main__":
    build_mapa_filosofia()
