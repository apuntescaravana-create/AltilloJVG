/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (18 Profesorados Oficiales)
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

// Estructura Curricular de los 18 Profesorados del ISP Joaquín V. González
const CURRICULUM_DATA = {
  // --- Ciencias Sociales y Humanidades ---
  "Profesorado de Historia": {
    "1° Año": ["Introducción a la Historia", "Historia Antigua de Oriente y Egipto", "Historia de Grecia y Roma", "Geografía General", "Pedagogía"],
    "2° Año": ["Historia Medieval", "Historia de América I", "Historiografía", "Sociología y Antropología", "Didáctica General"],
    "3° Año": ["Historia Moderna", "Historia de América II", "Historia Argentina I", "Residencia I"],
    "4° Año": ["Historia Contemporánea", "Historia de América III", "Historia Argentina II", "Residencia II"]
  },
  "Profesorado de Geografía": {
    "1° Año": ["Geografía Física I", "Geografía Humana", "Cartografía", "Pedagogía"],
    "2° Año": ["Geografía de América", "Geografía Urbana", "Geomorfología", "Didáctica Especial"],
    "3° Año": ["Geografía de Argentina", "Geografía Económica", "Geopolítica", "Residencia I"],
    "4° Año": ["Geografía Mundial Contemporánea", "Ordenamiento Territorial", "Residencia II"]
  },
  "Profesorado de Filosofía": {
    "1° Año": ["Introducción a la Filosofía", "Historia de la Filosofía Antigua", "Lógica I", "Pedagogía"],
    "2° Año": ["Filosofía Medieval", "Gnoseología", "Lógica II", "Didáctica de la Filosofía"],
    "3° Año": ["Filosofía Moderna", "Ética", "Metafísica", "Residencia I"],
    "4° Año": ["Filosofía Contemporánea", "Filosofía Argentina y Latinoamericana", "Residencia II"]
  },
  "Profesorado de Psicología": {
    "1° Año": ["Introducción a la Psicología", "Psicología General", "Biología del Comportamiento", "Pedagogía"],
    "2° Año": ["Psicología Evolutiva I", "Psicoanálisis", "Psicología Social", "Didáctica de la Psicología"],
    "3° Año": ["Psicología Evolutiva II", "Psicopatología", "Psicología Institucional", "Residencia I"],
    "4° Año": ["Psicopedagogía", "Técnicas de Evaluación", "Residencia II"]
  },
  "Profesorado de Ciencias Jurídicas": {
    "1° Año": ["Derecho Político", "Derecho Civil I", "Teoría del Estado", "Pedagogía"],
    "2° Año": ["Derecho Constitucional", "Derecho Penal", "Sociología Jurídica", "Didáctica de las Ciencias Jurídicas"],
    "3° Año": ["Derecho Internacional", "Derecho Administrativo", "Economía Política", "Residencia I"],
    "4° Año": ["Derechos Humanos", "Derecho del Trabajo", "Residencia II"]
  },

  // --- Lenguas Extranjeras y Literatura ---
  "Profesorado de Lengua y Literatura": {
    "1° Año": ["Introducción a los Estudios Literarios", "Gramática I", "Lingüística I", "Literatura Española I", "Pedagogía"],
    "2° Año": ["Gramática II", "Lingüística II", "Literatura Latinoamericana I", "Literatura Española II", "Didáctica Especial"],
    "3° Año": ["Literatura Argentina I", "Literatura Latinoamericana II", "Semiótica", "Residencia I"],
    "4° Año": ["Literatura Argentina II", "Literatura Universal", "Teoría Literaria", "Residencia II"]
  },
  "Profesorado de Inglés": {
    "1° Año": ["Lengua Inglesa I", "Fonética y Fonología I", "Gramática Inglesa I", "Pedagogía"],
    "2° Año": ["Lengua Inglesa II", "Fonética y Fonología II", "Gramática Inglesa II", "Estudios Culturales"],
    "3° Año": ["Lengua Inglesa III", "Literatura en Lengua Inglesa I", "Didáctica del Inglés", "Residencia I"],
    "4° Año": ["Lengua Inglesa IV", "Literatura en Lengua Inglesa II", "Residencia II"]
  },
  "Profesorado de Francés": {
    "1° Año": ["Lengua Francesa I", "Fonética Francesa I", "Gramática Francesa I", "Pedagogía"],
    "2° Año": ["Lengua Francesa II", "Fonética Francesa II", "Cultura Francesa", "Didáctica del Francés"],
    "3° Año": ["Lengua Francesa III", "Literatura Francesa I", "Residencia I"],
    "4° Año": ["Lengua Francesa IV", "Literatura Francesa II", "Residencia II"]
  },
  "Profesorado de Italiano": {
    "1° Año": ["Lengua Italiana I", "Fonética Italiana I", "Gramática Italiana I", "Pedagogía"],
    "2° Año": ["Lengua Italiana II", "Cultura e Historia Italiana", "Didáctica del Italiano"],
    "3° Año": ["Lengua Italiana III", "Literatura Italiana I", "Residencia I"],
    "4° Año": ["Lengua Italiana IV", "Literatura Italiana II", "Residencia II"]
  },

  // --- Ciencias Exactas y Naturales ---
  "Profesorado de Matemática": {
    "1° Año": ["Álgebra I", "Análisis Matemático I", "Geometría Euclidiana", "Pedagogía"],
    "2° Año": ["Álgebra II", "Análisis Matemático II", "Probabilidad y Estadística", "Didáctica de la Matemática I"],
    "3° Año": ["Geometría No Euclidiana", "Análisis Matemático III", "Física General", "Residencia I"],
    "4° Año": ["Fundamentos de la Matemática", "Ecuaciones Diferenciales", "Residencia II"]
  },
  "Profesorado de Física": {
    "1° Año": ["Física General I", "Álgebra Lineal", "Análisis Matemático I", "Pedagogía"],
    "2° Año": ["Física General II", "Físicoquímica", "Análisis Matemático II", "Didáctica de la Física"],
    "3° Año": ["Termodinámica", "Electromagnetismo", "Mecánica Clásica", "Residencia I"],
    "4° Año": ["Física Moderna y Cuántica", "Óptica", "Residencia II"]
  },
  "Profesorado de Química": {
    "1° Año": ["Química General e Inorgánica I", "Matemática Aplicada", "Física General", "Pedagogía"],
    "2° Año": ["Química Orgánica I", "Química Analítica", "Físicoquímica", "Didáctica de la Química"],
    "3° Año": ["Química Orgánica II", "Bioquímica", "Química Industrial", "Residencia I"],
    "4° Año": ["Química Ambiental", "Análisis Instrumental", "Residencia II"]
  },
  "Profesorado de Biología": {
    "1° Año": ["Biología General", "Botánica I", "Zoología I", "Química General", "Pedagogía"],
    "2° Año": ["Biología Celular y Molecular", "Botánica II", "Zoología II", "Didáctica de la Biología"],
    "3° Año": ["Genética", "Ecología", "Fisiología Humana", "Residencia I"],
    "4° Año": ["Evolución", "Biogeografía", "Residencia II"]
  },
  "Profesorado de Ciencias Naturales": {
    "1° Año": ["Biología I", "Química I", "Física I", "Geociencias", "Pedagogía"],
    "2° Año": ["Biología II", "Química II", "Física II", "Didáctica de las Ciencias Naturales"],
    "3° Año": ["Ecología y Medio Ambiente", "Astronomía", "Residencia I"],
    "4° Año": ["Epistemología de las Ciencias", "Proyecto de Investigación", "Residencia II"]
  },

  // --- Educación, Economía e Informática ---
  "Profesorado de Educación Primaria": {
    "1° Año": ["Taller de Lectura y Escritura", "Matemática I", "Ciencias Sociales I", "Pedagogía"],
    "2° Año": ["Prácticas del Lenguaje I", "Ciencias Naturales I", "Psicología Educacional", "Didáctica General"],
    "3° Año": ["Matemática II", "Sujetos de la Educación Primaria", "Residencia I"],
    "4° Año": ["Ateneo de Prácticas", "Educación Inclusiva", "Residencia II"]
  },
  "Profesorado de Educación Inicial": {
    "1° Año": ["Sujeto de la Educación Inicial I", "Juego y Desarrollo", "Lenguaje Musical", "Pedagogía"],
    "2° Año": ["Didáctica de la Educación Inicial", "Literatura Infantil", "Expresión Corporal"],
    "3° Año": ["Sujeto de la Educación Inicial II", "Prácticas del Lenguaje en el Jardín", "Residencia I"],
    "4° Año": ["Taller de Juego Tradicional", "Gestión Institucional", "Residencia II"]
  },
  "Profesorado de Economía": {
    "1° Año": ["Principios de Economía", "Contabilidad I", "Matemática Financiera", "Pedagogía"],
    "2° Año": ["Microeconomía", "Contabilidad II", "Derecho Comercial", "Didáctica de la Economía"],
    "3° Año": ["Macroeconomía", "Administración de Empresas", "Finanzas Públicas", "Residencia I"],
    "4° Año": ["Economía Argentina", "Sistemas de Información Contable", "Residencia II"]
  },
  "Profesorado de Informática": {
    "1° Año": ["Algoritmos y Programación I", "Arquitectura de Computadoras", "Matemática Discreta", "Pedagogía"],
    "2° Año": ["Programación II (POO)", "Sistemas Operativos", "Bases de Datos", "Didáctica de la Informática"],
    "3° Año": ["Redes de Computadoras", "Ingeniería de Software", "Tecnología Educativa", "Residencia I"],
    "4° Año": ["Seguridad Informática", "Robótica Educativa", "Residencia II"]
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
          alert('¡Gracias! Tu material fue recibido con éxito y pasará a revisión antes de ser publicado en el repositorio.');
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
