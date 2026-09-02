/**
 * AltilloJVG - Main UI Interactions & Resource Modals
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Chequeo de Banner de Alerta Urgente (Gestionado desde Panel Admin)
  try {
    const urgentText = localStorage.getItem('altillojvg_urgent_banner');
    const urgentBanner = document.getElementById('urgentAlertBanner');
    const urgentAlertText = document.getElementById('urgentAlertText');
    if (urgentText && urgentBanner && urgentAlertText) {
      urgentAlertText.textContent = urgentText;
      urgentBanner.style.display = 'block';
    }
  } catch (e) {}

  // 1. Upload Modal Handling
  const uploadModal = document.getElementById('uploadModal');
  const openUploadModalBtn = document.getElementById('openUploadModalBtn');
  const mobileUploadBtn = document.getElementById('mobileUploadBtn');
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');

  [openUploadModalBtn, mobileUploadBtn].forEach(btn => {
    if (btn && uploadModal) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        trackToolUsage('upload');
        uploadModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  });

  const closeUploadModalBtn2 = document.getElementById('closeUploadModalBtn2');
  [closeUploadModalBtn, closeUploadModalBtn2].forEach(btn => {
    if (btn && uploadModal) {
      btn.addEventListener('click', closeModal);
    }
  });

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
      if (card.classList.contains('normativa')) {
        trackToolUsage('tramites');
        openNormativasModal();
      } else if (card.classList.contains('planes')) {
        trackToolUsage('tramites');
        openPlanesModal();
      } else if (card.classList.contains('horarios')) {
        trackToolUsage('aulas');
        if (typeof window.openAulasModal === 'function') window.openAulasModal();
        else openHorariosModal();
      } else if (card.classList.contains('mapa-carrera')) {
        trackToolUsage('mapas');
        if (typeof window.openMapaCarreraModal === 'function') window.openMapaCarreraModal();
      }
    });
  });

  document.querySelectorAll('.resource-box').forEach((box) => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      if (box.classList.contains('box-aulas')) {
        trackToolUsage('aulas');
        if (typeof window.openAulasModal === 'function') window.openAulasModal();
        else openHorariosModal();
      } else if (box.classList.contains('box-mapa-carrera')) {
        trackToolUsage('mapas');
        if (typeof window.openMapaCarreraModal === 'function') window.openMapaCarreraModal();
      } else if (box.classList.contains('box-finales')) {
        trackToolUsage('tramites');
        openFinalesModal();
      } else if (box.classList.contains('box-tramites')) {
        trackToolUsage('tramites');
        openTramitesModal();
      } else if (box.classList.contains('box-becas')) {
        trackToolUsage('becas');
        openBecasModal();
      } else if (box.classList.contains('box-derechos')) {
        trackToolUsage('tramites');
        openDerechosModal();
      } else if (box.classList.contains('box-libros')) {
        trackToolUsage('apuntes');
        openLibrosGuiaModal();
      } else if (box.classList.contains('box-comodato')) {
        trackToolUsage('computadoras');
        openComodatoModal();
      }
    });
  });

  // Helper para leer contenido dinámico configurado desde el CMS
  function getDynamicResource(key, fallback) {
    try {
      const cached = localStorage.getItem('altillojvg_site_config');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.tools_config?.[key]?.modal_content) {
          return parsed.tools_config[key].modal_content;
        }
      }
    } catch (e) {}
    return fallback;
  }

  // Modal Render Functions
  function openNormativasModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "📜 Normativa Institucional (ISP JVG)";
    
    let html = `<p style="margin-bottom:16px; color:#64748B;">Reglamentos oficiales del Instituto Superior del Profesorado Joaquín V. González:</p><div style="display:flex; flex-direction:column; gap:12px;">`;
    
    const normativas = getDynamicResource('normativas', (typeof JVG_OFFICIAL_RESOURCES !== 'undefined' ? JVG_OFFICIAL_RESOURCES.normativas : []));
    if (Array.isArray(normativas)) {
      normativas.forEach(item => {
        html += `
          <div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:14px; border-radius:10px;">
            <h4 style="color:#0B2545; font-size:0.95rem; margin-bottom:4px;">${item.titulo}</h4>
            <p style="font-size:0.83rem; color:#64748B; margin-bottom:8px;">${item.descripcion || ''}</p>
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#009BE3; color:#fff; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.78rem; font-weight:600;">
              Ver en Sitio Oficial JVG →
            </a>` : ''}
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
    
    const planesCfg = getDynamicResource('planes', null);
    const avisoText = planesCfg?.aviso || "Acceso directo a las páginas oficiales de cada Departamento del Joaquín V. González:";

    let html = `<p style="margin-bottom:16px; color:#64748B;">${avisoText}</p><div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">`;
    
    if (typeof JVG_OFFICIAL_RESOURCES !== 'undefined' && Array.isArray(JVG_OFFICIAL_RESOURCES.planes)) {
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
    
    let html = `<div style="display:flex; flex-direction:column; gap:14px;">`;
    if (typeof JVG_OFFICIAL_RESOURCES !== 'undefined') {
      JVG_OFFICIAL_RESOURCES.tramites.forEach(item => {
        const pasosHtml = Array.isArray(item.pasos)
          ? `<ul style="margin: 8px 0 10px 18px; font-size:0.82rem; color:#475569; line-height:1.5;">${item.pasos.map(p => `<li style="margin-bottom:4px;">${p.replace(/^\d+[\.\)]\s*/, '')}</li>`).join('')}</ul>`
          : `<p style="font-size:0.83rem; color:#475569; margin-bottom:6px;">${item.pasos}</p>`;

        html += `
          <div style="background:#FAFDFF; border:1px solid #CBD5E1; padding:16px; border-radius:10px;">
            <h4 style="color:#0B2545; font-size:0.98rem; font-weight:700; margin-bottom:4px;">${item.nombre}</h4>
            <p style="font-size:0.83rem; color:#64748B; margin-bottom:6px;">${item.descripcion || ''}</p>
            ${pasosHtml}
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#009BE3; color:#fff; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.78rem; font-weight:600;">Acceder a Trámite Oficial →</a>` : ''}
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
    
    let html = `<div style="display:flex; flex-direction:column; gap:14px;">`;
    const becas = getDynamicResource('becas', (typeof JVG_OFFICIAL_RESOURCES !== 'undefined' ? JVG_OFFICIAL_RESOURCES.becas : []));
    
    if (Array.isArray(becas)) {
      becas.forEach(item => {
        const pasosHtml = Array.isArray(item.pasos) && item.pasos.length > 0
          ? `<div style="background:#F8FAFC; border-left:3px solid #009BE3; padding:10px 12px; border-radius:4px; margin-bottom:10px;">
               <strong style="font-size:0.78rem; color:#0284C7; display:block; margin-bottom:4px;">¿Cómo realizarlo paso a paso?</strong>
               <ul style="margin:0 0 0 16px; font-size:0.81rem; color:#334155; line-height:1.5;">${item.pasos.map(p => `<li style="margin-bottom:3px;">${p.replace(/^\d+[\.\)]\s*/, '')}</li>`).join('')}</ul>
             </div>`
          : '';

        html += `
          <div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:16px; border-radius:10px;">
            <h4 style="color:#0B2545; font-size:0.98rem; font-weight:700; margin-bottom:4px;">${item.nombre}</h4>
            <p style="font-size:0.83rem; color:#64748B; margin-bottom:8px;">${item.descripcion || ''}</p>
            ${pasosHtml}
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
              ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#009BE3; color:#fff; padding:7px 13px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:700;">
                🌐 Portal de Inscripción Oficial →
              </a>` : ''}
              ${item.linkSecundario ? `<a href="${item.linkSecundario}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#F0F9FF; color:#0369A1; border:1px solid #BAE6FD; padding:7px 12px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:600;">${item.textoLinkSecundario || 'Más Información'} →</a>` : ''}
              ${item.infoPdf ? `<a href="${item.infoPdf}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#EEF4F8; color:#0B2545; border:1px solid #CBD5E1; padding:7px 12px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:600;">📄 Descargar Instructivo PDF</a>` : ''}
            </div>
          </div>`;
      });
    }
    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openComodatoModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "💻 Préstamo de Computadoras en Comodato";
    
    const comodato = getDynamicResource('comodato', (typeof JVG_OFFICIAL_RESOURCES !== 'undefined' ? JVG_OFFICIAL_RESOURCES.comodato : {}));
    const pasos = Array.isArray(comodato.pasos) ? comodato.pasos : [];

    let html = `
      <div style="background:#FAFDFF; border:1px solid #BEE3F8; padding:18px; border-radius:12px;">
        <h4 style="color:#0B2545; font-size:1rem; font-weight:700; margin-bottom:6px;">${comodato.titulo || 'Préstamo de Computadoras en Comodato'}</h4>
        <p style="font-size:0.84rem; color:#475569; line-height:1.5; margin-bottom:14px;">${comodato.descripcion || ''}</p>
        
        <h5 style="color:#007BB5; font-size:0.86rem; font-weight:700; margin-bottom:6px;">📌 Requisitos y Pasos para Solicitarla:</h5>
        <ol style="margin-left:20px; font-size:0.82rem; color:#334155; line-height:1.5; margin-bottom:16px;">
          ${pasos.map(p => `<li style="margin-bottom:4px;">${p.replace(/^\d+[\.\)]\s*/, '')}</li>`).join('')}
        </ol>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <h5 style="color:#007BB5; font-size:0.86rem; font-weight:700; margin:0;">📝 Modelo de Carta para Presentar en Rectorado:</h5>
          <button type="button" onclick="copyCartaComodato()" style="background:#009BE3; color:#fff; border:none; padding:5px 10px; border-radius:6px; font-size:0.75rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px;">
            📋 Copiar modelo
          </button>
        </div>
        <div style="background:#F1F5F9; border:1px solid #CBD5E1; border-radius:8px; padding:14px; font-family:monospace; font-size:0.82rem; color:#1E293B; white-space:pre-wrap; line-height:1.45; margin-bottom:12px;" id="cartaComodatoText">${comodato.modeloCarta || ''}</div>
      </div>
    `;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  window.openComodatoModal = openComodatoModal;

  window.copyCartaComodato = function() {
    const textEl = document.getElementById('cartaComodatoText');
    const textToCopy = textEl ? textEl.textContent : (typeof JVG_OFFICIAL_RESOURCES !== 'undefined' ? JVG_OFFICIAL_RESOURCES.comodato.modeloCarta : '');
    
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('¡Modelo de carta copiado al portapapeles! Pegalo en tu procesador de textos o completalo con tus datos personales.');
      }).catch(() => {
        alert('¡Modelo de carta copiado al portapapeles!');
      });
    }
  };

  // 5. Open Derechos Estudiantiles Modal
  function openDerechosModal() {
    if (!infoModal) return;
    infoModalTitle.textContent = "⚖️ Conocé tus Derechos Estudiantiles (Guía Oficial JVG)";
    
    let html = `<p style="margin-bottom:16px; color:#475569; font-size:0.88rem; line-height:1.4;">
      Resumen normativo basado en el ROI, Resoluciones del Consejo Directivo y reglamentos del Instituto Superior del Profesorado Joaquín V. González:
    </p><div style="display:flex; flex-direction:column; gap:18px;">`;

    if (typeof JVG_DERECHOS_ESTUDIANTILES !== 'undefined') {
      JVG_DERECHOS_ESTUDIANTILES.forEach(sec => {
        html += `
          <div style="border:1px solid #CBD5E1; border-radius:12px; overflow:hidden; background:#FFFFFF;">
            <div style="background:${sec.color}; color:#FFFFFF; padding:10px 16px; font-weight:700; font-size:0.95rem; display:flex; align-items:center; gap:8px;">
              <span>${sec.icono}</span> ${sec.categoria}
            </div>
            <div style="padding:14px; display:flex; flex-direction:column; gap:10px;">`;

        sec.items.forEach(item => {
          html += `
            <div style="background:#FAFDFF; border-left:4px solid ${sec.color}; padding:10px 12px; border-radius:4px;">
              <h5 style="color:#0B2545; font-size:0.9rem; font-weight:700; margin-bottom:4px;">${item.titulo}</h5>
              ${item.requisito ? `<p style="font-size:0.8rem; color:#475569; margin-bottom:4px;"><strong>Requisito / Regla:</strong> ${item.requisito}</p>` : ''}
              ${item.garantía ? `<p style="font-size:0.8rem; color:#005F8C; margin-bottom:2px;"><strong>Garantía Estudiantil:</strong> ${item.garantía}</p>` : ''}
              ${item.procedimiento ? `<p style="font-size:0.8rem; color:#0B2545;"><strong>Procedimiento:</strong> ${item.procedimiento}</p>` : ''}
              ${item.motivo ? `<p style="font-size:0.8rem; color:#C65100;"><strong>Causa Normativa:</strong> ${item.motivo}</p>` : ''}
            </div>`;
        });

        html += `</div></div>`;
      });
    }

    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // 6. Open "Cómo NO conseguir libros piratas" Modal
  function openLibrosGuiaModal() {
    if (!infoModal) return;
    infoModalTitle.innerHTML = '🚫 Guía Preventiva: Cómo <em>"NO"</em> conseguir libros "piratas" 😉';
    
    let html = `<p style="margin-bottom:16px; color:#475569; font-size:0.88rem; line-height:1.5;">
      Una guía puramente pedagógica e informativa sobre aquellos metabuscadores libres y trucos de búsqueda académica a los que <em>"bajo ningún concepto"</em> deberías entrar si querés evitar encontrar libros y artículos universitarios gratuitos al instante:
    </p><div style="display:flex; flex-direction:column; gap:18px;">`;

    if (typeof JVG_LIBROS_GUIA !== 'undefined') {
      JVG_LIBROS_GUIA.forEach(sec => {
        html += `
          <div style="border:1px solid #CBD5E1; border-radius:12px; overflow:hidden; background:#FFFFFF;">
            <div style="background:${sec.color}; color:#FFFFFF; padding:10px 16px; font-weight:700; font-size:0.95rem; display:flex; align-items:center; gap:8px;">
              <span>${sec.icono}</span> ${sec.categoria}
            </div>
            <div style="padding:14px; display:flex; flex-direction:column; gap:10px;">`;

        sec.sitios.forEach(item => {
          html += `
            <div style="background:#FAFDFF; border-left:4px solid ${sec.color}; padding:10px 12px; border-radius:6px; display:flex; flex-direction:column; gap:4px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <h5 style="color:#0B2545; font-size:0.92rem; font-weight:700;">${item.nombre}</h5>
                ${item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank" rel="noopener" style="font-size:0.75rem; background:#009BE3; color:#fff; padding:4px 8px; border-radius:4px; text-decoration:none; font-weight:600;">Visitar →</a>` : ''}
              </div>
              <p style="font-size:0.82rem; color:#475569;">${item.descripcion}</p>
              ${item.consejo ? `<p style="font-size:0.78rem; color:#005F8C; font-weight:600;">💡 Tip: ${item.consejo}</p>` : ''}
              ${item.ejemplo ? `<code style="font-size:0.78rem; background:#E2E8F0; color:#0F172A; padding:4px 8px; border-radius:4px; font-family:monospace; display:inline-block; margin-top:4px;">${item.ejemplo}</code>` : ''}
            </div>`;
        });

        html += `</div></div>`;
      });
    }

    html += `</div>`;
    infoModalBody.innerHTML = html;
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ============================================================================
  // BUZÓN DE CONSULTAS Y SUGERENCIAS
  // ============================================================================
  const feedbackModal = document.getElementById('feedbackModal');
  const closeFeedbackModalBtn = document.getElementById('closeFeedbackModalBtn');
  const feedbackForm = document.getElementById('feedbackForm');

  window.openFeedbackModal = function() {
    if (!feedbackModal) return;
    if (typeof trackToolUsage === 'function') trackToolUsage('feedback');
    feedbackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeFeedbackModal() {
    if (!feedbackModal) return;
    feedbackModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeFeedbackModalBtn) {
    closeFeedbackModalBtn.addEventListener('click', closeFeedbackModal);
  }

  if (feedbackModal) {
    feedbackModal.addEventListener('click', (e) => {
      if (e.target === feedbackModal) closeFeedbackModal();
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = feedbackForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Enviar';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      const payload = {
        nombre: document.getElementById('feedbackNombre')?.value || '',
        carrera: document.getElementById('feedbackCarrera')?.value || '',
        tipo: document.getElementById('feedbackTipo')?.value || 'Sugerencia',
        mensaje: document.getElementById('feedbackMensaje')?.value || ''
      };

      try {
        const resp = await fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await resp.json();
        alert(result.message || '¡Mensaje enviado con éxito!');
        feedbackForm.reset();
        closeFeedbackModal();
      } catch (err) {
        console.error('Error sending feedback:', err);
        alert('Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }

  // ============================================================================
  // TÉRMINOS Y CONDICIONES / DESLINDE LEGAL
  // ============================================================================
  const terminosModal = document.getElementById('terminosModal');
  const closeTerminosModalBtn = document.getElementById('closeTerminosModalBtn');

  window.openTerminosModal = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!terminosModal) return;
    terminosModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeTerminosModal() {
    if (!terminosModal) return;
    terminosModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  window.closeTerminosModal = closeTerminosModal;

  if (closeTerminosModalBtn) {
    closeTerminosModalBtn.addEventListener('click', closeTerminosModal);
  }

  if (terminosModal) {
    terminosModal.addEventListener('click', (e) => {
      if (e.target === terminosModal) closeTerminosModal();
    });
  }

  // ============================================================================
  // GESTIÓN DE SUSCRIPCIONES A NOVEDADES POR MAIL (Público)
  // ============================================================================
  window.handleSubscription = async function(e, inputId, msgId, consentId) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById(inputId);
    const msgEl = document.getElementById(msgId);
    const consent = consentId ? document.getElementById(consentId) : null;

    if (consent && !consent.checked) {
      if (msgEl) {
        msgEl.style.display = 'block';
        msgEl.className = 'sub-feedback-msg error';
        msgEl.textContent = 'Debés aceptar los Términos de Uso y Política de Privacidad para suscribirte.';
      }
      return;
    }

    if (!input) return;
    const email = input.value.trim();
    if (!email) return;

    if (msgEl) {
      msgEl.style.display = 'block';
      msgEl.className = 'sub-feedback-msg info';
      msgEl.textContent = 'Procesando suscripción...';
    }

    try {
      const resp = await fetch('/api/subscribers?action=subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (msgEl) {
        msgEl.className = `sub-feedback-msg ${data.success ? 'success' : 'error'}`;
        msgEl.textContent = data.message || 'Suscripción procesada.';
      }
      if (data.success && !data.already_subscribed) {
        input.value = '';
        if (consent) consent.checked = false;
      }
    } catch (err) {
      if (msgEl) {
        msgEl.className = 'sub-feedback-msg error';
        msgEl.textContent = 'Ocurrió un error al procesar tu solicitud.';
      }
    }
  };

  window.handleUnsubscribe = async function(inputId, msgId) {
    const input = document.getElementById(inputId);
    let email = input ? input.value.trim() : '';
    if (!email) {
      email = prompt('Ingresá el correo electrónico que deseás dar de baja de las notificaciones:');
      if (!email) return;
      email = email.trim();
    }

    const msgEl = document.getElementById(msgId);
    if (msgEl) {
      msgEl.style.display = 'block';
      msgEl.className = 'sub-feedback-msg info';
      msgEl.textContent = 'Procesando baja...';
    }

    try {
      const resp = await fetch('/api/subscribers?action=unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (msgEl) {
        msgEl.className = `sub-feedback-msg ${data.success ? 'success' : 'error'}`;
        msgEl.textContent = data.message || (data.success ? 'Eliminado exitosamente de las notificaciones por mail de los anuncios.' : 'No se encuentra ningún mail suscrito a las notificaciones por mail.');
      } else {
        alert(data.message);
      }
      if (input) input.value = '';
    } catch (err) {
      if (msgEl) {
        msgEl.className = 'sub-feedback-msg error';
        msgEl.textContent = 'Ocurrió un error al intentar dar de baja el correo.';
      } else {
        alert('Ocurrió un error al procesar la baja.');
      }
    }
  };

  // ==========================================================================
  // TELEMETRÍA Y ANALÍTICA GLOBAL PERSISTENTE
  // ==========================================================================
  function trackVisit() {
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const visits = JSON.parse(localStorage.getItem('altillojvg_analytics_visits') || '{}');
      visits[todayStr] = (visits[todayStr] || 0) + 1;
      localStorage.setItem('altillojvg_analytics_visits', JSON.stringify(visits));

      // Persistencia global en backend
      fetch('/api/metrics?action=visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true
      }).catch(() => {});
    } catch (e) {}
  }
  trackVisit();

  window.trackToolUsage = function(toolKey) {
    try {
      if (!toolKey) return;
      let key = String(toolKey).toLowerCase().trim();
      if (key === 'promedio' || key === 'finales') key = 'tramites';

      const todayStr = new Date().toISOString().split('T')[0];

      // 1. Guardar local total
      const tools = JSON.parse(localStorage.getItem('altillojvg_analytics_tools') || '{}');
      delete tools.promedio;
      tools[key] = (tools[key] || 0) + 1;
      localStorage.setItem('altillojvg_analytics_tools', JSON.stringify(tools));

      // 2. Guardar local diario
      const toolsByDate = JSON.parse(localStorage.getItem('altillojvg_analytics_tools_by_date') || '{}');
      if (!toolsByDate[todayStr]) toolsByDate[todayStr] = {};
      delete toolsByDate[todayStr].promedio;
      toolsByDate[todayStr][key] = (toolsByDate[todayStr][key] || 0) + 1;
      localStorage.setItem('altillojvg_analytics_tools_by_date', JSON.stringify(toolsByDate));

      // 3. Persistencia global en backend
      fetch(`/api/metrics?action=tool&key=${encodeURIComponent(key)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true
      }).catch(() => {});
    } catch (e) {}
  };

  // ============================================================================
  // APLICACIÓN DINÁMICA DE CONFIGURACIÓN DE HERRAMIENTAS (CMS NO-CODE)
  // ============================================================================
  async function applyDynamicSiteToolsConfig() {
    let toolsConfig = null;

    try {
      const cached = localStorage.getItem('altillojvg_site_config');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.tools_config) toolsConfig = parsed.tools_config;
      }
    } catch (e) {}

    if (!toolsConfig) {
      try {
        const res = await fetch('/api/site_config');
        if (res.ok) {
          const data = await res.json();
          if (data && data.tools_config) {
            toolsConfig = data.tools_config;
            localStorage.setItem('altillojvg_site_config', JSON.stringify(data));
          }
        }
      } catch (e) {}
    }

    if (!toolsConfig) return;

    for (const toolId in toolsConfig) {
      const cfg = toolsConfig[toolId];
      // Tarjetas laterales
      const sideCards = document.querySelectorAll('.side-card.' + toolId);
      sideCards.forEach(card => {
        if (!cfg.visible) {
          card.style.display = 'none';
        } else {
          card.style.display = '';
          const titleEl = card.querySelector('.side-card-title');
          const descEl = card.querySelector('.side-card-desc');
          if (titleEl && cfg.nombre) titleEl.textContent = cfg.nombre;
          if (descEl && cfg.subtitulo) descEl.textContent = cfg.subtitulo;
        }
      });

      // Chips móviles correspondientes
      const mobileChips = document.querySelectorAll('.compact-tool-btn.' + toolId);
      mobileChips.forEach(chip => {
        if (!cfg.visible) {
          chip.style.display = 'none';
        } else {
          chip.style.display = '';
          const label = chip.querySelector('span');
          if (label && cfg.nombre) label.textContent = cfg.nombre;
        }
      });
    }
  }

  applyDynamicSiteToolsConfig();
});
