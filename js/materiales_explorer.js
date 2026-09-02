/**
 * AltilloJVG - Explorador de Materiales de Estudio (Bibliotecas y Apuntes Colaborativos)
 */

document.addEventListener('DOMContentLoaded', () => {
  const materialesModal = document.getElementById('materialesModal');
  const closeMaterialesModalBtn = document.getElementById('closeMaterialesModalBtn');
  const explorerCarrera = document.getElementById('explorerCarrera');
  const explorerAnio = document.getElementById('explorerAnio');
  const explorerMateria = document.getElementById('explorerMateria');
  const explorerTipo = document.getElementById('explorerTipo');
  const materialsResultsList = document.getElementById('materialsResultsList');
  const materialsCounter = document.getElementById('materialsCounter');

  // Guardar carrera seleccionada activa
  let activeCarrera = "";

  // 1. Escuchar clics en las tarjetas de carreras del panel principal
  document.querySelectorAll('.carrera-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      
      const cardTitleText = card.querySelector('.card-title').textContent.trim();
      
      // Buscar coincidencia en el currículo activo
      if (typeof window.ACTIVE_CURRICULUM !== 'undefined') {
        activeCarrera = getOfficialCareerKey(cardTitleText);
        openExplorerForCareer(activeCarrera);
      } else {
        // Fallback en caso de que ACTIVE_CURRICULUM no se haya inicializado
        setTimeout(() => {
          if (typeof window.ACTIVE_CURRICULUM !== 'undefined') {
            activeCarrera = getOfficialCareerKey(cardTitleText);
            openExplorerForCareer(activeCarrera);
          } else {
            alert("⚠️ Cargando datos de las carreras, por favor intentá de nuevo en un segundo.");
          }
        }, 100);
      }
    });
  });

  // 2. Normalizador de coincidencia de nombres para asociar el título de la tarjeta con la base de datos
  function getOfficialCareerKey(cardTitle) {
    const titleUpper = cardTitle.toUpperCase().trim();
    if (typeof window.ACTIVE_CURRICULUM !== 'undefined') {
      for (const officialName of Object.keys(window.ACTIVE_CURRICULUM)) {
        const officialUpper = officialName.toUpperCase();
        if (officialUpper.includes(titleUpper) || titleUpper.includes(officialUpper) ||
            (titleUpper.includes("ADMINISTRACION") && officialUpper.includes("ADMINISTRACIÓN")) ||
            (titleUpper.includes("CS.") && officialUpper.includes("CIENCIAS"))) {
          return officialName;
        }
      }
    }
    return cardTitle;
  }

  const explorerPlanWrapper = document.getElementById('explorerPlanWrapper');
  const explorerPlan = document.getElementById('explorerPlan');

  // Obtener currículo activo (prioriza site_config de admin/API/localStorage)
  function getCurriculumConfig() {
    try {
      const cached = localStorage.getItem('altillojvg_site_config');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.curriculum && Object.keys(parsed.curriculum).length > 0) {
          return parsed.curriculum;
        }
      }
    } catch (e) {}
    if (typeof window.CURRICULUM_DATA !== 'undefined') {
      return window.CURRICULUM_DATA;
    }
    return window.ACTIVE_CURRICULUM || {};
  }

  function getCareerPlans(carreraName) {
    const config = getCurriculumConfig();
    const carreraData = config[carreraName];
    if (!carreraData) return { "Plan Vigente": {} };
    if (carreraData.planes) return carreraData.planes;
    return { "Plan Vigente": carreraData };
  }

  // 3. Abrir e inicializar el explorador para una carrera específica
  function openExplorerForCareer(carreraName) {
    if (!materialesModal) return;
    if (typeof window.trackToolUsage === 'function') window.trackToolUsage('apuntes');

    activeCarrera = carreraName;

    // Poblar selector carrera (bloqueado para edición directa por el alumno)
    explorerCarrera.innerHTML = `<option value="${carreraName}">${carreraName}</option>`;
    explorerCarrera.value = carreraName;

    const plans = getCareerPlans(carreraName);
    const planNames = Object.keys(plans);

    if (explorerPlanWrapper && explorerPlan) {
      if (planNames.length > 1) {
        explorerPlanWrapper.style.display = 'block';
        explorerPlan.innerHTML = planNames.map(p => `<option value="${p}">${p}</option>`).join('');
      } else {
        explorerPlanWrapper.style.display = 'none';
        explorerPlan.innerHTML = `<option value="${planNames[0] || 'Plan Vigente'}">${planNames[0] || 'Plan Vigente'}</option>`;
      }

      explorerPlan.onchange = () => {
        populateAniosForSelectedPlan(carreraName, explorerPlan.value);
      };
    }

    const initialPlan = (explorerPlan && explorerPlan.value) ? explorerPlan.value : planNames[0];
    populateAniosForSelectedPlan(carreraName, initialPlan);

    // Abrir modal
    materialesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function populateAniosForSelectedPlan(carreraName, selectedPlan) {
    const plans = getCareerPlans(carreraName);
    const yearsData = plans[selectedPlan] || {};

    explorerAnio.innerHTML = '<option value="">-- Seleccioná el Año --</option>';
    explorerMateria.innerHTML = '<option value="">-- Primero elegí Año --</option>';
    explorerMateria.disabled = true;
    materialsResultsList.innerHTML = `
      <div style="text-align: center; padding: 30px; color: #64748B;">
        <p style="font-size:0.95rem;">Seleccioná el <strong>Año de Cursada</strong> para filtrar las materias disponibles.</p>
      </div>
    `;
    materialsCounter.textContent = "Seleccioná carrera, año y materia para ver materiales";

    const anios = Object.keys(yearsData);
    anios.forEach(anio => {
      const option = document.createElement('option');
      option.value = anio;
      option.textContent = anio;
      explorerAnio.appendChild(option);
    });
  }

  // 4. On Año Select -> Habilitar y Poblar Materias
  if (explorerAnio) {
    explorerAnio.addEventListener('change', (e) => {
      const selectedAnio = e.target.value;
      explorerMateria.innerHTML = '<option value="">-- Seleccioná la Materia --</option>';
      materialsResultsList.innerHTML = `
        <div style="text-align: center; padding: 30px; color: #64748B;">
          <p style="font-size:0.95rem;">Ahora seleccioná la <strong>Materia específica</strong> para ver sus apuntes.</p>
        </div>
      `;
      materialsCounter.textContent = "Filtrando por materias...";

      const currentPlan = (explorerPlan && explorerPlan.value) ? explorerPlan.value : "Plan Vigente";
      const plans = getCareerPlans(activeCarrera);
      const materias = (plans[currentPlan] && plans[currentPlan][selectedAnio]) ? plans[currentPlan][selectedAnio] : [];

      if (!selectedAnio || materias.length === 0) {
        explorerMateria.disabled = true;
        return;
      }

      materias.forEach(materia => {
        const option = document.createElement('option');
        option.value = materia;
        option.textContent = materia;
        explorerMateria.appendChild(option);
      });

      explorerMateria.disabled = false;
    });
  }

  // 5. On Materia Select o Cambio de Tipo -> Buscar y Listar Materiales
  if (explorerMateria) {
    explorerMateria.addEventListener('change', renderMaterialsList);
  }
  if (explorerTipo) {
    explorerTipo.addEventListener('change', renderMaterialsList);
  }

  async function renderMaterialsList() {
    const selectedAnio = explorerAnio.value;
    const selectedMateria = explorerMateria.value;
    const selectedTipo = explorerTipo.value;

    if (!selectedMateria) {
      materialsResultsList.innerHTML = `
        <div style="text-align: center; padding: 30px; color: #64748B;">
          <p style="font-size:0.95rem;">Seleccioná una materia de la lista.</p>
        </div>
      `;
      return;
    }

    materialsResultsList.innerHTML = `
      <div style="text-align: center; padding: 30px; color: #64748B;">
        <p style="font-size:0.95rem;">Buscando apuntes en la base de datos de AltilloJVG...</p>
      </div>
    `;

    try {
      const url = `/api/materials?carrera=${encodeURIComponent(activeCarrera)}&anio=${encodeURIComponent(selectedAnio)}&materia=${encodeURIComponent(selectedMateria)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al obtener materiales.');

      let results = await response.json();

      // Filtrar por tipo localmente si se seleccionó uno específico
      if (selectedTipo !== "") {
        results = results.filter(m => m.tipo === selectedTipo);
      }

      materialsCounter.textContent = `${results.length} materiales encontrados para esta materia`;

      if (results.length > 0) {
        let html = '<div style="display:flex; flex-direction:column; gap:12px;">';
        results.forEach(item => {
          const dateFormatted = item.created_at ? new Date(item.created_at).toLocaleDateString('es-AR') : 'Reciente';
          html += `
            <div style="border: 1px solid #E2E8F0; padding: 16px; border-radius: 10px; background: #fff; display: flex; justify-content: space-between; align-items: center; gap: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.01);">
              <div>
                <span style="display: inline-block; padding: 4px 8px; border-radius: 12px; font-size: 0.72rem; font-weight: 700; background: #EBF3FC; color: #1E3A5F; margin-bottom: 6px;">
                  ${item.tipo}
                </span>
                <h4 style="color:#0B2545; font-size:0.95rem; font-weight:700; margin:0 0 4px 0;">${item.nombre}</h4>
                <p style="font-size:0.8rem; color:#64748B; margin:0;">Fecha: ${dateFormatted}</p>
              </div>
              <a href="${item.link}" target="_blank" rel="noopener" style="padding: 8px 16px; background: #D99B26; color: #fff; border-radius: 6px; font-weight: 700; font-size: 0.85rem; text-decoration: none; text-align: center; display: inline-flex; align-items: center; gap: 6px; transition: background 0.2s;">
                📥 Descargar
              </a>
            </div>
          `;
        });
        html += '</div>';
        materialsResultsList.innerHTML = html;
      } else {
        renderEmptyState(selectedAnio, selectedMateria);
      }
    } catch (err) {
      console.error(err);
      materialsResultsList.innerHTML = `
        <div style="text-align: center; padding: 30px; color: #E53E3E;">
          <p style="font-size:0.95rem; font-weight:700;">⚠️ Error al conectar con la base de datos.</p>
          <p style="font-size:0.85rem; margin-top:4px;">Por favor, intentá de nuevo más tarde o verificá tu conexión.</p>
        </div>
      `;
    }
  }

  function renderEmptyState(selectedAnio, selectedMateria) {
    materialsResultsList.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; border: 2px dashed #CBD5E1; border-radius: 12px; background: #F8FAFC;">
        <div style="color: #94A3B8; margin-bottom: 12px; display: flex; justify-content: center;">
          <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <h5 style="color: #334155; font-size: 1.05rem; font-weight: 700; margin-bottom: 6px;">No hay apuntes publicados todavía</h5>
        <p style="color: #64748B; font-size: 0.88rem; margin-bottom: 18px; max-width: 380px; margin-left: auto; margin-right: auto;">
          ¡Sé la primera persona en compartir un resumen, parcial o programa para esta materia!
        </p>
        <button id="explorerUploadBtn" style="padding: 10px 20px; background: #0B2545; color: #fff; border-radius: 6px; border: none; font-weight: 700; cursor: pointer; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s;">
          📤 Subir Apunte
        </button>
      </div>
    `;

    const explorerUploadBtn = document.getElementById('explorerUploadBtn');
    if (explorerUploadBtn) {
      explorerUploadBtn.addEventListener('click', () => {
        closeExplorerModal();
        const uploadModal = document.getElementById('uploadModal');
        if (uploadModal) {
          uploadModal.classList.add('active');
          document.body.style.overflow = 'hidden';

          const selectCarrera = document.getElementById('selectCarrera');
          const selectAnio = document.getElementById('selectAnio');
          const selectMateria = document.getElementById('selectMateria');

          if (selectCarrera) {
            selectCarrera.value = activeCarrera;
            selectCarrera.dispatchEvent(new Event('change'));

            if (selectAnio) {
              selectAnio.value = selectedAnio;
              selectAnio.dispatchEvent(new Event('change'));

              if (selectMateria) {
                selectMateria.value = selectedMateria;
              }
            }
          }
        }
      });
    }
  }

  // 6. Cerrar el explorador
  if (closeMaterialesModalBtn) {
    closeMaterialesModalBtn.addEventListener('click', closeExplorerModal);
  }

  if (materialesModal) {
    materialesModal.addEventListener('click', (e) => {
      if (e.target === materialesModal) closeExplorerModal();
    });
  }

  function closeExplorerModal() {
    if (materialesModal) {
      materialesModal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Resetear campos
      explorerAnio.value = "";
      explorerMateria.innerHTML = '<option value="">-- Primero elegí Año --</option>';
      explorerMateria.disabled = true;
      explorerTipo.value = "";
      materialsResultsList.innerHTML = "";
    }
  }
});
