/**
 * AltilloJVG - Main UI Interactions & Resource Modals
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Upload Modal Handling
  const uploadModal = document.getElementById('uploadModal');
  const openUploadModalBtn = document.getElementById('openUploadModalBtn');
  const mobileUploadBtn = document.getElementById('mobileUploadBtn');
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');

  [openUploadModalBtn, mobileUploadBtn].forEach(btn => {
    if (btn && uploadModal) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        uploadModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  });

  if (closeUploadModalBtn && uploadModal) {
    closeUploadModalBtn.addEventListener('click', closeModal);
  }

  if (uploadModal) {
    uploadModal.addEventListener('click', (e) => {
      if (e.target === uploadModal) closeModal();
    });
  }

  // 2. Dynamic Info Modals for JVG Resources
  const infoModal = document.getElementById('infoModal');
  const closeInfoModalBtn = document.getElementById('closeInfoModalBtn');
  const infoModalTitle = document.getElementById('infoModalTitle');
  const infoModalBody = document.getElementById('infoModalBody');

  if (closeInfoModalBtn && infoModal) {
    closeInfoModalBtn.addEventListener('click', closeInfoModal);
  }

  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) closeInfoModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeInfoModal();
    }
  });

  function closeModal() {
    if (uploadModal) {
      uploadModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function closeInfoModal() {
    if (infoModal) {
      infoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Attach Event Listeners to Side Cards & Student Resources
  document.querySelectorAll('.side-card').forEach(card => {
    if (card.id === 'openUploadModalBtn') return; // Skip CTA button

    card.addEventListener('click', (e) => {
      e.preventDefault();
      if (card.classList.contains('normativa')) openNormativasModal();
      else if (card.classList.contains('planes')) openPlanesModal();
      else if (card.classList.contains('horarios')) {
        if (typeof window.openAulasModal === 'function') window.openAulasModal();
        else openHorariosModal();
      }
    });
  });

  document.querySelectorAll('.resource-box').forEach((box, idx) => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      if (idx === 0) {
        if (typeof window.openAulasModal === 'function') window.openAulasModal();
        else openHorariosModal();
      }
      else if (idx === 1) openFinalesModal();
      else if (idx === 2) openTramitesModal();
      else if (idx === 3) openBecasModal();
    });
  });

  // Modal Render Functions
  function openNormativasModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "📜 Normativa Institucional (ISP JVG)";
    
    let html = `<p style="margin-bottom:16px; color:#64748B;">Reglamentos oficiales del Instituto Superior del Profesorado Joaquín V. González:</p><div style="display:flex; flex-direction:column; gap:12px;">`;
    
    if (typeof JVG_OFFICIAL_RESOURCES !== 'undefined') {
      JVG_OFFICIAL_RESOURCES.normativas.forEach(item => {
        html += `
          <div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:14px; border-radius:10px;">
            <h4 style="color:#0B2545; font-size:0.95rem; margin-bottom:4px;">${item.titulo}</h4>
            <p style="font-size:0.83rem; color:#64748B; margin-bottom:8px;">${item.descripcion}</p>
            <a href="${item.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#009BE3; color:#fff; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.78rem; font-weight:600;">
              Ver en Sitio Oficial JVG →
            </a>
          </div>`;
      });
    }
    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openPlanesModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "🎓 Planes de Estudio y Departamentos";
    
    let html = `<p style="margin-bottom:16px; color:#64748B;">Acceso directo a las páginas oficiales de cada Departamento del Joaquín V. González:</p><div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">`;
    
    if (typeof JVG_OFFICIAL_RESOURCES !== 'undefined') {
      JVG_OFFICIAL_RESOURCES.planes.forEach(item => {
        html += `
          <a href="${item.link}" target="_blank" rel="noopener" style="background:#E6F5FC; border:1px solid #BEE3F8; padding:12px; border-radius:8px; text-decoration:none; color:#0B2545; display:block;">
            <strong style="font-size:0.88rem; display:block; color:#005F8C;">${item.carrera}</strong>
            <span style="font-size:0.75rem; color:#64748B;">${item.plan} (${item.dept})</span>
          </a>`;
      });
    }
    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openHorariosModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "📅 Cartelera Oficial de Horarios y Aulas";
    
    let html = `<div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:18px; border-radius:10px; margin-bottom:14px;">
        <h4 style="color:#0B2545; margin-bottom:6px;">Cartelera Institucional JVG</h4>
        <p style="font-size:0.85rem; color:#64748B; line-height:1.4; margin-bottom:12px;">
          Descargá las grillas actualizadas por día directamente desde el sitio oficial del Instituto.
        </p>
        <a href="http://institutojvgonzalez.buenosaires.edu.ar/cartelera/horarios.php" target="_blank" rel="noopener" style="display:inline-block; background:#009BE3; color:#fff; padding:8px 14px; border-radius:6px; text-decoration:none; font-size:0.82rem; font-weight:600;">
          Ir a Cartelera Oficial de Horarios JVG →
        </a>
      </div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openFinalesModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "📅 Mesas de Finales y Parciales";
    infoModalBody.innerHTML = `
      <div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:18px; border-radius:10px;">
        <h4 style="color:#0B2545; margin-bottom:8px;">Cronograma de Exámenes Institucional</h4>
        <p style="font-size:0.85rem; color:#64748B; line-height:1.4; margin-bottom:12px;">
          Las inscripciones a mesas de exámenes finales y llamados se publican oficialmente en la sección de mesas del Instituto.
        </p>
        <a href="http://institutojvgonzalez.buenosaires.edu.ar/cartelera/mesas-examenes.php" target="_blank" rel="noopener" style="display:inline-block; background:#009BE3; color:#fff; padding:8px 14px; border-radius:6px; text-decoration:none; font-size:0.82rem; font-weight:600;">
          Ver Mesas de Exámenes en Cartelera Oficial →
        </a>
      </div>`;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openTramitesModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "📝 Trámites y Certificados Estudiantiles";
    
    let html = `<div style="display:flex; flex-direction:column; gap:12px;">`;
    if (typeof JVG_OFFICIAL_RESOURCES !== 'undefined') {
      JVG_OFFICIAL_RESOURCES.tramites.forEach(item => {
        html += `
          <div style="background:#FAFDFF; border:1px solid #CBD5E1; padding:14px; border-radius:10px;">
            <h4 style="color:#0B2545; font-size:0.95rem; margin-bottom:4px;">${item.nombre}</h4>
            <p style="font-size:0.83rem; color:#475569; margin-bottom:6px;"><strong>Detalle:</strong> ${item.pasos}</p>
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" style="display:inline-block; background:#009BE3; color:#fff; padding:5px 10px; border-radius:6px; text-decoration:none; font-size:0.75rem; font-weight:600;">Acceder a Trámite / SIU →</a>` : ''}
          </div>`;
      });
    }
    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openBecasModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "🎟️ Boleto Estudiantil y Becas";
    
    let html = `<div style="display:flex; flex-direction:column; gap:12px;">`;
    if (typeof JVG_OFFICIAL_RESOURCES !== 'undefined') {
      JVG_OFFICIAL_RESOURCES.becas.forEach(item => {
        html += `
          <div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:14px; border-radius:10px;">
            <h4 style="color:#0B2545; font-size:0.95rem; margin-bottom:4px;">${item.nombre}</h4>
            <p style="font-size:0.83rem; color:#64748B; margin-bottom:8px;">${item.descripcion}</p>
            <a href="${item.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#009BE3; color:#fff; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.78rem; font-weight:600;">
              Ver Información en Sitio Oficial →
            </a>
          </div>`;
      });
    }
    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});
