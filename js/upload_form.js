/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (1° a 6° Año)
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

// Obtener el currículo dinámico limpio y deduplicado
function getActiveCurriculumData() {
  try {
    const cached = localStorage.getItem('altillojvg_site_config');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && parsed.curriculum && Object.keys(parsed.curriculum).length > 0) {
        return buildFlatCurriculum(parsed.curriculum);
      }
    }
  } catch (e) {}

  if (typeof window.CURRICULUM_DATA !== 'undefined') {
    return buildFlatCurriculum(window.CURRICULUM_DATA);
  }

  return {};
}

function buildFlatCurriculum(curConfig) {
  const res = {};
  for (const carrera in curConfig) {
    const cData = curConfig[carrera];
    if (cData && cData.planes) {
      const planName = cData.active_plan || Object.keys(cData.planes)[0] || 'Plan Vigente';
      res[carrera] = cData.planes[planName] || {};
    } else {
      res[carrera] = cData || {};
    }
  }
  return res;
}

window.ACTIVE_CURRICULUM = getActiveCurriculumData();
const ACTIVE_CURRICULUM = window.ACTIVE_CURRICULUM;

document.addEventListener('DOMContentLoaded', () => {
  const selectCarrera = document.getElementById('selectCarrera');
  const selectAnio = document.getElementById('selectAnio');
  const selectMateria = document.getElementById('selectMateria');
  const uploadForm = document.getElementById('uploadForm');

  const fileDropzone = document.getElementById('fileDropzone');
  const fileInput = document.getElementById('fileInput');
  const fileSelectText = document.getElementById('fileSelectText');

populateCarreras();

  function populateCarreras() {
    if (!selectCarrera) return;
    selectCarrera.innerHTML = '<option value="">-- Seleccioná una Carrera --</option>';

    Object.keys(ACTIVE_CURRICULUM).sort().forEach(carrera => {
      const option = document.createElement('option');
      option.value = carrera;
      option.textContent = carrera;
      selectCarrera.appendChild(option);
    });
  }

  // 1. On Carrera Select -> Enable & Populate Años (1° a 6° Año)
  selectCarrera.addEventListener('change', (e) => {
    const selectedCarrera = e.target.value;
    
    selectAnio.innerHTML = '<option value="">-- Seleccioná el Año (1° a 6° Año) --</option>';
    selectMateria.innerHTML = '<option value="">-- Primero seleccioná Año --</option>';
    selectMateria.disabled = true;

    if (!selectedCarrera || !ACTIVE_CURRICULUM[selectedCarrera]) {
      selectAnio.disabled = true;
      return;
    }

    const anios = Object.keys(ACTIVE_CURRICULUM[selectedCarrera]);
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

    if (!selectedAnio || !ACTIVE_CURRICULUM[selectedCarrera] || !ACTIVE_CURRICULUM[selectedCarrera][selectedAnio]) {
      selectMateria.disabled = true;
      return;
    }

    const materias = ACTIVE_CURRICULUM[selectedCarrera][selectedAnio];
    materias.forEach(materia => {
      const option = document.createElement('option');
      option.value = materia;
      option.textContent = materia;
      selectMateria.appendChild(option);
    });

    selectMateria.disabled = false;
  });

  // Mostrar u ocultar el desplegable de examen condicionalmente
  const selectTipo = document.getElementById('selectTipo');
  const groupDetalleExamen = document.getElementById('groupDetalleExamen');
  const selectDetalleExamen = document.getElementById('selectDetalleExamen');

  if (selectTipo && groupDetalleExamen && selectDetalleExamen) {
    selectTipo.addEventListener('change', () => {
      if (selectTipo.value === 'Examen') {
        groupDetalleExamen.style.display = 'block';
        selectDetalleExamen.required = true;
      } else {
        groupDetalleExamen.style.display = 'none';
        selectDetalleExamen.required = false;
        selectDetalleExamen.value = '';
      }
    });
  }

  // File Dropzone Interaction
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', () => fileInput.click());

    fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropzone.style.backgroundColor = '#E6F5FC';
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
      fileSelectText.innerHTML += `<br><span style="color:#C65100;">📌 Archivo de ${fileSizeMB} MB listo para procesar.</span>`;
    }
  }

  // URL de tu Google Apps Script Web App (dejar vacío si se desea subir directamente a Telegram < 4MB)
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwN_rJDF4CTIwg2ut-WhurViMlLSXkJ2TcRTgem4WTQgjYRvbbIIP5UB2AZG-1LaRKj/exec";

  // Helper para convertir archivo a Base64
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // Handle Form Submit
  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const file = fileInput.files[0];

      // Validación: el archivo es obligatorio
      if (!file) {
        alert('⚠️ Por favor, seleccioná un archivo para continuar.');
        return;
      }

      // Si hay un archivo grande (> 4MB) y no hay Google Apps Script configurado, mostrar error
      if (file.size > 4 * 1024 * 1024 && !GOOGLE_APPS_SCRIPT_URL) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        alert(`⚠️ El archivo pesa ${fileSizeMB} MB y supera el límite de subida directa sin configurar Drive (4 MB).\n\nPor favor, pedile a los administradores que configuren la URL de Google Apps Script.`);
        return;
      }

      // Si el archivo supera el límite de Google Apps Script (50MB)
      if (file.size > 50 * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        alert(`⚠️ El archivo pesa ${fileSizeMB} MB y supera el límite máximo permitido (50 MB).\n\nPor favor, intentá comprimir el PDF o subir un archivo más liviano.`);
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Subiendo documento...';

      let driveLink = "";

      try {
        // Si hay un archivo y está configurado Google Apps Script, subir a Google Drive primero
        if (GOOGLE_APPS_SCRIPT_URL) {
          submitBtn.textContent = 'Subiendo a Google Drive de La Caravana...';
          const base64Data = await getBase64(file);
          const rawBase64 = base64Data.split(',')[1];

          const gasResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'text/plain' // Para evitar CORS preflight OPTIONS en Google Apps Script
            },
            body: JSON.stringify({
              fileBase64: rawBase64,
              fileName: file.name,
              mimeType: file.type
            })
          });

          const gasResult = await gasResponse.json();
          if (gasResult.success && gasResult.link) {
            driveLink = gasResult.link;
          } else {
            throw new Error(gasResult.error || 'No se pudo obtener el enlace de Google Drive.');
          }
        }

        submitBtn.textContent = 'Enviando notificación al bot...';

        const formData = new FormData();
        formData.append('carrera', selectCarrera.value);
        formData.append('anio', selectAnio.value);
        formData.append('materia', selectMateria.value);
        
        // Obtener el tipo de material final (si es Examen, usar la especificación)
        let tipoFinal = selectTipo.value;
        if (tipoFinal === 'Examen' && selectDetalleExamen) {
          tipoFinal = selectDetalleExamen.value;
        }
        formData.append('tipo', tipoFinal);

        // Enviar título/tema personalizado si el usuario lo ingresó
        const inputNombre = document.getElementById('inputNombre');
        if (inputNombre && inputNombre.value.trim()) {
          formData.append('nombre', inputNombre.value.trim());
        }

        // Si subimos a Drive, enviamos el link de Drive generado al backend.
        // Si no subimos a Drive (porque no hay GAS config), enviamos el archivo directamente si pesa < 4MB.
        if (driveLink) {
          formData.append('link', driveLink);
        } else {
          formData.append('file', file);
        }

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert(result.message || '🎉 ¡Gracias! Tu material fue recibido y enviado al grupo de aprobación de La Caravana.');
          uploadForm.reset();
          if (groupDetalleExamen) {
            groupDetalleExamen.style.display = 'none';
            selectDetalleExamen.required = false;
          }
          fileSelectText.textContent = "Arrastrá tu archivo o hacé clic aquí";
          document.getElementById('uploadModal').classList.remove('active');
          document.body.style.overflow = '';
        } else {
          alert('❌ Error al subir: ' + (result.message || 'Ocurrió un problema en el servidor. Intenta de nuevo.'));
        }
      } catch (err) {
        console.error(err);
        alert('❌ Error en el proceso de subida: ' + (err.message || 'No se pudo conectar con el servidor. Por favor, intentá de nuevo.'));
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subir Material al Repositorio';
      }
    });
  }
});
