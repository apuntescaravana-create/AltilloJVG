/**
 * AltilloJVG - Módulo Mapa de Carrera Personal
 * Permite a las y los estudiantes seleccionar su carrera, consultar correlatividades,
 * descargar la plantilla oficial en Excel (.xlsx) y acceder a la guía de Google Drive.
 * Proyecto: La Caravana + Estudiantes Independientes (Lista 90)
 */

document.addEventListener('DOMContentLoaded', () => {
  const mapaModal = document.getElementById('mapaCarreraModal');
  const closeMapaModalBtn = document.getElementById('closeMapaModalBtn');
  const btnToggleInstrucciones = document.getElementById('btnToggleInstrucciones');
  const instruccionesContent = document.getElementById('instruccionesContent');
  const selectMapaCarrera = document.getElementById('selectMapaCarrera');
  const btnDescargarExcel = document.getElementById('btnDescargarExcel');
  const btnAbrirSheets = document.getElementById('btnAbrirSheets');

  // Mapeo completo de las 18 carreras a sus plantillas oficiales
  const MAPAS_ARCHIVOS = {
    "Profesorado de Filosofía": { archivo: "data/mapas/Mapa_de_Carrera_Filosofia.xlsx", nombre: "Mapa_de_Carrera_Filosofia_JVG.xlsx" },
    "Profesorado de Historia": { archivo: "data/mapas/Mapa_de_Carrera_Historia.xlsx", nombre: "Mapa_de_Carrera_Historia_JVG.xlsx" },
    "Profesorado de Lengua y Literatura": { archivo: "data/mapas/Mapa_de_Carrera_Lengua_y_Literatura.xlsx", nombre: "Mapa_de_Carrera_Lengua_y_Literatura_JVG.xlsx" },
    "Profesorado de Inglés": { archivo: "data/mapas/Mapa_de_Carrera_Ingles.xlsx", nombre: "Mapa_de_Carrera_Ingles_JVG.xlsx" },
    "Profesorado de Matemática": { archivo: "data/mapas/Mapa_de_Carrera_Matematica.xlsx", nombre: "Mapa_de_Carrera_Matematica_JVG.xlsx" },
    "Profesorado de Biología": { archivo: "data/mapas/Mapa_de_Carrera_Biologia.xlsx", nombre: "Mapa_de_Carrera_Biologia_JVG.xlsx" },
    "Profesorado de Física": { archivo: "data/mapas/Mapa_de_Carrera_Fisica.xlsx", nombre: "Mapa_de_Carrera_Fisica_JVG.xlsx" },
    "Profesorado de Química": { archivo: "data/mapas/Mapa_de_Carrera_Quimica.xlsx", nombre: "Mapa_de_Carrera_Quimica_JVG.xlsx" },
    "Profesorado de Geografía": { archivo: "data/mapas/Mapa_de_Carrera_Geografia.xlsx", nombre: "Mapa_de_Carrera_Geografia_JVG.xlsx" },
    "Profesorado de Informática": { archivo: "data/mapas/Mapa_de_Carrera_Informatica.xlsx", nombre: "Mapa_de_Carrera_Informatica_JVG.xlsx" },
    "Profesorado de Psicología": { archivo: "data/mapas/Mapa_de_Carrera_Psicologia.xlsx", nombre: "Mapa_de_Carrera_Psicologia_JVG.xlsx" },
    "Profesorado de Ciencias de la Educación": { archivo: "data/mapas/Mapa_de_Carrera_Ciencias_de_la_Educacion.xlsx", nombre: "Mapa_de_Carrera_Ciencias_de_la_Educacion_JVG.xlsx" },
    "Profesorado de Cs. de la Educación": { archivo: "data/mapas/Mapa_de_Carrera_Ciencias_de_la_Educacion.xlsx", nombre: "Mapa_de_Carrera_Ciencias_de_la_Educacion_JVG.xlsx" },
    "Profesorado de Ciencias Jurídicas": { archivo: "data/mapas/Mapa_de_Carrera_Ciencias_Juridicas.xlsx", nombre: "Mapa_de_Carrera_Ciencias_Juridicas_JVG.xlsx" },
    "Profesorado de Cs. Jurídicas": { archivo: "data/mapas/Mapa_de_Carrera_Ciencias_Juridicas.xlsx", nombre: "Mapa_de_Carrera_Ciencias_Juridicas_JVG.xlsx" },
    "Profesorado de Ciencia Política": { archivo: "data/mapas/Mapa_de_Carrera_Ciencia_Politica.xlsx", nombre: "Mapa_de_Carrera_Ciencia_Politica_JVG.xlsx" },
    "Profesorado de Economía": { archivo: "data/mapas/Mapa_de_Carrera_Economia.xlsx", nombre: "Mapa_de_Carrera_Economia_JVG.xlsx" },
    "Profesorado de Ciencias de la Administración": { archivo: "data/mapas/Mapa_de_Carrera_Ciencias_de_la_Administracion.xlsx", nombre: "Mapa_de_Carrera_Ciencias_de_la_Administracion_JVG.xlsx" },
    "Profesorado de Francés": { archivo: "data/mapas/Mapa_de_Carrera_Frances.xlsx", nombre: "Mapa_de_Carrera_Frances_JVG.xlsx" },
    "Profesorado de Italiano": { archivo: "data/mapas/Mapa_de_Carrera_Italiano.xlsx", nombre: "Mapa_de_Carrera_Italiano_JVG.xlsx" }
  };

  // Abrir Modal
  window.openMapaCarreraModal = function() {
    if (!mapaModal) return;
    if (typeof window.trackToolUsage === 'function') window.trackToolUsage('mapas');
    mapaModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    populateCarreras();
  };

  // Cerrar Modal
  function closeMapaModal() {
    if (!mapaModal) return;
    mapaModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeMapaModalBtn) {
    closeMapaModalBtn.addEventListener('click', closeMapaModal);
  }

  if (mapaModal) {
    mapaModal.addEventListener('click', (e) => {
      if (e.target === mapaModal) closeMapaModal();
    });
  }

  function updateDownloadButtonState() {
    if (!btnDescargarExcel) return;
    const selected = selectMapaCarrera ? selectMapaCarrera.value : '';
    if (!selected) {
      btnDescargarExcel.style.opacity = '0.55';
      btnDescargarExcel.style.cursor = 'not-allowed';
      btnDescargarExcel.innerHTML = '⚠️ Seleccioná tu carrera para descargar';
    } else {
      btnDescargarExcel.style.opacity = '1';
      btnDescargarExcel.style.cursor = 'pointer';
      const nombreCorto = selected.replace(/^Profesorado de\s+/i, '');
      btnDescargarExcel.innerHTML = `📥 Descargar Mapa de ${nombreCorto} (.xlsx)`;
    }
  }

  // Poblar carreras en el desplegable
  function populateCarreras() {
    if (!selectMapaCarrera) return;
    if (selectMapaCarrera.options.length <= 1) {
      // Poblar carreras desde la lista oficial
      const careers = Object.keys(MAPAS_ARCHIVOS).sort();
      careers.forEach(career => {
        const opt = document.createElement('option');
        opt.value = career;
        opt.textContent = career;
        selectMapaCarrera.appendChild(opt);
      });
    }
    updateDownloadButtonState();
  }

  if (selectMapaCarrera) {
    selectMapaCarrera.addEventListener('change', updateDownloadButtonState);
  }

  // Desplegable de Instrucciones "¿Cómo usarlo?"
  if (btnToggleInstrucciones && instruccionesContent) {
    btnToggleInstrucciones.addEventListener('click', () => {
      instruccionesContent.classList.toggle('hidden');
      const isHidden = instruccionesContent.classList.contains('hidden');
      btnToggleInstrucciones.querySelector('.toggle-arrow').textContent = isHidden ? '▼' : '▲';
    });
  }

  // Manejo de Descarga
  if (btnDescargarExcel) {
    btnDescargarExcel.addEventListener('click', (e) => {
      const selected = selectMapaCarrera ? selectMapaCarrera.value : '';
      if (!selected || !MAPAS_ARCHIVOS[selected]) {
        e.preventDefault();
        alert('Por favor, seleccioná tu carrera o profesorado en el menú desplegable para descargar tu mapa oficial correspondiente.');
        if (selectMapaCarrera) selectMapaCarrera.focus();
        return;
      }

      const fileUrl = MAPAS_ARCHIVOS[selected].archivo;
      const fileName = MAPAS_ARCHIVOS[selected].nombre;

      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  // Abrir en Google Drive / Google Sheets
  if (btnAbrirSheets) {
    btnAbrirSheets.addEventListener('click', () => {
      // Abre la carpeta oficial de plantillas o instrucciones de Drive
      window.open('https://drive.google.com/', '_blank');
      alert('📌 Pasos para usar en Google Sheets:\n\n1. En tu Google Drive, hacé clic en "+ Nuevo" ➔ "Subir archivo".\n2. Subí la plantilla Excel que acabás de descargar.\n3. Hacé doble clic sobre el archivo y elegí "Abrir con Hojas de cálculo de Google".\n4. ¡Listo! Ya tenés tu mapa interactivo en la nube.');
    });
  }
});
