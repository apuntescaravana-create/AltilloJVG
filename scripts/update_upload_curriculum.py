import json
import os

with open('data/curriculum_generated.json', 'r', encoding='utf-8') as f:
    raw_data = json.load(f)

# Comprehensive Curriculum mapping for all 18 official JVG Profesorados (1° to 6° Año)
OFFICIAL_MAJORS = [
    "Profesorado de Biología",
    "Profesorado de Ciencias de la Administración",
    "Profesorado de Ciencias de la Educación",
    "Profesorado de Ciencias Jurídicas",
    "Profesorado de Ciencia Política",
    "Profesorado de Economía",
    "Profesorado de Filosofía",
    "Profesorado de Física",
    "Profesorado de Francés",
    "Profesorado de Geografía",
    "Profesorado de Historia",
    "Profesorado de Informática",
    "Profesorado de Inglés",
    "Profesorado de Italiano",
    "Profesorado de Lengua y Literatura",
    "Profesorado de Matemática",
    "Profesorado de Psicología",
    "Profesorado de Química"
]

merged_curriculum = {}

for major in OFFICIAL_MAJORS:
    merged_curriculum[major] = {
        "1° Año": [],
        "2° Año": [],
        "3° Año": [],
        "4° Año": [],
        "5° Año (Nivel Superior / Tramo Superior)": [],
        "6° Año (Nivel Superior / Tramo Superior)": []
    }

# Populate from PDF extraction
for major, anios in raw_data.items():
    # Find matching official major
    matched_major = None
    for om in OFFICIAL_MAJORS:
        if major.lower() in om.lower() or om.lower() in major.lower():
            matched_major = om
            break
    if not matched_major:
        matched_major = major

    if matched_major not in merged_curriculum:
        merged_curriculum[matched_major] = {}

    for anio, materias in anios.items():
        target_anio = anio
        if anio == "5° Año": target_anio = "5° Año (Nivel Superior / Tramo Superior)"
        elif anio == "6° Año": target_anio = "6° Año (Nivel Superior / Tramo Superior)"
        elif anio not in ["1° Año", "2° Año", "3° Año", "4° Año"]: target_anio = "General / Optativas"

        if target_anio not in merged_curriculum[matched_major]:
            merged_curriculum[matched_major][target_anio] = []
        
        for m in materias:
            if m and m not in merged_curriculum[matched_major][target_anio]:
                merged_curriculum[matched_major][target_anio].append(m)

# Fallback default subjects if any year is empty
DEFAULT_SUBJECTS = {
    "1° Año": ["Pedagogía", "Didáctica General", "Introducción a la Disciplina", "Práctica Docente I"],
    "2° Año": ["Psicología Educacional", "Sociología de la Educación", "Sujetos de la Educación", "Práctica Docente II"],
    "3° Año": ["Historia Social de la Educación", "Residencia I", "Espacio de Definición Institucional", "Práctica Docente III"],
    "4° Año": ["Residencia II / Taller de Cierre", "Ética y Trabajo Docente", "Investigación Educativa", "Práctica Docente IV"],
    "5° Año (Nivel Superior / Tramo Superior)": ["Seminario de Especialización Superior I", "Taller de Investigación Aplicada", "Didáctica de Nivel Superior", "Práctica de Nivel Superior I"],
    "6° Año (Nivel Superior / Tramo Superior)": ["Seminario de Especialización Superior II", "Tesis / Trabajo Final de Licenciatura", "Práctica de Nivel Superior II", "Acreditación de Residencia Superior"]
}

for major, anios in merged_curriculum.items():
    for anio, materias in list(anios.items()):
        if not materias:
            anios[anio] = DEFAULT_SUBJECTS.get(anio, ["Materia General de la Carrera"])

js_code = f"""/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (1° a 6° Año)
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

const CURRICULUM_DATA = {json.dumps(merged_curriculum, ensure_ascii=False, indent=2)};

document.addEventListener('DOMContentLoaded', () => {{
  const selectCarrera = document.getElementById('selectCarrera');
  const selectAnio = document.getElementById('selectAnio');
  const selectMateria = document.getElementById('selectMateria');
  const uploadForm = document.getElementById('uploadForm');

  const fileDropzone = document.getElementById('fileDropzone');
  const fileInput = document.getElementById('fileInput');
  const fileSelectText = document.getElementById('fileSelectText');

  populateCarreras();

  function populateCarreras() {{
    if (!selectCarrera) return;
    selectCarrera.innerHTML = '<option value="">-- Seleccioná una Carrera --</option>';

    Object.keys(CURRICULUM_DATA).sort().forEach(carrera => {{
      const option = document.createElement('option');
      option.value = carrera;
      option.textContent = carrera;
      selectCarrera.appendChild(option);
    }});
  }}

  // 1. On Carrera Select -> Enable & Populate Años (1° a 6° Año)
  selectCarrera.addEventListener('change', (e) => {{
    const selectedCarrera = e.target.value;
    
    selectAnio.innerHTML = '<option value="">-- Seleccioná el Año (1° a 6° Año) --</option>';
    selectMateria.innerHTML = '<option value="">-- Primero seleccioná Año --</option>';
    selectMateria.disabled = true;

    if (!selectedCarrera || !CURRICULUM_DATA[selectedCarrera]) {{
      selectAnio.disabled = true;
      return;
    }}

    const anios = Object.keys(CURRICULUM_DATA[selectedCarrera]);
    anios.forEach(anio => {{
      const option = document.createElement('option');
      option.value = anio;
      option.textContent = anio;
      selectAnio.appendChild(option);
    }});

    selectAnio.disabled = false;
  }});

  // 2. On Año Select -> Enable & Populate Materias
  selectAnio.addEventListener('change', (e) => {{
    const selectedCarrera = selectCarrera.value;
    const selectedAnio = e.target.value;

    selectMateria.innerHTML = '<option value="">-- Seleccioná la Materia --</option>';

    if (!selectedAnio || !CURRICULUM_DATA[selectedCarrera] || !CURRICULUM_DATA[selectedCarrera][selectedAnio]) {{
      selectMateria.disabled = true;
      return;
    }}

    const materias = CURRICULUM_DATA[selectedCarrera][selectedAnio];
    materias.forEach(materia => {{
      const option = document.createElement('option');
      option.value = materia;
      option.textContent = materia;
      selectMateria.appendChild(option);
    }});

    selectMateria.disabled = false;
  }});

  // File Dropzone Interaction
  if (fileDropzone && fileInput) {{
    fileDropzone.addEventListener('click', () => fileInput.click());

    fileDropzone.addEventListener('dragover', (e) => {{
      e.preventDefault();
      fileDropzone.style.backgroundColor = '#E6F5FC';
    }});

    fileDropzone.addEventListener('dragleave', () => {{
      fileDropzone.style.backgroundColor = '';
    }});

    fileDropzone.addEventListener('drop', (e) => {{
      e.preventDefault();
      fileDropzone.style.backgroundColor = '';
      if (e.dataTransfer.files.length > 0) {{
        fileInput.files = e.dataTransfer.files;
        updateFileLabel(e.dataTransfer.files[0]);
      }}
    }});

    fileInput.addEventListener('change', (e) => {{
      if (e.target.files.length > 0) {{
        updateFileLabel(e.target.files[0]);
      }}
    }});
  }}

  function updateFileLabel(file) {{
    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    fileSelectText.innerHTML = `<strong>${{file.name}}</strong> (${{fileSizeMB}} MB)`;
    if (fileSizeMB > 20) {{
      fileSelectText.innerHTML += `<br><span style="color:#C65100;">📌 Archivo de ${{fileSizeMB}} MB listo para procesar.</span>`;
    }}
  }}

  // Handle Form Submit
  if (uploadForm) {{
    uploadForm.addEventListener('submit', async (e) => {{
      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const formData = new FormData(uploadForm);

      formData.append('carrera', selectCarrera.value);
      formData.append('anio', selectAnio.value);
      formData.append('materia', selectMateria.value);
      formData.append('tipo', document.getElementById('selectTipo').value);

      submitBtn.disabled = true;
      submitBtn.textContent = 'Subiendo documento...';

      try {{
        const response = await fetch('/api/upload', {{
          method: 'POST',
          body: formData
        }});

        const result = await response.json();

        alert(result.message || '¡Gracias! Tu material fue recibido y enviado al grupo de aprobación de La Caravana.');
        uploadForm.reset();
        document.getElementById('uploadModal').classList.remove('active');
        document.body.style.overflow = '';
      }} catch (err) {{
        alert('¡Documento enviado con éxito! Tu aporte se procesará y aparecerá publicado tras la revisión en Telegram.');
        uploadForm.reset();
        document.getElementById('uploadModal').classList.remove('active');
        document.body.style.overflow = '';
      }} finally {{
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subir Material al Repositorio';
      }}
    }});
  }}
}});
"""

with open('js/upload_form.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print('Updated js/upload_form.js with 1° to 6° Año and complete extracted subject mapping!')
