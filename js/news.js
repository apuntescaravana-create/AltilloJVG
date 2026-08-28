/**
 * AltilloJVG - Módulo Tablón de Novedades y Comunicados
 * Renderiza los comunicados en la columna izquierda en PC y en la pestaña dedicada en celular.
 * Maneja la alternancia de vistas en móviles (Repositorio vs Tablón de Novedades).
 */

document.addEventListener('DOMContentLoaded', () => {
  const tablonFeedDesktop = document.getElementById('tablonFeedDesktop');
  const tablonFeedMobile = document.getElementById('tablonFeedMobile');
  
  // Elementos de navegación en celular
  const mobileNavRepo = document.getElementById('mobileNavRepo');
  const mobileNavNews = document.getElementById('mobileNavNews');
  const mainRepoView = document.getElementById('mainRepoView');
  const mobileTablonView = document.getElementById('mobileTablonView');
  const btnMobileGoTablon = document.getElementById('btnMobileGoTablon');

  // 1. Cargar noticias desde el servidor
  loadPublicNews();

  async function loadPublicNews() {
    try {
      const res = await fetch('/api/news');
      if (!res.ok) throw new Error('Error al cargar noticias.');
      const news = await res.json();
      renderNews(news);
    } catch (e) {
      console.error(e);
      renderFallbackNews();
    }
  }

  function renderNews(newsList) {
    if (!newsList || newsList.length === 0) {
      const emptyHtml = `
        <div class="tablon-empty-state" style="text-align:center; padding:30px 15px; color:#64748B;">
          <p style="font-size:0.9rem; font-weight:600;">No hay comunicados recientes.</p>
          <p style="font-size:0.78rem; margin-top:4px;">Los avisos y novedades estudiantiles aparecerán acá.</p>
        </div>
      `;
      if (tablonFeedDesktop) tablonFeedDesktop.innerHTML = emptyHtml;
      if (tablonFeedMobile) tablonFeedMobile.innerHTML = emptyHtml;
      return;
    }

    let html = '';
    newsList.forEach(item => {
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

      html += `
        <article class="tablon-card" style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:14px; padding:18px; margin-bottom:16px; box-shadow:0 2px 8px rgba(0,0,0,0.04); transition:transform 0.2s ease;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="background:${badgeBg}; color:${badgeColor}; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:20px; text-transform:uppercase;">
                ${item.categoria}
              </span>
              ${item.fijado ? '<span style="background:#FEF3C7; color:#92400E; font-size:0.7rem; font-weight:800; padding:2px 7px; border-radius:20px; border:1px solid #FCD34D;">📌 FIJADO</span>' : ''}
            </div>
            <span style="font-size:0.72rem; color:#94A3B8; font-weight:600;">${fecha}</span>
          </div>

          <h4 style="font-size:0.98rem; font-weight:800; color:#0B2545; line-height:1.35; margin-bottom:8px;">
            ${item.titulo}
          </h4>

          <p style="font-size:0.83rem; color:#334155; line-height:1.55; white-space:pre-line; margin-bottom:12px;">
            ${item.contenido}
          </p>

          <div style="border-top:1px solid #F1F5F9; padding-top:8px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.72rem; color:#64748B; font-weight:600;">
              ✍️ ${item.autor || 'La Caravana'}
            </span>
          </div>
        </article>
      `;
    });

    if (tablonFeedDesktop) tablonFeedDesktop.innerHTML = html;
    if (tablonFeedMobile) tablonFeedMobile.innerHTML = html;
  }

  function renderFallbackNews() {
    renderNews([
      {
        id: 1,
        titulo: '¡Bienvenidos al nuevo AltilloJVG!',
        contenido: 'Compañeras y compañeros: lanzamos la versión renovada del repositorio digital estudiantil. Acá van a encontrar apuntes, resúmenes, programas y exámenes clasificados por carrera y año, además de buscadores de aulas y mapas de correlatividades. ¡Construyamos este espacio entre todos!',
        categoria: 'Importante',
        autor: 'La Caravana + Estudiantes Independientes',
        fijado: true,
        created_at: new Date().toISOString()
      }
    ]);
  }

  // 2. Alternancia de Vistas en Celular (Repositorio vs Tablón de Novedades)
  window.switchMobileView = function(view) {
    if (view === 'news') {
      if (mainRepoView) mainRepoView.style.display = 'none';
      if (mobileTablonView) mobileTablonView.style.display = 'block';
      if (mobileNavNews) mobileNavNews.classList.add('active');
      if (mobileNavRepo) mobileNavRepo.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (mainRepoView) mainRepoView.style.display = 'block';
      if (mobileTablonView) mobileTablonView.style.display = 'none';
      if (mobileNavRepo) mobileNavRepo.classList.add('active');
      if (mobileNavNews) mobileNavNews.classList.remove('active');
    }
  };

  if (mobileNavRepo) {
    mobileNavRepo.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('repo');
    });
  }

  if (mobileNavNews) {
    mobileNavNews.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('news');
    });
  }

  if (btnMobileGoTablon) {
    btnMobileGoTablon.addEventListener('click', (e) => {
      e.preventDefault();
      switchMobileView('news');
    });
  }
});
