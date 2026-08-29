/**
 * AltilloJVG - Módulo Tablón de Novedades y Comunicados
 * Renderiza los comunicados en la columna izquierda en PC y en la pestaña dedicada en celular.
 * Incorpora:
 * 1. Límite de avisos iniciales (4) con botón expandible: "Para ver todos los avisos publicados, clickeá acá".
 * 2. Límite de longitud de texto por aviso con botones interactivos "Ver más" / "Ver menos".
 * 3. Alternancia y reordenamiento físico del DOM en celulares (Herramientas, Altillo, Novedades).
 */

// Función global para alternancia de pestañas en celular (disponible inmediatamente)
window.switchMobileView = function(view, doScroll = true) {
  if (window.innerWidth > 1024) return; // En PC se mantiene intacto el layout de 3 columnas

  const navTools = document.getElementById('mobileNavTools');
  const navAltillo = document.getElementById('mobileNavAltillo');
  const navNews = document.getElementById('mobileNavNews');

  [navTools, navAltillo, navNews].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });

  const grid = document.querySelector('.dashboard-grid');
  const repoView = document.getElementById('mainRepoView');
  const sidebar = document.getElementById('rightSidebar') || document.querySelector('.side-column');
  const secRecursos = document.getElementById('recursosSection');
  const secCarreras = document.getElementById('carrerasSection');
  const secTablon = document.getElementById('mobileTablonView');
  const ctaTablon = document.querySelector('.side-card.cta-tablon-mobile');

  if (!grid || !repoView || !sidebar) return;

  if (view === 'tools') {
    if (navTools) navTools.classList.add('active');

    // 1. PESTAÑA HERRAMIENTAS:
    // Bloquecitos de herramientas ARRIBA de todo
    sidebar.style.display = '';
    grid.prepend(sidebar);

    // Información Útil DEBAJO de las herramientas
    repoView.style.display = 'block';
    grid.append(repoView);
    if (secRecursos) secRecursos.style.display = 'block';
    if (secCarreras) secCarreras.style.display = 'none';
    if (secTablon) secTablon.style.display = 'none';
    if (ctaTablon) ctaTablon.style.display = '';

  } else if (view === 'news') {
    if (navNews) navNews.classList.add('active');

    // 2. PESTAÑA NOVEDADES:
    // Tablón de Novedades ARRIBA de todo
    if (secTablon) {
      secTablon.style.display = 'block';
      grid.prepend(secTablon);
    }
    // Ocultar repositorio de carreras
    repoView.style.display = 'none';

    // Bloquecitos de herramientas ABAJO de todo
    sidebar.style.display = '';
    grid.append(sidebar);
    if (ctaTablon) ctaTablon.style.display = 'none';

  } else {
    // 3. PESTAÑA ALTILLO (Por defecto):
    if (navAltillo) navAltillo.classList.add('active');

    // Carreras ARRIBA de todo
    repoView.style.display = 'block';
    grid.prepend(repoView);
    if (secCarreras) secCarreras.style.display = 'block';
    if (secRecursos) secRecursos.style.display = 'none';
    if (secTablon) secTablon.style.display = 'none';

    // Bloquecitos de herramientas ABAJO de todo
    sidebar.style.display = '';
    grid.append(sidebar);
    if (ctaTablon) ctaTablon.style.display = '';
  }

  // Scroll suave al inicio del contenido
  if (doScroll) {
    const hero = document.querySelector('.hero-header');
    if (hero) {
      window.scrollTo({ top: hero.offsetHeight - 15, behavior: 'smooth' });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const tablonFeedDesktop = document.getElementById('tablonFeedDesktop');
  const tablonFeedMobile = document.getElementById('tablonFeedMobile');
  const btnMobileGoTablon = document.getElementById('btnMobileGoTablon');

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
      let borderLeft = '4px solid #009BE3';
      if (item.categoria === 'Importante') {
        badgeBg = '#FEF3C7';
        badgeColor = '#D97706';
        borderLeft = '4px solid #F59E0B';
      } else if (item.categoria === 'Gremial') {
        badgeBg = '#F3E8FF';
        badgeColor = '#7C3AED';
        borderLeft = '4px solid #8B5CF6';
      } else if (item.categoria === 'Urgente') {
        badgeBg = '#FEE2E2';
        badgeColor = '#DC2626';
        borderLeft = '4px solid #EF4444';
      }

      const rawText = item.contenido || '';
      const isLongText = rawText.length > TEXT_CHAR_LIMIT;
      let textHtml = '';

      if (isLongText) {
        const shortSnippet = escapeHtml(rawText.substring(0, TEXT_CHAR_LIMIT).trim()) + '...';
        const fullSnippet = escapeHtml(rawText);
        const uniqueId = `news-text-${viewType}-${item.id}`;

        textHtml = `
          <div id="${uniqueId}" style="font-size:0.84rem; color:#334155; line-height:1.55; margin-bottom:10px;">
            <span class="text-short" style="white-space:pre-line;">${shortSnippet}</span>
            <span class="text-full" style="display:none; white-space:pre-line;">${fullSnippet}</span>
            <button type="button" onclick="toggleReadMore('${uniqueId}')" class="btn-read-more" style="background:none; border:none; color:#009BE3; font-weight:700; cursor:pointer; font-size:0.8rem; padding:0 4px; text-decoration:underline;">
              Ver más
            </button>
          </div>
        `;
      } else {
        textHtml = `
          <p style="font-size:0.84rem; color:#334155; line-height:1.55; white-space:pre-line; margin-bottom:10px;">
            ${escapeHtml(rawText)}
          </p>
        `;
      }

      html += `
        <article class="tablon-card ${item.fijado ? 'pinned-notice' : ''}" style="border-left: ${borderLeft} !important;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="background:${badgeBg}; color:${badgeColor}; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px; text-transform:uppercase; letter-spacing:0.3px;">
                ${escapeHtml(item.categoria)}
              </span>
              ${item.fijado ? '<span style="background:#FFFBEB; color:#B45309; font-size:0.68rem; font-weight:700; padding:2px 8px; border-radius:12px; border:1px solid #FCD34D;">📌 DESTACADO</span>' : ''}
            </div>
            <span style="font-size:0.74rem; color:#94A3B8; font-weight:500;">${fecha}</span>
          </div>

          <h4 style="font-family:var(--font-heading, Outfit, sans-serif); font-size:0.98rem; font-weight:700; color:#0B2545; line-height:1.35; margin-bottom:8px;">
            ${escapeHtml(item.titulo)}
          </h4>

          ${textHtml}

          <div style="border-top:1px solid #F1F5F9; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.74rem; color:#64748B; font-weight:500; display:flex; align-items:center; gap:4px;">
              ✍️ <span>${escapeHtml(item.autor || 'La Caravana')}</span>
            </span>
          </div>
        </article>
      `;
    });

    if (newsList.length > INITIAL_LIMIT) {
      if (!isExpanded) {
        html += `
          <div style="text-align: center; margin-top: 12px; margin-bottom: 8px;">
            <button type="button" onclick="toggleFeedLimit('${viewType}')" class="tablon-expand-btn">
              📋 Para ver todos los avisos publicados (${newsList.length}), clickeá acá
            </button>
          </div>
        `;
      } else {
        html += `
          <div style="text-align: center; margin-top: 12px; margin-bottom: 8px;">
            <button type="button" onclick="toggleFeedLimit('${viewType}')" class="tablon-expand-btn">
              ▲ Mostrar menos avisos
            </button>
          </div>
        `;
      }
    }

    return html;
  }

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

  window.toggleFeedLimit = function(viewType) {
    if (viewType === 'desktop') {
      showAllDesktop = !showAllDesktop;
    } else {
      showAllMobile = !showAllMobile;
    }
    renderNews();
  };

  if (btnMobileGoTablon) {
    btnMobileGoTablon.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('news', true);
    });
  }

  // Inicializar en Altillo al cargar la página si es celular
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
