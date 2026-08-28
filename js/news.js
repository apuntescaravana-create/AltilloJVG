/**
 * AltilloJVG - Módulo Tablón de Novedades y Comunicados
 * Renderiza los comunicados en la columna izquierda en PC y en la pestaña dedicada en celular.
 * Incorpora:
 * 1. Límite de avisos iniciales (4) con botón expandible: "Para ver todos los avisos publicados, clickeá acá".
 * 2. Límite de longitud de texto por aviso con botones interactivos "Ver más" / "Ver menos".
 * 3. Alternancia nativa y reordenamiento de vistas en celulares (Herramientas, Altillo, Novedades).
 */

document.addEventListener('DOMContentLoaded', () => {
  const tablonFeedDesktop = document.getElementById('tablonFeedDesktop');
  const tablonFeedMobile = document.getElementById('tablonFeedMobile');
  
  // Elementos de navegación en celular
  const mobileNavTools = document.getElementById('mobileNavTools');
  const mobileNavAltillo = document.getElementById('mobileNavAltillo');
  const mobileNavNews = document.getElementById('mobileNavNews');

  // Contenedores del Layout
  const dashboardGrid = document.querySelector('.dashboard-grid');
  const mainRepoView = document.getElementById('mainRepoView');
  const rightSidebar = document.getElementById('rightSidebar') || document.querySelector('.side-column');
  const recursosSection = document.getElementById('recursosSection');
  const carrerasSection = document.getElementById('carrerasSection');
  const mobileTablonView = document.getElementById('mobileTablonView');
  const btnMobileGoTablon = document.getElementById('btnMobileGoTablon');
  const mobileCtaTablon = document.querySelector('.side-card.cta-tablon-mobile');

  // Estado del Tablón
  const INITIAL_LIMIT = 4;
  const TEXT_CHAR_LIMIT = 180;
  let allNewsCache = [];
  let showAllDesktop = false;
  let showAllMobile = false;

  // 1. Cargar noticias desde el servidor
  loadPublicNews();

  async function loadPublicNews() {
    try {
      const res = await fetch('/api/news');
      if (!res.ok) throw new Error('Error al cargar noticias.');
      allNewsCache = await res.json();
      renderNews();
    } catch (e) {
      console.error(e);
      allNewsCache = [
        {
          id: 1,
          titulo: '¡Bienvenidos al nuevo AltilloJVG!',
          contenido: 'Compañeras y compañeros: lanzamos la versión renovada del repositorio digital estudiantil. Acá van a encontrar apuntes, resúmenes, programas y exámenes clasificados por carrera y año, además de buscadores de aulas y mapas de correlatividades. ¡Construyamos este espacio entre todos!',
          categoria: 'Importante',
          autor: 'La Caravana + Estudiantes Independientes',
          fijado: true,
          created_at: new Date().toISOString()
        }
      ];
      renderNews();
    }
  }

  function renderNews() {
    if (tablonFeedDesktop) {
      tablonFeedDesktop.innerHTML = buildFeedHtml(allNewsCache, showAllDesktop, 'desktop');
    }
    if (tablonFeedMobile) {
      tablonFeedMobile.innerHTML = buildFeedHtml(allNewsCache, showAllMobile, 'mobile');
    }
  }

  function buildFeedHtml(newsList, isExpanded, viewType) {
    if (!newsList || newsList.length === 0) {
      return `
        <div class="tablon-empty-state" style="text-align:center; padding:30px 15px; color:#64748B;">
          <p style="font-size:0.9rem; font-weight:600;">No hay comunicados recientes.</p>
          <p style="font-size:0.78rem; margin-top:4px;">Los avisos y novedades estudiantiles aparecerán acá.</p>
        </div>
      `;
    }

    const itemsToDisplay = isExpanded ? newsList : newsList.slice(0, INITIAL_LIMIT);
    let html = '';

    itemsToDisplay.forEach(item => {
      const fecha = new Date(item.created_at).toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      let badgeBg = '#E0F2FE';
      let badgeColor = '#0284C7';
      if (item.categoria === 'Importante') { badgeBg = '#FEF3C7'; badgeColor = '#B45309'; }
      if (item.categoria === 'Gremial') { badgeBg = '#F3E8FF'; badgeColor = '#7E22CE'; }
      if (item.categoria === 'Urgente') { badgeBg = '#FEE2E2'; badgeColor = '#B91C1C'; }

      // Manejo de longitud de texto (Ver más / Ver menos)
      const rawText = item.contenido || '';
      const isLongText = rawText.length > TEXT_CHAR_LIMIT;
      let textHtml = '';

      if (isLongText) {
        const shortSnippet = escapeHtml(rawText.substring(0, TEXT_CHAR_LIMIT).trim()) + '...';
        const fullSnippet = escapeHtml(rawText);
        const uniqueId = `news-text-${viewType}-${item.id}`;

        textHtml = `
          <div id="${uniqueId}" style="font-size:0.83rem; color:#334155; line-height:1.55; margin-bottom:10px;">
            <span class="text-short" style="white-space:pre-line;">${shortSnippet}</span>
            <span class="text-full" style="display:none; white-space:pre-line;">${fullSnippet}</span>
            <button type="button" onclick="toggleReadMore('${uniqueId}')" class="btn-read-more" style="background:none; border:none; color:#0284C7; font-weight:700; cursor:pointer; font-size:0.8rem; padding:0 4px; text-decoration:underline;">
              Ver más
            </button>
          </div>
        `;
      } else {
        textHtml = `
          <p style="font-size:0.83rem; color:#334155; line-height:1.55; white-space:pre-line; margin-bottom:10px;">
            ${escapeHtml(rawText)}
          </p>
        `;
      }

      html += `
        <article class="tablon-card" style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:14px; padding:16px; margin-bottom:14px; box-shadow:0 2px 8px rgba(0,0,0,0.04); transition:transform 0.2s ease;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="background:${badgeBg}; color:${badgeColor}; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:20px; text-transform:uppercase;">
                ${escapeHtml(item.categoria)}
              </span>
              ${item.fijado ? '<span style="background:#FEF3C7; color:#92400E; font-size:0.68rem; font-weight:800; padding:2px 7px; border-radius:20px; border:1px solid #FCD34D;">📌 FIJADO</span>' : ''}
            </div>
            <span style="font-size:0.72rem; color:#94A3B8; font-weight:600;">${fecha}</span>
          </div>

          <h4 style="font-size:0.95rem; font-weight:800; color:#0B2545; line-height:1.35; margin-bottom:8px;">
            ${escapeHtml(item.titulo)}
          </h4>

          ${textHtml}

          <div style="border-top:1px solid #F1F5F9; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.72rem; color:#64748B; font-weight:600;">
              ✍️ ${escapeHtml(item.autor || 'La Caravana')}
            </span>
          </div>
        </article>
      `;
    });

    // Botón para expandir todos los avisos si hay más de INITIAL_LIMIT
    if (newsList.length > INITIAL_LIMIT) {
      if (!isExpanded) {
        html += `
          <div style="text-align: center; margin-top: 12px; margin-bottom: 8px;">
            <button type="button" onclick="toggleFeedLimit('${viewType}')" style="width: 100%; background: #F8FAFC; hover: background: #F1F5F9; color: #475569; font-weight: 700; font-size: 0.8rem; padding: 10px 14px; border-radius: 10px; border: 1.5px solid #E2E8F0; cursor: pointer; transition: all 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              📄 Para ver todos los avisos publicados (${newsList.length}), clickeá acá
            </button>
          </div>
        `;
      } else {
        html += `
          <div style="text-align: center; margin-top: 12px; margin-bottom: 8px;">
            <button type="button" onclick="toggleFeedLimit('${viewType}')" style="width: 100%; background: #F1F5F9; color: #475569; font-weight: 700; font-size: 0.78rem; padding: 8px 12px; border-radius: 10px; border: 1px solid #CBD5E1; cursor: pointer;">
              ▲ Mostrar menos avisos
            </button>
          </div>
        `;
      }
    }

    return html;
  }

  // Alternar "Ver más" / "Ver menos" en cada tarjeta
  window.toggleReadMore = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shortEl = container.querySelector('.text-short');
    const fullEl = container.querySelector('.text-full');
    const btn = container.querySelector('.btn-read-more');

    if (fullEl.style.display === 'none') {
      shortEl.style.display = 'none';
      fullEl.style.display = 'inline';
      btn.textContent = 'Ver menos';
    } else {
      shortEl.style.display = 'inline';
      fullEl.style.display = 'none';
      btn.textContent = 'Ver más';
    }
  };

  // Alternar límite de avisos mostrados en el feed
  window.toggleFeedLimit = function(viewType) {
    if (viewType === 'desktop') {
      showAllDesktop = !showAllDesktop;
    } else {
      showAllMobile = !showAllMobile;
    }
    renderNews();
  };

  // ==============================================================================
  // 2. CONTROLADOR DINÁMICO DE PESTAÑAS MÓVILES (Herramientas, Altillo, Novedades)
  // Reordena físicamente el DOM en celular para garantizar que el contenido aparezca
  // inmediatamente arriba y las herramientas abajo, sin depender de caché de CSS.
  // ==============================================================================
  window.switchMobileView = function(view, doScroll = true) {
    if (window.innerWidth > 1024) return; // En pantallas grandes (PC) no se altera el layout de 3 columnas

    [mobileNavTools, mobileNavAltillo, mobileNavNews].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (view === 'tools') {
      if (mobileNavTools) mobileNavTools.classList.add('active');

      // 1. Pestaña HERRAMIENTAS:
      // Herramientas laterales ARRIBA de todo
      if (rightSidebar && dashboardGrid) {
        rightSidebar.style.display = 'flex';
        dashboardGrid.prepend(rightSidebar);
      }
      // Información Útil DEBAJO de las herramientas
      if (mainRepoView && dashboardGrid) {
        mainRepoView.style.display = 'block';
        dashboardGrid.append(mainRepoView);
      }
      if (recursosSection) recursosSection.style.display = 'block';
      if (carrerasSection) carrerasSection.style.display = 'none';
      if (mobileTablonView) mobileTablonView.style.display = 'none';
      if (mobileCtaTablon) mobileCtaTablon.style.display = 'flex';

    } else if (view === 'news') {
      if (mobileNavNews) mobileNavNews.classList.add('active');

      // 2. Pestaña NOVEDADES:
      // Tablón de Novedades ARRIBA de todo
      if (mobileTablonView && dashboardGrid) {
        mobileTablonView.style.display = 'block';
        dashboardGrid.prepend(mobileTablonView);
      }
      // Ocultar repositorio de carreras e información útil
      if (mainRepoView) mainRepoView.style.display = 'none';

      // Herramientas laterales ABAJO de todo
      if (rightSidebar && dashboardGrid) {
        rightSidebar.style.display = 'flex';
        dashboardGrid.append(rightSidebar);
      }
      if (mobileCtaTablon) mobileCtaTablon.style.display = 'none';

    } else {
      // 3. Pestaña ALTILLO (Por defecto en celular):
      if (mobileNavAltillo) mobileNavAltillo.classList.add('active');

      // Carreras y buscador ARRIBA de todo
      if (mainRepoView && dashboardGrid) {
        mainRepoView.style.display = 'block';
        dashboardGrid.prepend(mainRepoView);
      }
      if (carrerasSection) carrerasSection.style.display = 'block';
      if (recursosSection) recursosSection.style.display = 'none';
      if (mobileTablonView) mobileTablonView.style.display = 'none';

      // Herramientas laterales ABAJO de todo
      if (rightSidebar && dashboardGrid) {
        rightSidebar.style.display = 'flex';
        dashboardGrid.append(rightSidebar);
      }
      if (mobileCtaTablon) mobileCtaTablon.style.display = 'flex';
    }

    // Scroll suave hacia la sección si el usuario hizo clic
    if (doScroll) {
      const hero = document.querySelector('.hero-header');
      if (hero) {
        window.scrollTo({ top: hero.offsetHeight - 15, behavior: 'smooth' });
      }
    }
  };

  // Listeners de clics en la barra inferior móvil
  if (mobileNavTools) {
    mobileNavTools.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('tools', true);
    });
  }

  if (mobileNavAltillo) {
    mobileNavAltillo.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('altillo', true);
    });
  }

  if (mobileNavNews) {
    mobileNavNews.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('news', true);
    });
  }

  if (btnMobileGoTablon) {
    btnMobileGoTablon.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('news', true);
    });
  }

  // Inicializar en Altillo si estamos en celular al cargar la página
  if (window.innerWidth <= 1024) {
    switchMobileView('altillo', false);
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
