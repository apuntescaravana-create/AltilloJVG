/**
 * AltilloJVG - Buscador Inteligente de Aulas y Cursadas (Beta)
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

document.addEventListener('DOMContentLoaded', () => {
  const aulasModal = document.getElementById('aulasModal');
  const closeAulasModalBtn = document.getElementById('closeAulasModalBtn');

  // Selectors for Mode 1: Por Carrera y Día
  const filterCarrera = document.getElementById('filterCarrera');
  const filterDia = document.getElementById('filterDia');

  // Selectors for Mode 2: Por Materia Específica
  const searchMateriaInput = document.getElementById('searchMateriaInput');
  const selectMateriaQuick = document.getElementById('selectMateriaQuick');

  // Tab Triggers
  const tabCarreraBtn = document.getElementById('tabCarreraBtn');
  const tabMateriaBtn = document.getElementById('tabMateriaBtn');
  const tabDiaBtn = document.getElementById('tabDiaBtn');

  const viewModeCarrera = document.getElementById('viewModeCarrera');
  const viewModeMateria = document.getElementById('viewModeMateria');
  const viewModeDia = document.getElementById('viewModeDia');

  const aulasResults = document.getElementById('aulasResults');
  const resultsCounter = document.getElementById('resultsCounter');

  let activeMode = 'carrera'; // 'carrera', 'materia', 'dia'

  // Open Aulas Modal trigger (will be called from main.js)
  window.openAulasModal = function() {
    if (!aulasModal) return;
    populateDropdowns();
    renderAulasResults();
    aulasModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  if (closeAulasModalBtn && aulasModal) {
    closeAulasModalBtn.addEventListener('click', closeAulasModal);
  }

  if (aulasModal) {
    aulasModal.addEventListener('click', (e) => {
      if (e.target === aulasModal) closeAulasModal();
    });
  }

  function closeAulasModal() {
    if (aulasModal) {
      aulasModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Populate Carrera and Materia dropdowns dynamically from AULAS_DATABASE
  function populateDropdowns() {
    if (typeof AULAS_DATABASE === 'undefined') return;

    // Get unique Carreras
    const carreras = [...new Set(AULAS_DATABASE.map(item => item.carrera))].sort();
    
    if (filterCarrera && filterCarrera.options.length <= 1) {
      filterCarrera.innerHTML = '<option value="">-- Seleccioná una Carrera --</option>';
      carreras.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        filterCarrera.appendChild(opt);
      });
    }

    // Populate Materias for Quick Select
    if (selectMateriaQuick && selectMateriaQuick.options.length <= 1) {
      const materias = [...new Set(AULAS_DATABASE.map(item => item.materia))].sort();
      selectMateriaQuick.innerHTML = '<option value="">-- Seleccioná una Materia --</option>';
      materias.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        selectMateriaQuick.appendChild(opt);
      });
    }
  }

  // Tab switching logic
  if (tabCarreraBtn && tabMateriaBtn && tabDiaBtn) {
    tabCarreraBtn.addEventListener('click', () => setMode('carrera'));
    tabMateriaBtn.addEventListener('click', () => setMode('materia'));
    tabDiaBtn.addEventListener('click', () => setMode('dia'));
  }

  function setMode(mode) {
    activeMode = mode;

    [tabCarreraBtn, tabMateriaBtn, tabDiaBtn].forEach(b => b.classList.remove('active'));
    [viewModeCarrera, viewModeMateria, viewModeDia].forEach(v => v.style.display = 'none');

    if (mode === 'carrera') {
      tabCarreraBtn.classList.add('active');
      viewModeCarrera.style.display = 'flex';
    } else if (mode === 'materia') {
      tabMateriaBtn.classList.add('active');
      viewModeMateria.style.display = 'flex';
    } else if (mode === 'dia') {
      tabDiaBtn.classList.add('active');
      viewModeDia.style.display = 'flex';
    }

    renderAulasResults();
  }

  // Filter Listeners
  if (filterCarrera) filterCarrera.addEventListener('change', renderAulasResults);
  if (filterDia) filterDia.addEventListener('change', renderAulasResults);
  if (searchMateriaInput) searchMateriaInput.addEventListener('input', renderAulasResults);
  if (selectMateriaQuick) {
    selectMateriaQuick.addEventListener('change', () => {
      if (selectMateriaQuick.value && searchMateriaInput) {
        searchMateriaInput.value = selectMateriaQuick.value;
      }
      renderAulasResults();
    });
  }

  const filterDiaOnly = document.getElementById('filterDiaOnly');
  if (filterDiaOnly) filterDiaOnly.addEventListener('change', renderAulasResults);

  // Main Render Results Engine
  function renderAulasResults() {
    if (!aulasResults || typeof AULAS_DATABASE === 'undefined') return;

    let filtered = [];

    if (activeMode === 'carrera') {
      const selCarrera = filterCarrera ? filterCarrera.value : '';
      const selDia = filterDia ? filterDia.value : '';

      filtered = AULAS_DATABASE.filter(item => {
        const matchCarrera = !selCarrera || item.carrera === selCarrera;
        const matchDia = !selDia || item.dia === selDia;
        return matchCarrera && matchDia;
      });
    } else if (activeMode === 'materia') {
      const query = searchMateriaInput ? searchMateriaInput.value.toLowerCase().trim() : '';

      if (query.length < 2) {
        aulasResults.innerHTML = `
          <div style="text-align:center; padding:30px; color:#64748B;">
            🔍 Escribí o seleccioná el nombre de la materia para ver dónde y cuándo se cursa.
          </div>`;
        resultsCounter.textContent = '0 resultados';
        return;
      }

      filtered = AULAS_DATABASE.filter(item => item.materia.toLowerCase().includes(query));
    } else if (activeMode === 'dia') {
      const selDiaOnly = filterDiaOnly ? filterDiaOnly.value : '';
      filtered = AULAS_DATABASE.filter(item => !selDiaOnly || item.dia === selDiaOnly);
    }

    resultsCounter.textContent = `${filtered.length} clases encontradas`;

    if (filtered.length === 0) {
      aulasResults.innerHTML = `
        <div style="background:#FFF8E1; border:1px solid #FFE082; padding:20px; border-radius:12px; text-align:center; color:#8C6D1F;">
          <h4 style="margin-bottom:6px; font-size:1rem;">⚠️ No se encontró información registrada para este filtro</h4>
          <p style="font-size:0.85rem; line-height:1.4;">
            Es posible que el Turno Tarde o la materia seleccionada no figuren en la grilla oficial publicada. 
            Podés consultar los PDFs completos o acercarte a Bedelía del Joaquín V. González.
          </p>
        </div>`;
      return;
    }

    // Render Cards Grid
    let html = '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:14px;">';

    filtered.slice(0, 150).forEach(item => {
      html += `
        <div style="background:#FFFFFF; border:1px solid #BEE3F8; border-radius:12px; padding:14px; box-shadow:0 2px 8px rgba(0,155,227,0.06); display:flex; flex-direction:column; justify-space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="background:#E6F5FC; color:#005F8C; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:10px;">${item.carrera}</span>
              <span style="background:#FFF3E0; color:#C65100; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:10px;">${item.dia} (${item.turno})</span>
            </div>
            <h4 style="color:#0B2545; font-size:0.92rem; font-weight:700; margin-bottom:4px; line-height:1.3;">${item.materia}</h4>
            <p style="font-size:0.78rem; color:#64748B; margin-bottom:8px;">${item.anio} ${item.docente ? '• Docente: ' + item.docente : ''}</p>
          </div>

          <div style="background:#FAFDFF; border-top:1px solid #E2E8F0; padding-top:8px; margin-top:6px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.8rem; color:#0F172A; font-weight:600;">⏰ ${item.horario} hs</span>
            <span style="background:#009BE3; color:#FFFFFF; font-size:0.85rem; font-weight:800; padding:4px 10px; border-radius:6px;">📍 Aula ${item.aula}</span>
          </div>
        </div>`;
    });

    html += '</div>';

    if (filtered.length > 150) {
      html += `<p style="text-align:center; margin-top:14px; font-size:0.8rem; color:#64748B;">Mostrando los primeros 150 resultados. Afiná la búsqueda para ver más.</p>`;
    }

    aulasResults.innerHTML = html;
  }
});
