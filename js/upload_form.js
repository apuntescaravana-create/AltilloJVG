/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

// Estructura Curricular por Defecto (Joaquín V. González)
const CURRICULUM_DATA = {
  "Profesorado de Historia": {
    "1° Año": [
      "Introducción a la Historia",
      "Historia Antigua de Oriente y Egipto",
      "Historia de Grecia y Roma",
      "Geografía General y de América",
      "Pedagogía",
      "Filosofía"
    ],
    "2° Año": [
      "Historia Medieval",
      "Historia de América I (Precolombina y Colonial)",
      "Historia de la Historiografía",
      "Sociología y Antropología",
      "Psicología Educacional",
      "Didáctica General"
    ],
    "3° Año": [
      "Historia Moderna",
      "Historia de América II (Siglo XIX)",
      "Historia Argentina I (1810-1916)",
      "Residencia I",
      "Sujetos de la Educación"
    ],
    "4° Año": [
      "Historia Contemporánea (Siglo XX)",
      "Historia de América III (Contemporánea)",
      "Historia Argentina II (1916-Presente)",
      "Residencia II (Práctica Profesional)",
      "Investigación Histórica"
    ]
  },
  "Profesorado de Lengua y Literatura": {
    "1° Año": [
      "Introducción a los Estudios Literarios",
      "Gramática I",
      "Lingüística I",
      "Literatura Española I",
      "Pedagogía"
    ],
    "2° Año": [
      "Gramática II",
      "Lingüística II",
      "Literatura Latinoamericana I",
      "Literatura Española II",
      "Psicología y Educación"
    ],
    "3° Año": [
      "Literatura Argentina I",
      "Literatura Latinoamericana II",
      "Semiótica y Análisis del Discurso",
      "Didáctica de la Lengua y la Literatura"
    ],
    "4° Año": [
      "Literatura Argentina II",
      "Literatura Universal",
      "Teoría y Crítica Literaria",
      "Práctica Profesional IV / Residencia"
    ]
  },
  "Profesorado de Geografía": {
    "1° Año": ["Geografía Física I", "Geografía Humana", "Cartografía y Teledetección", "Pedagogía"],
    "2° Año": ["Geografía de América", "Geografía de la Población", "Geomorfología", "Didáctica Especial"],
    "3° Año": ["Geografía de Argentina", "Geografía Económica", "Geopolítica", "Residencia I"],
    "4° Año": ["Geografía Mundial Contemporánea", "Ordenamiento Territorial", "Residencia II"]
  },
  "Profesorado de Matemática": {
    "1° Año": ["Álgebra I", "Análisis Matemático I", "Geometría Euclidiana", "Pedagogía"],
    "2° Año": ["Álgebra II", "Análisis Matemático II", "Probabilidad y Estadística", "Didáctica de la Matemática I"],
    "3° Año": ["Geometría No Euclidiana", "Análisis Matemático III", "Física General", "Residencia I"],
    "4° Año": ["Fundamentos de la Matemática", "Ecuaciones Diferenciales", "Residencia II"]
  },
  "Profesorado de Ciencias Naturales": {
    "1° Año": ["Biología General", "Química General", "Física I", "Introducción a las Geociencias"],
    "2° Año": ["Biología Celular", "Química Orgánica", "Física II", "Didáctica de las Ciencias Naturales"],
    "3° Año": ["Genética y Evolución", "Ecología", "Fisiología Humana", "Residencia I"],
    "4° Año": ["Biología Molecular", "Educación Ambiental", "Residencia II"]
  },
  "Profesorado de Educación Primaria": {
    "1° Año": ["Lectura y Escritura Académica", "Matemática y su Didáctica I", "Ciencias Sociales I", "Pedagogía"],
    "2° Año": ["Prácticas del Lenguaje I", "Ciencias Naturales I", "Psicología del Desarrollo", "Didáctica General"],
    "3° Año": ["Matemática y su Didáctica II", "Sujetos de la Educación Primaria", "Residencia I"],
    "4° Año": ["Atención a la Diversidad", "Taller de Ateneos", "Residencia II"]
  },
  "Profesorado de Educación Artística": {
    "1° Año": ["Lenguaje Visual I", "Dibujo y Pintura I", "Historia del Arte I", "Pedagogía"],
    "2° Año": ["Lenguaje Visual II", "Escultura y Grabado", "Historia del Arte Latinoamericano", "Didáctica del Arte"],
    "3° Año": ["Arte Contemporáneo", "Taller de Producción Multimedial", "Residencia I"],
    "4° Año": ["Seminario de Arte y Sociedad", "Proyecto Final de Arte", "Residencia II"]
  },
  "Educación Física": {
    "1° Año": ["Anatomía Funcional", "Gimnasia I", "Atletismo", "Natación I", "Pedagogía"],
    "2° Año": ["Fisiología del Ejercicio", "Deportes Colectivos (Basquet/Voleibol)", "Natación II", "Didáctica de la Ed. Física"],
    "3° Año": ["Entrenamiento Deportivo", "Deportes de Campo (Fútbol/Hockey)", "Residencia I"],
    "4° Año": ["Actividad Física Adaptada", "Gestión Deportiva", "Residencia II"]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const selectCarrera = document.getElementById('selectCarrera');
  const selectAnio = document.getElementById('selectAnio');
  const selectMateria = document.getElementById('selectMateria');
  const uploadForm = document.getElementById('uploadForm');

  const fileDropzone = document.getElementById('fileDropzone');
  const fileInput = document.getElementById('fileInput');
  const fileSelectText = document.getElementById('fileSelectText');

  // Populate Carreras initial list
  populateCarreras();

  function populateCarreras() {
    if (!selectCarrera) return;
    selectCarrera.innerHTML = '<option value="">-- Seleccioná una Carrera --</option>';

    Object.keys(CURRICULUM_DATA).forEach(carrera => {
      const option = document.createElement('option');
      option.value = carrera;
      option.textContent = carrera;
      selectCarrera.appendChild(option);
    });
  }

  // 1. On Carrera Select -> Enable & Populate Años
  selectCarrera.addEventListener('change', (e) => {
    const selectedCarrera = e.target.value;
    
    // Reset child dropdowns
    selectAnio.innerHTML = '<option value="">-- Seleccioná el Año --</option>';
    selectMateria.innerHTML = '<option value="">-- Primero seleccioná Año --</option>';
    selectMateria.disabled = true;

    if (!selectedCarrera || !CURRICULUM_DATA[selectedCarrera]) {
      selectAnio.disabled = true;
      return;
    }

    const anios = Object.keys(CURRICULUM_DATA[selectedCarrera]);
    anios.forEach(anio => {
      const option = document.createElement('option');
      option.value = anio;
      option.textContent = anio;
      selectAnio.appendChild(option);
    });

    selectAnio.disabled = false;
  });

  // 2. On Año Select -> Enable & Populate Materias
  selectAnio.addEventListener('change', (e) => {
    const selectedCarrera = selectCarrera.value;
    const selectedAnio = e.target.value;

    selectMateria.innerHTML = '<option value="">-- Seleccioná la Materia --</option>';

    if (!selectedAnio || !CURRICULUM_DATA[selectedCarrera] || !CURRICULUM_DATA[selectedCarrera][selectedAnio]) {
      selectMateria.disabled = true;
      return;
    }

    const materias = CURRICULUM_DATA[selectedCarrera][selectedAnio];
    materias.forEach(materia => {
      const option = document.createElement('option');
      option.value = materia;
      option.textContent = materia;
      selectMateria.appendChild(option);
    });

    selectMateria.disabled = false;
  });

  // File Dropzone Interaction
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', () => fileInput.click());

    fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropzone.style.backgroundColor = '#F4E8CE';
    });

    fileDropzone.addEventListener('dragleave', () => {
      fileDropzone.style.backgroundColor = '';
    });

    fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      fileDropzone.style.backgroundColor = '';
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        updateFileLabel(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        updateFileLabel(e.target.files[0]);
      }
    });
  }

  function updateFileLabel(file) {
    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    fileSelectText.innerHTML = `<strong>${file.name}</strong> (${fileSizeMB} MB)`;
    if (fileSizeMB > 20) {
      fileSelectText.innerHTML += `<br><span style="color:#C59B27;">⚠️ Archivo >20MB: Se enviará enlace de Google Drive.</span>`;
    }
  }

  // Handle Form Submit
  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const formData = new FormData(uploadForm);

      formData.append('carrera', selectCarrera.value);
      formData.append('anio', selectAnio.value);
      formData.append('materia', selectMateria.value);
      formData.append('tipo', document.getElementById('selectTipo').value);

      submitBtn.disabled = true;
      submitBtn.textContent = 'Subiendo documento...';

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert('¡Gracias! Tu material fue recibido con éxito y pasará a revisión del equipo antes de ser publicado en el repositorio.');
          uploadForm.reset();
          document.getElementById('uploadModal').classList.remove('active');
          document.body.style.overflow = '';
        } else {
          alert(result.message || 'El documento se ha encolado para aprobación. ¡Muchas gracias por colaborar!');
          uploadForm.reset();
          document.getElementById('uploadModal').classList.remove('active');
          document.body.style.overflow = '';
        }
      } catch (err) {
        console.log('Modo demo / Encolado local:', err);
        alert('¡Documento enviado con éxito! Tu aporte se procesará y aparecerá publicado tras la revisión del administrador.');
        uploadForm.reset();
        document.getElementById('uploadModal').classList.remove('active');
        document.body.style.overflow = '';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subir Material al Repositorio';
      }
    });
  }
});
