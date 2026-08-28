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

  // Mapeo de carreras a plantillas específicas o universales
  const MAPAS_ARCHIVOS = {
    "Profesorado de Filosofía": {
      archivo: "data/mapas/Mapa_de_Carrera_Filosofia.xlsx",
      nombre: "Mapa_de_Carrera_Filosofia.xlsx",
      materiasCount: 45
    }
  };

  // Abrir Modal
  window.openMapaCarreraModal = function() {
    if (!mapaModal) return;
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

  // Poblar carreras en el desplegable
  function populateCarreras() {
    if (!selectMapaCarrera) return;
    if (selectMapaCarrera.options.length > 1) return; // ya poblado

    if (typeof AULAS_DATABASE !== 'undefined') {
      const careers = [...new Set(AULAS_DATABASE.map(item => item.carrera))].sort();
      careers.forEach(career => {
        const opt = document.createElement('option');
        opt.value = career;
        opt.textContent = career;
        selectMapaCarrera.appendChild(opt);
      });
    }
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
    btnDescargarExcel.addEventListener('click', () => {
      const selected = selectMapaCarrera ? selectMapaCarrera.value : '';
      let fileUrl = "data/mapas/Mapa_de_Carrera_Filosofia.xlsx"; // plantilla oficial
      let fileName = "Mapa_de_Carrera_Personal_LaCaravana.xlsx";

      if (selected && MAPAS_ARCHIVOS[selected]) {
        fileUrl = MAPAS_ARCHIVOS[selected].archivo;
        fileName = MAPAS_ARCHIVOS[selected].nombre;
      }

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
