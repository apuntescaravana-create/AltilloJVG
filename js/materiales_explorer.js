/**
 * AltilloJVG - Explorador de Materiales de Estudio (Bibliotecas y Apuntes Colaborativos)
 */

// Base de datos de prueba con apuntes reales de muestra
const MOCK_MATERIALS = [
  {
    id: "mat-1",
    carrera: "Profesorado de Filosofía",
    anio: "1° Año",
    materia: "PSICOLOGIA DEL DESARROLLO (2° CUAT.)",
    tipo: "Programa",
    nombre: "Programa Oficial de Cátedra - Psicología del Desarrollo",
    link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/cseduc/",
    autor: "Cátedra (Prof. Damiani)",
    fecha: "18/03/2026"
  },
  {
    id: "mat-2",
    carrera: "Profesorado de Filosofía",
    anio: "1° Año",
    materia: "PSICOLOGIA DEL DESARROLLO (2° CUAT.)",
    tipo: "Resumen",
    nombre: "Resumen Unidad 1: Teorías del Aprendizaje y el Sujeto",
    link: "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view",
    autor: "La Caravana Estudiantil",
    fecha: "12/07/2026"
  },
  {
    id: "mat-3",
    carrera: "Profesorado de Filosofía",
    anio: "1° Año",
    materia: "INTRODUCCION A LA FILOSOFIA",
    tipo: "Parcial",
    nombre: "Modelo de Primer Parcial Resuelto (2025)",
    link: "https://drive.google.com/file/d/2a3b4c5d6e7f8g9h0i1j/view",
    autor: "Facundo D.",
    fecha: "05/06/2026"
  },
  {
    id: "mat-4",
    carrera: "Profesorado de Historia",
    anio: "1° Año",
    materia: "HISTORIA DE AMERICA I",
    tipo: "Resumen",
    nombre: "Resumen Completo de Lecturas Obligatorias",
    link: "https://drive.google.com/file/d/3a4b5c6d7e8f9g0h1i2j/view",
    autor: "Estudiante Historia",
    fecha: "20/07/2026"
  }
];

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

  // 3. Abrir e inicializar el explorador para una carrera específica
  function openExplorerForCareer(carreraName) {
    if (!materialesModal) return;

    // Poblar selector carrera (bloqueado para edición directa por el alumno)
    explorerCarrera.innerHTML = `<option value="${carreraName}">${carreraName}</option>`;
    explorerCarrera.value = carreraName;

    // Poblar años correspondientes a esa carrera
    explorerAnio.innerHTML = '<option value="">-- Seleccioná el Año --</option>';
    explorerMateria.innerHTML = '<option value="">-- Primero elegí Año --</option>';
    explorerMateria.disabled = true;
    materialsResultsList.innerHTML = `
      <div style="text-align: center; padding: 30px; color: #64748B;">
        <p style="font-size:0.95rem;">Seleccioná el <strong>Año de Cursada</strong> para filtrar las materias disponibles.</p>
      </div>
    `;
    materialsCounter.textContent = "Seleccioná carrera, año y materia para ver materiales";

    if (window.ACTIVE_CURRICULUM && window.ACTIVE_CURRICULUM[carreraName]) {
      const anios = Object.keys(window.ACTIVE_CURRICULUM[carreraName]);
      anios.forEach(anio => {
        const option = document.createElement('option');
        option.value = anio;
        option.textContent = anio;
        explorerAnio.appendChild(option);
      });
    }

    // Abrir modal
    materialesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
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

      if (!selectedAnio || !window.ACTIVE_CURRICULUM[activeCarrera] || !window.ACTIVE_CURRICULUM[activeCarrera][selectedAnio]) {
        explorerMateria.disabled = true;
        return;
      }

      const materias = window.ACTIVE_CURRICULUM[activeCarrera][selectedAnio];
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

  function renderMaterialsList() {
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

    // Filtrar la base de datos de apuntes
    const results = MOCK_MATERIALS.filter(m => 
      m.carrera === activeCarrera &&
      m.anio === selectedAnio &&
      m.materia === selectedMateria.toUpperCase() &&
      (selectedTipo === "" || m.tipo === selectedTipo)
    );

    materialsCounter.textContent = `${results.length} materiales encontrados para esta materia`;

    if (results.length > 0) {
      let html = '<div style="display:flex; flex-direction:column; gap:12px;">';
      results.forEach(item => {
        html += `
          <div style="border: 1px solid #E2E8F0; padding: 16px; border-radius: 10px; background: #fff; display: flex; justify-content: space-between; align-items: center; gap: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.01);">
            <div>
              <span style="display: inline-block; padding: 4px 8px; border-radius: 12px; font-size: 0.72rem; font-weight: 700; background: #EBF3FC; color: #1E3A5F; margin-bottom: 6px;">
                ${item.tipo}
              </span>
              <h4 style="color:#0B2545; font-size:0.95rem; font-weight:700; margin:0 0 4px 0;">${item.nombre}</h4>
              <p style="font-size:0.8rem; color:#64748B; margin:0;">Subido por: ${item.autor} | Fecha: ${item.fecha}</p>
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
      // Estado vacío interactivo para incentivar la subida colaborativa
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

      // Vincular el botón del estado vacío para que redirija al formulario de subida pre-llenado
      const explorerUploadBtn = document.getElementById('explorerUploadBtn');
      if (explorerUploadBtn) {
        explorerUploadBtn.addEventListener('click', () => {
          // 1. Cerrar explorador
          closeExplorerModal();

          // 2. Abrir formulario de subida
          const uploadModal = document.getElementById('uploadModal');
          if (uploadModal) {
            uploadModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // 3. Pre-llenar campos
            const selectCarrera = document.getElementById('selectCarrera');
            const selectAnio = document.getElementById('selectAnio');
            const selectMateria = document.getElementById('selectMateria');

            if (selectCarrera) {
              selectCarrera.value = activeCarrera;
              // Disparar evento change programáticamente para poblar años
              selectCarrera.dispatchEvent(new Event('change'));

              if (selectAnio) {
                selectAnio.value = selectedAnio;
                // Disparar change para poblar materias
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
