/**
 * AltilloJVG - Controlador Completo del Panel de Administración
 * Pestañas: 
 * 1. Peticiones de Subida (Aprobación/Rechazo sincronizado con Telegram)
 * 2. Gestionar Apuntes (Filtros, Edición y Borrado)
 * 3. Tablón de Noticias (Publicación y Administración de Comunicados)
 * 4. Actualizador de Aulas (Trigger de GitHub Actions)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Secciones y Autenticación
  const loginSection = document.getElementById('loginSection');
  const dashboardSection = document.getElementById('dashboardSection');
  const loginForm = document.getElementById('loginForm');
  const adminPasswordInput = document.getElementById('adminPassword');
  const logoutBtn = document.getElementById('logoutBtn');

  // Botones de Pestañas
  const tabSubmissions = document.getElementById('tabSubmissions');
  const tabApuntes = document.getElementById('tabApuntes');
  const tabNoticias = document.getElementById('tabNoticias');
  const tabFeedback = document.getElementById('tabFeedback');
  const tabMetricas = document.getElementById('tabMetricas');
  const tabEditor = document.getElementById('tabEditor');

  // Contenedores de Sección
  const sectionSubmissions = document.getElementById('sectionSubmissions');
  const sectionApuntes = document.getElementById('sectionApuntes');
  const sectionNoticias = document.getElementById('sectionNoticias');
  const sectionFeedback = document.getElementById('sectionFeedback');
  const sectionMetricas = document.getElementById('sectionMetricas');
  const sectionEditor = document.getElementById('sectionEditor');

  // Elementos de Métricas y Backup
  const metricTotalVisits = document.getElementById('metricTotalVisits');
  const metricVisitsPeriodTag = document.getElementById('metricVisitsPeriodTag');
  const metricTopTool = document.getElementById('metricTopTool');
  const metricTopToolClicks = document.getElementById('metricTopToolClicks');
  const metricTotalApuntes = document.getElementById('metricTotalApuntes');
  const metricPendingApuntes = document.getElementById('metricPendingApuntes');
  const metricTotalNews = document.getElementById('metricTotalNews');
  const metricTotalSubscribers = document.getElementById('metricTotalSubscribers');
  const metricsPeriodFilter = document.getElementById('metricsPeriodFilter');
  const toolRankingContainer = document.getElementById('toolRankingContainer');
  const visitsHistoryList = document.getElementById('visitsHistoryList');
  const btnExportFullBackup = document.getElementById('btnExportFullBackup');
  const urgentBannerInput = document.getElementById('urgentBannerInput');
  const btnSaveUrgentBanner = document.getElementById('btnSaveUrgentBanner');
  const btnClearUrgentBanner = document.getElementById('btnClearUrgentBanner');

  // Badges y Contadores
  const pendingBadgeCount = document.getElementById('pendingBadgeCount');
  const pendingHeaderBadge = document.getElementById('pendingHeaderBadge');
  const feedbackBadgeCount = document.getElementById('feedbackBadgeCount');
  const feedbackHeaderBadge = document.getElementById('feedbackHeaderBadge');
  const feedbackListContainer = document.getElementById('feedbackListContainer');
  const historyCounterBadge = document.getElementById('historyCounterBadge');

  // Tablas y Contenedores
  const pendingTableBody = document.getElementById('pendingTableBody');
  const historyTableBody = document.getElementById('historyTableBody');
  const materialsTableBody = document.getElementById('materialsTableBody');
  const totalRecordsBadge = document.getElementById('totalRecordsBadge');
  const newsListContainer = document.getElementById('newsListContainer');
  const newsCounterBadge = document.getElementById('newsCounterBadge');

  // Filtros de Apuntes
  const filterCarrera = document.getElementById('filterCarrera');
  const filterAnio = document.getElementById('filterAnio');
  const filterTipo = document.getElementById('filterTipo');
  const searchKeyword = document.getElementById('searchKeyword');

  // Modal Edición de Apuntes
  const editModal = document.getElementById('editModal');
  const closeEditModalBtn = document.getElementById('closeEditModalBtn');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  const editForm = document.getElementById('editForm');
  const editId = document.getElementById('editId');
  const editCarrera = document.getElementById('editCarrera');
  const editAnio = document.getElementById('editAnio');
  const editTipo = document.getElementById('editTipo');
  const editMateria = document.getElementById('editMateria');
  const editNombre = document.getElementById('editNombre');
  const editLink = document.getElementById('editLink');

  // Formulario de Noticias
  const newsForm = document.getElementById('newsForm');
  const newsTitulo = document.getElementById('newsTitulo');
  const newsCategoria = document.getElementById('newsCategoria');
  const newsContenido = document.getElementById('newsContenido');
  const newsFijado = document.getElementById('newsFijado');

  // Botón Sincronizar Aulas
  const syncAulasBtn = document.getElementById('syncAulasBtn');

  // Variables de Estado
  let allMaterials = [];
  let allSubmissions = { pending: [], history: [] };
  let allNews = [];
  let allFeedbackList = [];
  let adminPassword = localStorage.getItem('altillojvg_admin_pass') || '';

  // ==========================================================================
  // CONMUTACIÓN DE PESTAÑAS (TABS)
  // ==========================================================================
  function switchTab(tabName) {
    // Resetear estilos de los botones
    [tabSubmissions, tabApuntes, tabNoticias, tabFeedback, tabMetricas, tabEditor].forEach(btn => {
      if (btn) {
        btn.classList.remove('border-brand-navy', 'text-brand-navy');
        btn.classList.add('border-transparent', 'text-gray-500');
      }
    });

    // Ocultar todas las secciones
    if (sectionSubmissions) sectionSubmissions.classList.add('hidden');
    if (sectionApuntes) sectionApuntes.classList.add('hidden');
    if (sectionNoticias) sectionNoticias.classList.add('hidden');
    if (sectionFeedback) sectionFeedback.classList.add('hidden');
    if (sectionMetricas) sectionMetricas.classList.add('hidden');
    if (sectionEditor) sectionEditor.classList.add('hidden');

    if (tabName === 'submissions') {
      if (tabSubmissions) {
        tabSubmissions.classList.add('border-brand-navy', 'text-brand-navy');
        tabSubmissions.classList.remove('border-transparent', 'text-gray-500');
      }
      if (sectionSubmissions) sectionSubmissions.classList.remove('hidden');
      loadSubmissions();
    } else if (tabName === 'apuntes') {
      if (tabApuntes) {
        tabApuntes.classList.add('border-brand-navy', 'text-brand-navy');
        tabApuntes.classList.remove('border-transparent', 'text-gray-500');
      }
      if (sectionApuntes) sectionApuntes.classList.remove('hidden');
      loadMaterials();
    } else if (tabName === 'noticias') {
      if (tabNoticias) {
        tabNoticias.classList.add('border-brand-navy', 'text-brand-navy');
        tabNoticias.classList.remove('border-transparent', 'text-gray-500');
      }
      if (sectionNoticias) sectionNoticias.classList.remove('hidden');
      loadNews();
    } else if (tabName === 'feedback') {
      if (tabFeedback) {
        tabFeedback.classList.add('border-brand-navy', 'text-brand-navy');
        tabFeedback.classList.remove('border-transparent', 'text-gray-500');
      }
      if (sectionFeedback) sectionFeedback.classList.remove('hidden');
      loadFeedback();
    } else if (tabName === 'metricas') {
      if (tabMetricas) {
        tabMetricas.classList.add('border-brand-navy', 'text-brand-navy');
        tabMetricas.classList.remove('border-transparent', 'text-gray-500');
      }
      if (sectionMetricas) sectionMetricas.classList.remove('hidden');
      loadMetricsDashboard();
    } else if (tabName === 'editor') {
      if (tabEditor) {
        tabEditor.classList.add('border-brand-navy', 'text-brand-navy');
        tabEditor.classList.remove('border-transparent', 'text-gray-500');
      }
      if (sectionEditor) sectionEditor.classList.remove('hidden');
      loadSiteEditor();
    }
  }

  // Registrar Clicks en Pestañas
  if (tabSubmissions) tabSubmissions.addEventListener('click', () => switchTab('submissions'));
  if (tabApuntes) tabApuntes.addEventListener('click', () => switchTab('apuntes'));
  if (tabNoticias) tabNoticias.addEventListener('click', () => switchTab('noticias'));
  if (tabFeedback) tabFeedback.addEventListener('click', () => switchTab('feedback'));
  if (tabMetricas) tabMetricas.addEventListener('click', () => switchTab('metricas'));
  if (tabEditor) tabEditor.addEventListener('click', () => switchTab('editor'));

  // ==========================================================================
  // AUTENTICACIÓN Y SESIÓN
  // ==========================================================================
  function showLogin() {
    if (loginSection) loginSection.classList.remove('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
  }

  async function refreshFeedbackBadge() {
    try {
      const res = await fetch('/api/feedback', {
        headers: { 'x-admin-password': adminPassword }
      });
      if (res.ok) {
        const msgs = await res.json();
        const count = Array.isArray(msgs) ? msgs.length : 0;
        if (feedbackBadgeCount) feedbackBadgeCount.textContent = count;
      }
    } catch (e) {}
  }

  function showDashboard() {
    if (loginSection) loginSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.remove('hidden');
    populateCareerFilter();
    switchTab('submissions');
    refreshFeedbackBadge();
  }

  if (adminPassword) {
    showDashboard();
  } else {
    showLogin();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      adminPassword = adminPasswordInput.value.trim();
      if (!adminPassword) return;

      const ok = await testConnection();
      if (ok) {
        localStorage.setItem('altillojvg_admin_pass', adminPassword);
        showDashboard();
      } else {
        alert('⚠️ Contraseña incorrecta o error de conexión con el servidor.');
        adminPassword = '';
        adminPasswordInput.value = '';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('altillojvg_admin_pass');
      adminPassword = '';
      showLogin();
    });
  }

  async function testConnection() {
    try {
      const res = await fetch('/api/materials', {
        headers: { 'x-admin-password': adminPassword }
      });
      return res.ok && res.status !== 401;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  function populateCareerFilter() {
    if (filterCarrera && typeof AULAS_DATABASE !== 'undefined') {
      const careers = [...new Set(AULAS_DATABASE.map(item => item.carrera))].sort();
      filterCarrera.innerHTML = '<option value="">-- Todos --</option>';
      careers.forEach(career => {
        const option = document.createElement('option');
        option.value = career;
        option.textContent = career;
        filterCarrera.appendChild(option);
      });
    }
  }

  // ==========================================================================
  // SECCIÓN 1: PETICIONES DE SUBIDA (SUBMISSIONS)
  // ==========================================================================
  async function loadSubmissions() {
    if (!pendingTableBody) return;
    pendingTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="px-6 py-8 text-center text-gray-500 font-medium">
          Cargando peticiones desde el servidor...
        </td>
      </tr>
    `;

    try {
      const res = await fetch('/api/submissions', {
        headers: { 'x-admin-password': adminPassword }
      });

      if (res.status === 401) {
        if (logoutBtn) logoutBtn.click();
        return;
      }

      if (!res.ok) throw new Error('Error al cargar peticiones.');

      allSubmissions = await res.json();
      renderSubmissions();
    } catch (err) {
      console.error(err);
      if (pendingTableBody) {
        pendingTableBody.innerHTML = `
          <tr>
            <td colspan="6" class="px-6 py-8 text-center text-red-500 font-bold">
              ⚠️ No se pudieron cargar las peticiones. Verificá tu conexión o credenciales.
            </td>
          </tr>
        `;
      }
    }
  }
  window.loadSubmissions = loadSubmissions;

  function renderSubmissions() {
    const { pending, history, totalPending } = allSubmissions;

    if (pendingBadgeCount) pendingBadgeCount.textContent = totalPending || 0;
    if (pendingHeaderBadge) pendingHeaderBadge.textContent = `${totalPending || 0} pendientes`;
    if (historyCounterBadge) historyCounterBadge.textContent = `${history ? history.length : 0} registros en historial`;

    // 1. Renderizar Pendientes
    if (pendingTableBody) {
      if (!pending || pending.length === 0) {
        pendingTableBody.innerHTML = `
          <tr>
            <td colspan="6" class="px-6 py-10 text-center text-gray-400 font-medium">
              ✨ ¡Al día! No hay peticiones de subida pendientes de aprobación.
            </td>
          </tr>
        `;
      } else {
        let pendingHtml = '';
        pending.forEach(item => {
          const fecha = new Date(item.created_at).toLocaleString('es-AR', {
            dateStyle: 'short',
            timeStyle: 'short'
          });

          pendingHtml += `
            <tr class="hover:bg-amber-50/40 border-b border-gray-100">
              <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                ${fecha}
              </td>
              <td class="px-6 py-4">
                <div class="font-bold text-brand-navy text-sm">${item.materia}</div>
                <div class="text-xs text-gray-500">${item.carrera}</div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  ${item.tipo}
                </span>
                <div class="text-xs text-gray-400 mt-0.5">${item.anio}</div>
              </td>
              <td class="px-6 py-4 text-sm font-medium text-gray-800">
                ${item.nombre}
              </td>
              <td class="px-6 py-4 text-center whitespace-nowrap">
                <a href="${item.link}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-xs font-bold text-brand-cyan hover:underline">
                  🔗 Ver Archivo
                </a>
              </td>
              <td class="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                <button onclick="approveSubmission(${item.id}, '${escapeQuote(item.nombre)}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-sm transition">
                  ✅ Aprobar
                </button>
                <button onclick="rejectSubmission(${item.id}, '${escapeQuote(item.nombre)}')" class="px-3 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-lg text-xs font-bold transition">
                  ❌ Rechazar
                </button>
              </td>
            </tr>
          `;
        });
        pendingTableBody.innerHTML = pendingHtml;
      }
    }

    // 2. Renderizar Historial
    if (historyTableBody) {
      if (!history || history.length === 0) {
        historyTableBody.innerHTML = `
          <tr>
            <td colspan="6" class="px-6 py-8 text-center text-gray-400 font-medium">
              No hay registros de aportes procesados aún.
            </td>
          </tr>
        `;
      } else {
        let historyHtml = '';
        history.forEach(item => {
          const fecha = new Date(item.created_at).toLocaleDateString('es-AR');
          const esAprobado = item.estado === 'aprobado';
          const badgeColor = esAprobado ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800';
          const badgeTexto = esAprobado ? '✅ Aprobado' : '❌ Rechazado';

          historyHtml += `
            <tr class="hover:bg-gray-50 border-b border-gray-100">
              <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${fecha}</td>
              <td class="px-6 py-4">
                <div class="font-semibold text-brand-navy text-xs">${item.materia}</div>
                <div class="text-xs text-gray-400">${item.carrera}</div>
              </td>
              <td class="px-6 py-4">
                <div class="font-medium text-gray-700 text-xs">${item.nombre}</div>
                <div class="text-xs text-gray-400">${item.tipo} (${item.anio})</div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeColor}">
                  ${badgeTexto}
                </span>
              </td>
              <td class="px-6 py-4 text-xs text-gray-600 font-medium">
                ${item.aprobado_por || 'Sistema'}
              </td>
              <td class="px-6 py-4 text-center">
                <a href="${item.link}" target="_blank" rel="noopener" class="text-xs text-brand-cyan hover:underline font-bold">
                  Ver
                </a>
              </td>
            </tr>
          `;
        });
        historyTableBody.innerHTML = historyHtml;
      }
    }
  }

  // Acciones de Aprobación / Rechazo
  async function approveSubmission(id, nombre) {
    if (!confirm(`¿Confirmás aprobar y publicar el material "${nombre}"?\n\nSe insertará automáticamente en el Altillo y se notificará en Telegram que fue aprobado desde el Panel de Admin.`)) {
      return;
    }

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ action: 'approve', id })
      });

      const data = await res.json();
      if (res.ok) {
        alert('🎉 ¡Material aprobado y publicado exitosamente!');
        loadSubmissions();
      } else {
        alert('❌ Error al aprobar: ' + (data.error || 'Intente de nuevo.'));
      }
    } catch (e) {
      console.error(e);
      alert('❌ Error al conectar con el servidor.');
    }
  }
  window.approveSubmission = approveSubmission;

  async function rejectSubmission(id, nombre) {
    if (!confirm(`¿Estás seguro de rechazar el material "${nombre}"?\n\nSe actualizará el estado y se sincronizará el mensaje en Telegram.`)) {
      return;
    }

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ action: 'reject', id })
      });

      const data = await res.json();
      if (res.ok) {
        alert('🚫 Petición rechazada.');
        loadSubmissions();
      } else {
        alert('❌ Error al rechazar: ' + (data.error || 'Intente de nuevo.'));
      }
    } catch (e) {
      console.error(e);
      alert('❌ Error al conectar con el servidor.');
    }
  }
  window.rejectSubmission = rejectSubmission;

  // ==========================================================================
  // SECCIÓN 2: GESTIONAR APUNTES PUBLICADOS
  // ==========================================================================
  async function loadMaterials() {
    if (!materialsTableBody) return;
    materialsTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-12 text-center text-gray-500 font-medium">
          Cargando apuntes desde Supabase...
        </td>
      </tr>
    `;
    if (totalRecordsBadge) totalRecordsBadge.textContent = "Cargando...";

    try {
      const res = await fetch('/api/materials', {
        headers: { 'x-admin-password': adminPassword }
      });
      
      if (res.status === 401) {
        if (logoutBtn) logoutBtn.click();
        return;
      }
      
      if (!res.ok) throw new Error('Error al obtener materiales.');
      
      allMaterials = await res.json();
      renderMaterialsTable();
    } catch (err) {
      console.error(err);
      if (materialsTableBody) {
        materialsTableBody.innerHTML = `
          <tr>
            <td colspan="5" class="px-6 py-12 text-center text-red-500 font-bold">
              ⚠️ Error al conectar con la base de datos de materiales.
            </td>
          </tr>
        `;
      }
      if (totalRecordsBadge) totalRecordsBadge.textContent = "Error";
    }
  }
  window.loadMaterials = loadMaterials;

  function renderMaterialsTable() {
    if (!materialsTableBody) return;
    const selectedCarrera = filterCarrera ? filterCarrera.value : '';
    const selectedAnio = filterAnio ? filterAnio.value : '';
    const selectedTipo = filterTipo ? filterTipo.value : '';
    const keyword = searchKeyword ? searchKeyword.value.toLowerCase().trim() : '';

    let filtered = allMaterials;

    if (selectedCarrera) {
      filtered = filtered.filter(m => m.carrera === selectedCarrera);
    }
    if (selectedAnio) {
      filtered = filtered.filter(m => m.anio === selectedAnio);
    }
    if (selectedTipo) {
      filtered = filtered.filter(m => m.tipo === selectedTipo);
    }
    if (keyword) {
      filtered = filtered.filter(m => 
        (m.materia && m.materia.toLowerCase().includes(keyword)) ||
        (m.nombre && m.nombre.toLowerCase().includes(keyword))
      );
    }

    if (totalRecordsBadge) totalRecordsBadge.textContent = `${filtered.length} apuntes encontrados`;

    if (filtered.length === 0) {
      materialsTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="px-6 py-12 text-center text-gray-400 font-medium">
            No se encontraron apuntes con los filtros seleccionados.
          </td>
        </tr>
      `;
      return;
    }

    let html = '';
    filtered.forEach(item => {
      html += `
        <tr class="hover:bg-gray-50 border-b border-gray-100">
          <td class="px-6 py-4">
            <div class="font-semibold text-brand-navy">${item.materia}</div>
            <div class="text-xs text-gray-500">${item.carrera}</div>
          </td>
          <td class="px-6 py-4">
            <span class="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-brand-lightBlue text-brand-blue">
              ${item.tipo}
            </span>
            <div class="text-xs text-gray-400 mt-1">${item.anio}</div>
          </td>
          <td class="px-6 py-4 max-w-xs truncate font-medium text-gray-700">
            ${item.nombre}
          </td>
          <td class="px-6 py-4 text-center">
            <a href="${item.link}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-xs font-bold text-brand-gold hover:underline">
              🔗 Ver Archivo
            </a>
          </td>
          <td class="px-6 py-4 text-right space-x-2">
            <button onclick="openEditModal(${item.id})" class="px-2.5 py-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-lg text-xs font-bold">
              ✏️ Editar
            </button>
            <button onclick="deleteMaterial(${item.id})" class="px-2.5 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg text-xs font-bold">
              🗑️ Borrar
            </button>
          </td>
        </tr>
      `;
    });
    materialsTableBody.innerHTML = html;
  }

  if (filterCarrera) filterCarrera.addEventListener('change', renderMaterialsTable);
  if (filterAnio) filterAnio.addEventListener('change', renderMaterialsTable);
  if (filterTipo) filterTipo.addEventListener('change', renderMaterialsTable);
  if (searchKeyword) searchKeyword.addEventListener('input', renderMaterialsTable);

  async function deleteMaterial(id) {
    const item = allMaterials.find(m => m.id === id);
    if (!item) return;

    if (!confirm(`¿Estás seguro de que querés borrar permanentemente el apunte "${item.nombre}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/materials?id=${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': adminPassword }
      });

      if (res.ok) {
        alert('✅ Archivo eliminado con éxito.');
        loadMaterials();
      } else {
        const err = await res.json();
        alert('❌ Error al eliminar: ' + (err.error || 'Intente de nuevo.'));
      }
    } catch (e) {
      console.error(e);
      alert('❌ Error al conectar con el servidor.');
    }
  }
  window.deleteMaterial = deleteMaterial;

  function openEditModal(id) {
    const item = allMaterials.find(m => m.id === id);
    if (!item) return;

    editId.value = item.id;
    editCarrera.value = item.carrera;
    editAnio.value = item.anio;
    editTipo.value = item.tipo;
    editMateria.value = item.materia;
    editNombre.value = item.nombre;
    editLink.value = item.link;

    editModal.classList.remove('hidden');
  }
  window.openEditModal = openEditModal;

  function closeEditModal() {
    if (editModal) editModal.classList.add('hidden');
    if (editForm) editForm.reset();
  }

  if (closeEditModalBtn) closeEditModalBtn.addEventListener('click', closeEditModal);
  if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeEditModal);
  if (editModal) {
    editModal.addEventListener('click', (e) => {
      if (e.target === editModal) closeEditModal();
    });
  }

  if (editForm) {
    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const payload = {
        id: parseInt(editId.value),
        anio: editAnio.value,
        tipo: editTipo.value,
        materia: editMateria.value.trim(),
        nombre: editNombre.value.trim(),
        link: editLink.value.trim()
      };

      try {
        const res = await fetch('/api/materials', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-password': adminPassword
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          alert('✅ Cambios guardados exitosamente.');
          closeEditModal();
          loadMaterials();
        } else {
          const err = await res.json();
          alert('❌ Error al guardar cambios: ' + (err.error || 'Intente de nuevo.'));
        }
      } catch (err) {
        console.error(err);
        alert('❌ Error al conectar con el servidor.');
      }
    });
  }

  // ==========================================================================
  // SECCIÓN 3: TABLÓN DE NOTICIAS & GESTIÓN DE CATEGORÍAS
  // ==========================================================================
  const DEFAULT_CATEGORIES = ['Importante', 'Aviso', 'Gremial', 'Urgente'];

  // Elementos de Categorías
  const btnManageCategories = document.getElementById('btnManageCategories');
  const categoriesModal = document.getElementById('categoriesModal');
  const closeCategoriesModalBtn = document.getElementById('closeCategoriesModalBtn');
  const closeCategoriesBtn2 = document.getElementById('closeCategoriesBtn2');
  const addCategoryForm = document.getElementById('addCategoryForm');
  const newCategoryInput = document.getElementById('newCategoryInput');
  const categoriesListContainer = document.getElementById('categoriesListContainer');

  // Elementos de Edición de Noticia
  const editNewsModal = document.getElementById('editNewsModal');
  const closeEditNewsModalBtn = document.getElementById('closeEditNewsModalBtn');
  const cancelEditNewsBtn = document.getElementById('cancelEditNewsBtn');
  const editNewsForm = document.getElementById('editNewsForm');
  const editNewsId = document.getElementById('editNewsId');
  const editNewsTitulo = document.getElementById('editNewsTitulo');
  const editNewsCategoria = document.getElementById('editNewsCategoria');
  const editNewsContenido = document.getElementById('editNewsContenido');
  const editNewsFijado = document.getElementById('editNewsFijado');
  const editNewsTimeNotice = document.getElementById('editNewsTimeNotice');

  function getCategories() {
    try {
      const saved = localStorage.getItem('altillojvg_news_categories');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [...DEFAULT_CATEGORIES];
  }

  function saveCategories(cats) {
    localStorage.setItem('altillojvg_news_categories', JSON.stringify(cats));
    populateCategorySelects();
    renderCategoriesList();
  }

  function populateCategorySelects() {
    const cats = getCategories();
    [newsCategoria, editNewsCategoria].forEach(sel => {
      if (!sel) return;
      const currentVal = sel.value;
      sel.innerHTML = '';
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        sel.appendChild(opt);
      });
      if (currentVal && cats.includes(currentVal)) {
        sel.value = currentVal;
      }
    });
  }

  function renderCategoriesList() {
    if (!categoriesListContainer) return;
    const cats = getCategories();
    let html = '';

    cats.forEach((cat, index) => {
      html += `
        <div class="px-4 py-3 flex justify-between items-center bg-white hover:bg-gray-50">
          <span class="font-bold text-sm text-brand-navy">${escapeHtml(cat)}</span>
          <div class="space-x-1.5">
            <button type="button" onclick="renameCategory(${index})" class="px-2.5 py-1 bg-yellow-50 hover:bg-yellow-100 text-yellow-800 rounded-lg text-xs font-bold transition">
              ✏️ Renombrar
            </button>
            <button type="button" onclick="deleteCategory(${index})" class="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold transition" ${cats.length <= 1 ? 'disabled style="opacity:0.4"' : ''}>
              🗑️
            </button>
          </div>
        </div>
      `;
    });

    categoriesListContainer.innerHTML = html;
  }

  window.renameCategory = function(index) {
    const cats = getCategories();
    const current = cats[index];
    const newName = prompt(`Ingresá el nuevo nombre para la categoría "${current}":`, current);
    if (!newName || !newName.trim()) return;
    const cleanName = newName.trim();
    if (cats.includes(cleanName) && cleanName !== current) {
      alert('Ya existe una categoría con ese nombre.');
      return;
    }
    cats[index] = cleanName;
    saveCategories(cats);
  };

  window.deleteCategory = function(index) {
    const cats = getCategories();
    if (cats.length <= 1) {
      alert('Debe quedar al menos una categoría.');
      return;
    }
    const cat = cats[index];
    if (!confirm(`¿Estás seguro de eliminar la categoría "${cat}"?`)) return;
    cats.splice(index, 1);
    saveCategories(cats);
  };

  if (btnManageCategories) {
    btnManageCategories.addEventListener('click', () => {
      renderCategoriesList();
      if (categoriesModal) categoriesModal.classList.remove('hidden');
    });
  }

  function closeCategoriesModal() {
    if (categoriesModal) categoriesModal.classList.add('hidden');
  }

  if (closeCategoriesModalBtn) closeCategoriesModalBtn.addEventListener('click', closeCategoriesModal);
  if (closeCategoriesBtn2) closeCategoriesBtn2.addEventListener('click', closeCategoriesModal);
  if (categoriesModal) {
    categoriesModal.addEventListener('click', (e) => {
      if (e.target === categoriesModal) closeCategoriesModal();
    });
  }

  if (addCategoryForm) {
    addCategoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newCategoryInput.value.trim();
      if (!val) return;
      const cats = getCategories();
      if (cats.includes(val)) {
        alert('Esa categoría ya existe.');
        return;
      }
      cats.push(val);
      saveCategories(cats);
      newCategoryInput.value = '';
    });
  }

  // Cargar categorías en los selectores
  populateCategorySelects();

  async function loadNews() {
    if (!newsListContainer) return;
    newsListContainer.innerHTML = `
      <div class="p-8 text-center text-gray-500 font-medium">
        Cargando noticias y comunicados...
      </div>
    `;

    try {
      const res = await fetch('/api/news');
      allNews = await res.json();
      renderNewsList();
    } catch (e) {
      console.error(e);
      if (newsListContainer) {
        newsListContainer.innerHTML = `
          <div class="p-8 text-center text-red-500 font-bold">
            ⚠️ No se pudieron cargar los comunicados del Tablón.
          </div>
        `;
      }
    }
  }
  window.loadNews = loadNews;

  function renderNewsList() {
    if (newsCounterBadge) newsCounterBadge.textContent = `${allNews.length} comunicados`;

    if (!allNews || allNews.length === 0) {
      if (newsListContainer) {
        newsListContainer.innerHTML = `
          <div class="p-8 text-center text-gray-400 font-medium">
            Aún no hay comunicados publicados en el Tablón.
          </div>
        `;
      }
      return;
    }

    let html = '';
    allNews.forEach(item => {
      const fecha = new Date(item.created_at).toLocaleDateString('es-AR');
      const isPinned = item.fijado;
      
      let badgeClass = 'bg-blue-100 text-blue-800';
      if (item.categoria === 'Importante') badgeClass = 'bg-amber-100 text-amber-800';
      if (item.categoria === 'Gremial') badgeClass = 'bg-purple-100 text-purple-800';
      if (item.categoria === 'Urgente') badgeClass = 'bg-red-100 text-red-800';

      html += `
        <div class="p-6 flex justify-between items-start gap-4 hover:bg-gray-50 transition border-b border-gray-100">
          <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeClass}">
                ${item.categoria}
              </span>
              ${isPinned ? '<span class="bg-amber-50 text-amber-800 text-xs px-2 py-0.5 rounded-full font-bold border border-amber-300">📌 Fijado al inicio</span>' : ''}
              <span class="text-xs text-gray-400">${fecha}</span>
            </div>
            <h4 class="text-base font-bold text-brand-navy">${item.titulo}</h4>
            <p class="text-sm text-gray-600 whitespace-pre-line leading-relaxed">${item.contenido}</p>
            <div class="text-xs text-gray-400 pt-1 font-medium">Publicado por: ${item.autor}</div>
          </div>
          <div class="flex items-center gap-2 whitespace-nowrap">
            <button onclick="togglePinNews(${item.id})" class="px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${isPinned ? 'bg-amber-100 hover:bg-amber-200 text-amber-900' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}">
              ${isPinned ? '📍 Desfijar' : '📌 Fijar'}
            </button>
            <button onclick="openEditNewsModal(${item.id})" class="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-brand-cyan rounded-lg text-xs font-bold transition">
              ✏️ Editar
            </button>
            <button onclick="deleteNewsItem(${item.id})" class="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold transition">
              🗑️
            </button>
          </div>
        </div>
      `;
    });
    if (newsListContainer) newsListContainer.innerHTML = html;
  }

  // Toggle Pinned / Desfijar en 1 click
  window.togglePinNews = async function(id) {
    try {
      const res = await fetch('/api/news', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ id, toggleFijadoOnly: true })
      });

      const data = await res.json();
      if (res.ok) {
        loadNews();
      } else {
        alert('❌ ' + (data.error || 'Error al cambiar estado de fijado.'));
      }
    } catch (e) {
      console.error(e);
      alert('❌ Error al conectar con el servidor.');
    }
  };

  // Abrir Modal de Edición de Noticia con regla de 30 minutos
  window.openEditNewsModal = function(id) {
    const item = allNews.find(n => n.id === id);
    if (!item) return;

    populateCategorySelects();

    editNewsId.value = item.id;
    editNewsTitulo.value = item.titulo;
    editNewsCategoria.value = item.categoria;
    editNewsContenido.value = item.contenido;
    editNewsFijado.checked = !!item.fijado;

    // Calcular si pasaron más de 30 minutos desde la creación
    const createdAt = new Date(item.created_at).getTime();
    const diffMinutes = (Date.now() - createdAt) / (1000 * 60);
    const expired = diffMinutes > 30;

    if (expired) {
      editNewsTitulo.disabled = true;
      editNewsTitulo.classList.add('bg-gray-100', 'cursor-not-allowed');
      editNewsContenido.disabled = true;
      editNewsContenido.classList.add('bg-gray-100', 'cursor-not-allowed');

      editNewsTimeNotice.className = 'p-3 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200';
      editNewsTimeNotice.innerHTML = `
        🔒 <strong>Texto Bloqueado:</strong> Pasaron más de 30 minutos desde la publicación. 
        Por seguridad editorial, el título y el cuerpo ya son ineditables (para modificarlos, eliminá el aviso y publicalo nuevamente). 
        <br>👉 <em>La categoría y la opción de fijar/desfijar siguen siendo 100% editables.</em>
      `;
    } else {
      editNewsTitulo.disabled = false;
      editNewsTitulo.classList.remove('bg-gray-100', 'cursor-not-allowed');
      editNewsContenido.disabled = false;
      editNewsContenido.classList.remove('bg-gray-100', 'cursor-not-allowed');

      const remaining = Math.max(1, Math.round(30 - diffMinutes));
      editNewsTimeNotice.className = 'p-3 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200';
      editNewsTimeNotice.innerHTML = `
        ⏳ <strong>Edición habilitada:</strong> Podés modificar el texto libremente durante los primeros 30 minutos (te quedan aprox. <strong>${remaining} minutos</strong>).
      `;
    }

    if (editNewsModal) editNewsModal.classList.remove('hidden');
  };

  function closeEditNewsModal() {
    if (editNewsModal) editNewsModal.classList.add('hidden');
  }

  if (closeEditNewsModalBtn) closeEditNewsModalBtn.addEventListener('click', closeEditNewsModal);
  if (cancelEditNewsBtn) cancelEditNewsBtn.addEventListener('click', closeEditNewsModal);
  if (editNewsModal) {
    editNewsModal.addEventListener('click', (e) => {
      if (e.target === editNewsModal) closeEditNewsModal();
    });
  }

  // Guardar Edición de Noticia
  if (editNewsForm) {
    editNewsForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('btnSaveNewsChanges');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Guardando...';
      }

      const payload = {
        id: parseInt(editNewsId.value),
        titulo: editNewsTitulo.value.trim(),
        categoria: editNewsCategoria.value,
        contenido: editNewsContenido.value.trim(),
        fijado: editNewsFijado.checked
      };

      try {
        const res = await fetch('/api/news', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-password': adminPassword
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (res.ok) {
          alert('✅ Aviso actualizado con éxito.');
          closeEditNewsModal();
          loadNews();
        } else {
          alert('❌ ' + (data.error || 'No se pudo actualizar el aviso.'));
        }
      } catch (err) {
        console.error(err);
        alert('❌ Error al conectar con el servidor.');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Guardar Cambios';
        }
      }
    });
  }

  if (newsForm) {
    newsForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('btnPublishNews');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Publicando...';
      }

      const payload = {
        titulo: newsTitulo.value.trim(),
        categoria: newsCategoria.value,
        contenido: newsContenido.value.trim(),
        autor: 'La Caravana + Estudiantes Independientes',
        fijado: newsFijado.checked
      };

      try {
        const res = await fetch('/api/news', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-password': adminPassword
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (res.ok) {
          alert('🎉 ¡Comunicado publicado con éxito en el Tablón!');
          newsForm.reset();
          loadNews();
        } else {
          alert('❌ Error al publicar noticia: ' + (data.error || 'Intente de nuevo.'));
        }
      } catch (err) {
        console.error(err);
        alert('❌ Error al conectar con el servidor.');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Publicar Comunicado';
        }
      }
    });
  }

  async function deleteNewsItem(id) {
    if (!confirm('¿Estás seguro de que querés eliminar este aviso del Tablón?')) {
      return;
    }

    try {
      const res = await fetch(`/api/news?id=${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': adminPassword }
      });

      if (res.ok) {
        alert('✅ Noticia eliminada.');
        loadNews();
      } else {
        const data = await res.json();
        alert('❌ Error al eliminar noticia: ' + (data.error || 'Intente de nuevo.'));
      }
    } catch (e) {
      console.error(e);
      alert('❌ Error al conectar con el servidor.');
    }
  }
  window.deleteNewsItem = deleteNewsItem;

  // ==========================================================================
  // SECCIÓN 4: BOTÓN ACTUALIZAR AULAS DESDE GITHUB ACTIONS
  // ==========================================================================
  if (syncAulasBtn) {
    syncAulasBtn.addEventListener('click', async () => {
      const confirmSync = confirm(
        '¿Estás seguro de que querés actualizar la base de datos de aulas?\n\n' +
        'Esto iniciará un bot en los servidores de GitHub que descargará los PDFs oficiales del Joaquín, ' +
        'los parseará y actualizará la base de datos del Altillo de forma automática (demora aprox. 2 minutos).'
      );

      if (!confirmSync) return;

      syncAulasBtn.disabled = true;
      syncAulasBtn.textContent = '⏳ Iniciando actualización...';

      try {
        const res = await fetch('/api/sync_aulas', {
          method: 'POST',
          headers: { 'x-admin-password': adminPassword }
        });

        const result = await res.json();

        if (res.ok && result.success) {
          alert('✅ ' + result.message);
        } else {
          alert('❌ Error: ' + (result.error || 'No se pudo iniciar la sincronización. Asegurate de tener configurado GITHUB_PAT en Vercel.'));
        }
      } catch (err) {
        console.error(err);
        alert('❌ Error al conectar con el servidor.');
      } finally {
        syncAulasBtn.disabled = false;
        syncAulasBtn.textContent = '🔄 Actualizar Aulas desde Web Oficial';
      }
    });
  }

  // ==========================================================================
  // GESTIÓN DE CONSULTAS Y SUGERENCIAS (BUZÓN)
  // ==========================================================================
  async function loadFeedback() {
    if (!feedbackListContainer) return;
    feedbackListContainer.innerHTML = '<div class="p-6 text-center text-sm text-gray-500">Cargando mensajes del buzón...</div>';

    try {
      const res = await fetch('/api/feedback', {
        headers: { 'x-admin-password': adminPassword }
      });
      if (!res.ok) throw new Error('Error al cargar consultas');
      const messages = await res.json();

      const count = Array.isArray(messages) ? messages.length : 0;
      if (feedbackBadgeCount) feedbackBadgeCount.textContent = count;
      if (feedbackHeaderBadge) feedbackHeaderBadge.textContent = `${count} mensaje${count === 1 ? '' : 's'}`;

      if (!messages || messages.length === 0) {
        feedbackListContainer.innerHTML = `
          <div class="p-10 text-center text-gray-400">
            <span class="text-4xl block mb-2">📭</span>
            <p class="font-bold text-sm">El buzón de sugerencias está vacío</p>
            <p class="text-xs text-gray-400 mt-1">Los mensajes enviados por estudiantes desde la web aparecerán acá.</p>
          </div>
        `;
        return;
      }

      feedbackListContainer.innerHTML = messages.map(item => {
        const fecha = item.created_at ? new Date(item.created_at).toLocaleString('es-AR', {
          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        }) : 'Reciente';

        let badgeColor = 'bg-gray-100 text-gray-700';
        if (item.tipo === 'Sugerencia') badgeColor = 'bg-amber-100 text-amber-800 border-amber-200';
        else if (item.tipo === 'Consulta') badgeColor = 'bg-sky-100 text-sky-800 border-sky-200';
        else if (item.tipo === 'Reporte de Error') badgeColor = 'bg-red-100 text-red-800 border-red-200';

        return `
          <div class="p-5 hover:bg-gray-50 transition flex justify-between items-start gap-4">
            <div class="space-y-1.5 flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeColor}">
                  ${escapeHtml(item.tipo || 'Mensaje')}
                </span>
                <span class="font-bold text-sm text-gray-900">${escapeHtml(item.nombre || 'Anónimo')}</span>
                <span class="text-xs text-gray-500">• Carrera: <strong>${escapeHtml(item.carrera || 'No especificada')}</strong></span>
                <span class="text-xs text-gray-400">• ${fecha}</span>
              </div>
              <div class="text-sm text-gray-700 whitespace-pre-wrap bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
                ${escapeHtml(item.mensaje)}
              </div>
            </div>
            <button onclick="deleteFeedback('${item.id}')" class="text-xs text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg font-bold transition flex items-center gap-1 border border-red-200" title="Eliminar mensaje">
              🗑️ Borrar
            </button>
          </div>
        `;
      }).join('');

    } catch (err) {
      console.error(err);
      feedbackListContainer.innerHTML = '<div class="p-6 text-center text-sm text-red-500 font-bold">Error al cargar los mensajes.</div>';
    }
  }
  window.loadFeedback = loadFeedback;

  window.deleteFeedback = async function(id) {
    if (!confirm('¿Estás seguro de que querés borrar este mensaje del buzón?')) return;
    try {
      const res = await fetch(`/api/feedback?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': adminPassword }
      });
      if (res.ok) {
        loadFeedback();
      } else {
        alert('Error al borrar el mensaje.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión.');
    }
  };

  // ==========================================================================
  // GESTIÓN DE SUSCRIPCIONES A NOTIFICACIONES POR MAIL (ADMIN)
  // ==========================================================================
  const btnManageSubscribers = document.getElementById('btnManageSubscribers');
  const subscribersModal = document.getElementById('subscribersModal');
  const closeSubscribersModalBtn = document.getElementById('closeSubscribersModalBtn');
  const closeSubscribersModalFooterBtn = document.getElementById('closeSubscribersModalFooterBtn');
  const subscribersTableBody = document.getElementById('subscribersTableBody');
  const subscribersCounterBadge = document.getElementById('subscribersCounterBadge');
  const searchSubscriberInput = document.getElementById('searchSubscriberInput');

  let currentSubscribers = [];

  function openSubscribersModal() {
    if (subscribersModal) subscribersModal.classList.remove('hidden');
    loadSubscribers();
  }

  function closeSubscribersModal() {
    if (subscribersModal) subscribersModal.classList.add('hidden');
  }

  if (btnManageSubscribers) btnManageSubscribers.addEventListener('click', openSubscribersModal);
  if (closeSubscribersModalBtn) closeSubscribersModalBtn.addEventListener('click', closeSubscribersModal);
  if (closeSubscribersModalFooterBtn) closeSubscribersModalFooterBtn.addEventListener('click', closeSubscribersModal);

  if (subscribersModal) {
    subscribersModal.addEventListener('click', (e) => {
      if (e.target === subscribersModal) closeSubscribersModal();
    });
  }

  async function loadSubscribers() {
    if (!subscribersTableBody) return;
    subscribersTableBody.innerHTML = '<tr><td colspan="3" class="px-4 py-4 text-center text-gray-500">Cargando lista de suscriptores...</td></tr>';

    try {
      const res = await fetch('/api/subscribers', {
        headers: { 'x-admin-password': adminPassword }
      });
      if (!res.ok) throw new Error('Error al cargar suscriptores');
      currentSubscribers = await res.json();

      if (subscribersCounterBadge) {
        const count = Array.isArray(currentSubscribers) ? currentSubscribers.length : 0;
        subscribersCounterBadge.textContent = `${count} / 300 cupos`;
      }

      renderSubscribersTable(currentSubscribers);
    } catch (err) {
      console.error(err);
      subscribersTableBody.innerHTML = '<tr><td colspan="4" class="px-4 py-4 text-center text-red-500 font-bold">Error al cargar suscriptores.</td></tr>';
    }
  }
  window.loadSubscribers = loadSubscribers;

  function renderSubscribersTable(list) {
    if (!subscribersTableBody) return;

    if (!list || list.length === 0) {
      subscribersTableBody.innerHTML = '<tr><td colspan="4" class="px-4 py-6 text-center text-gray-400">No hay correos suscriptos actualmente.</td></tr>';
      return;
    }

    subscribersTableBody.innerHTML = list.map((sub, idx) => {
      const fecha = sub.created_at ? new Date(sub.created_at).toLocaleDateString('es-AR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      }) : '—';
      const rowNum = idx + 1;

      return `
        <tr class="hover:bg-gray-50 transition">
          <td class="px-3 py-3 font-bold text-gray-400 text-center font-mono">${rowNum}</td>
          <td class="px-4 py-3 font-semibold text-gray-900 flex items-center gap-2">
            <span class="text-[11px] font-mono text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">Fila ${rowNum}</span>
            <span>${escapeHtml(sub.email)}</span>
          </td>
          <td class="px-4 py-3 text-gray-500">${fecha}</td>
          <td class="px-4 py-3 text-right space-x-2">
            <button onclick="editSubscriber('${sub.id}', '${escapeQuote(sub.email)}')" class="text-sky-600 hover:text-sky-800 font-bold text-xs bg-sky-50 px-2 py-1 rounded border border-sky-200">
              ✏️ Editar
            </button>
            <button onclick="deleteSubscriber('${sub.id}')" class="text-red-600 hover:text-red-800 font-bold text-xs bg-red-50 px-2 py-1 rounded border border-red-200">
              🗑️ Borrar
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  if (searchSubscriberInput) {
    searchSubscriberInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) {
        renderSubscribersTable(currentSubscribers);
      } else {
        const filtered = currentSubscribers.filter(s => (s.email || '').toLowerCase().includes(term));
        renderSubscribersTable(filtered);
      }
    });
  }

  window.editSubscriber = async function(id, currentEmail) {
    const newEmail = prompt('Modificar correo electrónico del suscriptor:', currentEmail);
    if (!newEmail || newEmail.trim() === currentEmail) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail.trim())) {
      alert('Por favor ingresá un correo electrónico válido.');
      return;
    }

    try {
      const res = await fetch('/api/subscribers', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ id, email: newEmail.trim() })
      });
      if (res.ok) {
        loadSubscribers();
      } else {
        alert('Error al actualizar el correo.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión al actualizar.');
    }
  };

  window.deleteSubscriber = async function(id) {
    if (!confirm('¿Estás seguro de que querés eliminar este correo de las suscripciones?')) return;
    try {
      const res = await fetch(`/api/subscribers?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': adminPassword }
      });
      if (res.ok) {
        loadSubscribers();
      } else {
        alert('Error al eliminar suscriptor.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión.');
    }
  };

  // ==========================================================================
  // DASHBOARD DE MÉTRICAS Y COPIA DE SEGURIDAD
  // ==========================================================================
  const TOOL_INFO = {
    'aulas': { name: 'Buscador de Aulas y Cursadas', icon: '🏫', color: 'bg-blue-500' },
    'apuntes': { name: 'Repositorio de Apuntes', icon: '📚', color: 'bg-emerald-500' },
    'mapas': { name: 'Mapas de Carrera (.xlsx)', icon: '🗺️', color: 'bg-sky-500' },
    'upload': { name: 'Subida de Apuntes', icon: '📤', color: 'bg-teal-500' },
    'computadoras': { name: 'Préstamo de Netbooks', icon: '💻', color: 'bg-amber-500' },
    'becas': { name: 'Boleto Estudiantil y Becas', icon: '🎟️', color: 'bg-orange-500' },
    'tablon': { name: 'Tablón de Novedades', icon: '📢', color: 'bg-cyan-500' },
    'feedback': { name: 'Buzón de Consultas', icon: '💬', color: 'bg-purple-500' },
    'tramites': { name: 'Trámites y Normativas', icon: '📝', color: 'bg-rose-500' }
  };

  async function loadMetricsDashboard() {
    // 1. Apuntes Aprobados (Carga autónoma si allMaterials aún no fue consultado)
    if (metricTotalApuntes) {
      if (!allMaterials || allMaterials.length === 0) {
        try {
          const mRes = await fetch('/api/materials');
          if (mRes.ok) allMaterials = await mRes.json();
        } catch (e) {}
      }
      metricTotalApuntes.textContent = (allMaterials ? allMaterials.length : 0).toLocaleString('es-AR');
    }

    // 2. Suscriptores al Tablón
    if (metricTotalSubscribers) {
      try {
        const res = await fetch('/api/subscribers', {
          headers: { 'x-admin-password': adminPassword }
        });
        if (res.ok) {
          const data = await res.json();
          const count = Array.isArray(data) ? data.length : ((data && data.subscribers) ? data.subscribers.length : 0);
          metricTotalSubscribers.textContent = `${count} / 300`;
        }
      } catch (err) {
        metricTotalSubscribers.textContent = '0 / 300';
      }
    }

    // 3. Analítica de Visitas y Herramientas (Filtrado por Día, Mes, Año, Total)
    const period = metricsPeriodFilter ? metricsPeriodFilter.value : 'total';
    let visitsData = {};
    let toolsData = {};
    let toolsByDate = {};

    try {
      visitsData = JSON.parse(localStorage.getItem('altillojvg_analytics_visits') || '{}');
      toolsData = JSON.parse(localStorage.getItem('altillojvg_analytics_tools') || '{}');
      toolsByDate = JSON.parse(localStorage.getItem('altillojvg_analytics_tools_by_date') || '{}');
      delete toolsData.promedio;
    } catch (e) {}

    // Consultar telemetría consolidada del servidor (con fallback resiliente a data/metrics.json)
    let mData = null;
    try {
      const mResp = await fetch('/api/metrics', {
        headers: { 'x-admin-password': adminPassword }
      });
      if (mResp.ok) {
        mData = await mResp.json();
      }
    } catch (e) {
      console.warn('Error consultando /api/metrics:', e);
    }

    if (!mData || (!mData.visits && !mData.tools)) {
      try {
        const fResp = await fetch('data/metrics.json');
        if (fResp.ok) mData = await fResp.json();
      } catch (e) {}
    }

    if (mData) {
      if (mData.visits) {
        visitsData = mData.visits;
        localStorage.setItem('altillojvg_analytics_visits', JSON.stringify(visitsData));
      }
      if (mData.tools) {
        toolsData = mData.tools;
        delete toolsData.promedio;
        localStorage.setItem('altillojvg_analytics_tools', JSON.stringify(toolsData));
      }
      if (mData.tools_by_date) {
        toolsByDate = mData.tools_by_date;
        localStorage.setItem('altillojvg_analytics_tools_by_date', JSON.stringify(toolsByDate));
      }
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const currentMonth = todayStr.substring(0, 7);
    const currentYear = todayStr.substring(0, 4);

    let totalVisits = 0;
    let periodLabel = 'Histórico Total';

    if (period === 'hoy') {
      totalVisits = visitsData[todayStr] || 0;
      periodLabel = `Hoy (${todayStr})`;
    } else if (period === 'mes') {
      Object.keys(visitsData).forEach(d => {
        if (d.startsWith(currentMonth)) totalVisits += (visitsData[d] || 0);
      });
      periodLabel = `Mes ${currentMonth}`;
    } else if (period === 'anio') {
      Object.keys(visitsData).forEach(d => {
        if (d.startsWith(currentYear)) totalVisits += (visitsData[d] || 0);
      });
      periodLabel = `Año ${currentYear}`;
    } else {
      Object.keys(visitsData).forEach(d => {
        totalVisits += (visitsData[d] || 0);
      });
      periodLabel = 'Desde el lanzamiento';
    }

    if (metricTotalVisits) metricTotalVisits.textContent = totalVisits.toLocaleString('es-AR');
    if (metricVisitsPeriodTag) metricVisitsPeriodTag.textContent = `● ${periodLabel}`;

    // 4. Analítica de Herramientas Más Usadas FILTRADA POR PERÍODO
    const currentToolsPeriod = {};
    Object.keys(TOOL_INFO).forEach(k => { currentToolsPeriod[k] = 0; });

    if (period === 'hoy') {
      const todayTools = toolsByDate[todayStr] || {};
      Object.keys(todayTools).forEach(k => {
        if (k in currentToolsPeriod) currentToolsPeriod[k] = todayTools[k] || 0;
      });
    } else if (period === 'mes') {
      Object.keys(toolsByDate).forEach(d => {
        if (d.startsWith(currentMonth)) {
          const dayTools = toolsByDate[d] || {};
          Object.keys(dayTools).forEach(k => {
            if (k in currentToolsPeriod) currentToolsPeriod[k] += (dayTools[k] || 0);
          });
        }
      });
    } else if (period === 'anio') {
      Object.keys(toolsByDate).forEach(d => {
        if (d.startsWith(currentYear)) {
          const dayTools = toolsByDate[d] || {};
          Object.keys(dayTools).forEach(k => {
            if (k in currentToolsPeriod) currentToolsPeriod[k] += (dayTools[k] || 0);
          });
        }
      });
    } else {
      // Histórico Total
      Object.keys(toolsData).forEach(k => {
        if (k in currentToolsPeriod) currentToolsPeriod[k] = toolsData[k] || 0;
      });
    }

    const toolKeys = Object.keys(TOOL_INFO);
    const sortedTools = toolKeys.map(k => ({
      key: k,
      name: TOOL_INFO[k].name,
      icon: TOOL_INFO[k].icon,
      color: TOOL_INFO[k].color,
      count: currentToolsPeriod[k] || 0
    })).sort((a, b) => b.count - a.count);

    const totalClicks = sortedTools.reduce((acc, t) => acc + t.count, 0);

    if (totalClicks > 0) {
      const topTool = sortedTools[0];
      if (metricTopTool) metricTopTool.textContent = `${topTool.icon} ${topTool.name}`;
      if (metricTopToolClicks) metricTopToolClicks.textContent = `${topTool.count} uso${topTool.count === 1 ? '' : 's'} (${Math.round((topTool.count / totalClicks) * 100)}%)`;
    } else {
      if (metricTopTool) metricTopTool.textContent = 'Sin uso registrado';
      if (metricTopToolClicks) metricTopToolClicks.textContent = '0 usos en este período';
    }

    // Renderizar Ranking de Herramientas con Barras de Progreso
    if (toolRankingContainer) {
      toolRankingContainer.innerHTML = sortedTools.map((t, idx) => {
        const pct = totalClicks > 0 ? Math.round((t.count / totalClicks) * 100) : 0;
        return `
          <div>
            <div class="flex justify-between items-center text-xs font-semibold mb-1">
              <span class="flex items-center gap-1.5 text-gray-800">
                <span class="text-xs font-mono font-bold text-gray-400">#${idx + 1}</span>
                <span>${t.icon}</span>
                <span>${t.name}</span>
              </span>
              <span class="text-gray-500 font-mono">${t.count} uso${t.count === 1 ? '' : 's'} <strong class="text-brand-navy">(${pct}%)</strong></span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div class="${t.color} h-2 rounded-full transition-all duration-500" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Renderizar Historial de Visitas por Fecha
    if (visitsHistoryList) {
      const sortedDates = Object.keys(visitsData).sort().reverse().slice(0, 8);
      visitsHistoryList.innerHTML = sortedDates.map(d => {
        const v = visitsData[d];
        return `
          <div class="py-2 flex justify-between items-center">
            <span class="font-mono text-gray-600 font-medium">${d}</span>
            <span class="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-200 font-mono">${v} visitas</span>
          </div>
        `;
      }).join('');
    }

    // 5. Cargar valor actual del Banner Urgente si existe
    if (urgentBannerInput) {
      urgentBannerInput.value = localStorage.getItem('altillojvg_urgent_banner') || '';
    }
  }

  // Listener para el selector de período
  if (metricsPeriodFilter) {
    metricsPeriodFilter.addEventListener('change', () => loadMetricsDashboard());
  }

  // Guardar Banner Urgente
  if (btnSaveUrgentBanner && urgentBannerInput) {
    btnSaveUrgentBanner.addEventListener('click', () => {
      const text = urgentBannerInput.value.trim();
      if (!text) {
        alert('Por favor, escribí un texto para la alerta antes de activarla.');
        return;
      }
      localStorage.setItem('altillojvg_urgent_banner', text);
      alert('✅ Alerta urgente activada correctamente en toda la plataforma.');
    });
  }

  // Desactivar Banner Urgente
  if (btnClearUrgentBanner && urgentBannerInput) {
    btnClearUrgentBanner.addEventListener('click', () => {
      localStorage.removeItem('altillojvg_urgent_banner');
      urgentBannerInput.value = '';
      alert('ℹ️ Alerta urgente desactivada.');
    });
  }

  // Exportar Backup Completo en 1 Clic
  if (btnExportFullBackup) {
    btnExportFullBackup.addEventListener('click', async () => {
      btnExportFullBackup.disabled = true;
      btnExportFullBackup.textContent = '⏳ Generando Backup...';

      try {
        let subscribersList = [];
        try {
          const resSub = await fetch('/api/subscribers', {
            headers: { 'x-admin-password': adminPassword }
          });
          if (resSub.ok) {
            const dataSub = await resSub.json();
            subscribersList = dataSub.subscribers || [];
          }
        } catch (e) {}

        const backupData = {
          exportDate: new Date().toISOString(),
          sistema: "AltilloJVG",
          entorno: "La Caravana + Estudiantes Independientes",
          materiales: allMaterials,
          aportes: allSubmissions,
          noticias: allNews,
          consultas: allFeedbackList,
          suscriptores: subscribersList
        };

        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const dateStr = new Date().toISOString().split('T')[0];
        a.href = url;
        a.download = `altillojvg_backup_${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error(err);
        alert('Error al generar la copia de seguridad.');
      } finally {
        btnExportFullBackup.disabled = false;
        btnExportFullBackup.textContent = '📥 Descargar Backup Completo (.json)';
      }
    });
  }

  // ==========================================================================
  // 6. EDITOR DEL SITIO (CMS NO-CODE & LIVE PREVIEW)
  // ==========================================================================
  let siteConfig = null;
  let activeEditorCarrera = "";
  let activeEditorPlan = "Plan Vigente";
  let previewDevice = "mobile"; // 'mobile' | 'desktop'
  let isEditorDirty = false;

  const subTabCurriculum = document.getElementById('subTabCurriculum');
  const subTabTools = document.getElementById('subTabTools');
  const subTabPreview = document.getElementById('subTabPreview');

  const editorSubViewCurriculum = document.getElementById('editorSubViewCurriculum');
  const editorSubViewTools = document.getElementById('editorSubViewTools');
  const editorSubViewPreview = document.getElementById('editorSubViewPreview');

  const editorSelectCarrera = document.getElementById('editorSelectCarrera');
  const editorSelectPlan = document.getElementById('editorSelectPlan');
  const editorYearsContainer = document.getElementById('editorYearsContainer');
  const editorToolsList = document.getElementById('editorToolsList');

  const btnAddNewPlan = document.getElementById('btnAddNewPlan');
  const btnRenamePlan = document.getElementById('btnRenamePlan');
  const btnDeletePlan = document.getElementById('btnDeletePlan');

  const btnSaveSiteConfig = document.getElementById('btnSaveSiteConfig');
  const btnResetSiteConfig = document.getElementById('btnResetSiteConfig');
  const editorSaveStatus = document.getElementById('editorSaveStatus');

  const btnPreviewMobile = document.getElementById('btnPreviewMobile');
  const btnPreviewDesktop = document.getElementById('btnPreviewDesktop');
  const previewFrameWrapper = document.getElementById('previewFrameWrapper');
  const previewDeviceMock = document.getElementById('previewDeviceMock');
  const previewNotch = document.getElementById('previewNotch');
  const previewContentBody = document.getElementById('previewContentBody');

  function setEditorDirty(dirty) {
    isEditorDirty = dirty;
    if (editorSaveStatus) {
      if (dirty) {
        editorSaveStatus.className = 'bg-amber-100 text-amber-800 text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1';
        editorSaveStatus.innerHTML = '● Cambios sin guardar';
      } else {
        editorSaveStatus.className = 'bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1';
        editorSaveStatus.innerHTML = '✓ Sincronizado';
      }
    }
  }

  function switchEditorSubTab(subTabName) {
    [subTabCurriculum, subTabTools, subTabPreview].forEach(b => {
      if (b) {
        b.classList.remove('border-brand-navy', 'text-brand-navy');
        b.classList.add('border-transparent', 'text-gray-500');
      }
    });

    if (editorSubViewCurriculum) editorSubViewCurriculum.classList.add('hidden');
    if (editorSubViewTools) editorSubViewTools.classList.add('hidden');
    if (editorSubViewPreview) editorSubViewPreview.classList.add('hidden');

    if (subTabName === 'curriculum') {
      if (subTabCurriculum) {
        subTabCurriculum.classList.add('border-brand-navy', 'text-brand-navy');
        subTabCurriculum.classList.remove('border-transparent', 'text-gray-500');
      }
      if (editorSubViewCurriculum) editorSubViewCurriculum.classList.remove('hidden');
      renderEditorCarreraCurriculum();
    } else if (subTabName === 'tools') {
      if (subTabTools) {
        subTabTools.classList.add('border-brand-navy', 'text-brand-navy');
        subTabTools.classList.remove('border-transparent', 'text-gray-500');
      }
      if (editorSubViewTools) editorSubViewTools.classList.remove('hidden');
      renderEditorTools();
    } else if (subTabName === 'preview') {
      if (subTabPreview) {
        subTabPreview.classList.add('border-brand-navy', 'text-brand-navy');
        subTabPreview.classList.remove('border-transparent', 'text-gray-500');
      }
      if (editorSubViewPreview) editorSubViewPreview.classList.remove('hidden');
      renderLivePreview();
    }
  }

  if (subTabCurriculum) subTabCurriculum.addEventListener('click', () => switchEditorSubTab('curriculum'));
  if (subTabTools) subTabTools.addEventListener('click', () => switchEditorSubTab('tools'));
  if (subTabPreview) subTabPreview.addEventListener('click', () => switchEditorSubTab('preview'));

  async function loadSiteEditor() {
    try {
      const res = await fetch('/api/site_config');
      if (res.ok) {
        const data = await res.json();
        if (data && data.curriculum && Object.keys(data.curriculum).length > 0) {
          siteConfig = data;
        }
      }
    } catch (e) {
      console.warn('Error fetching /api/site_config:', e);
    }

    if (!siteConfig) {
      try {
        const cached = localStorage.getItem('altillojvg_site_config');
        if (cached) siteConfig = JSON.parse(cached);
      } catch (e) {}
    }

    const baseResources = (typeof JVG_OFFICIAL_RESOURCES !== 'undefined') ? JVG_OFFICIAL_RESOURCES : {};

    if (!siteConfig || !siteConfig.curriculum || Object.keys(siteConfig.curriculum).length === 0) {
      const baseCurriculum = (typeof CURRICULUM_DATA !== 'undefined') ? JSON.parse(JSON.stringify(CURRICULUM_DATA)) : {};
      siteConfig = {
        curriculum: baseCurriculum,
        tools_config: {
          aulas: { id: 'aulas', visible: true, nombre: 'Buscador de Aulas', subtitulo: 'Consultá salones, materias y horarios (Base de datos 1.658 clases).' },
          mapas: { id: 'mapas', visible: true, nombre: 'Mapa de Carrera Personal', subtitulo: 'Seguí tus correlatividades y avance de carrera en tu Drive.' },
          comodato: { 
            id: 'comodato', 
            visible: true, 
            nombre: 'Préstamo de Computadoras', 
            subtitulo: 'Netbooks en comodato: requisitos y modelo de carta.',
            modal_content: baseResources.comodato ? JSON.parse(JSON.stringify(baseResources.comodato)) : {}
          },
          becas: { 
            id: 'becas', 
            visible: true, 
            nombre: 'Boleto Estudiantil y Becas', 
            subtitulo: 'Instructivos para SUBE, Beca Ciudad y Progresar.',
            modal_content: baseResources.becas ? JSON.parse(JSON.stringify(baseResources.becas)) : []
          },
          normativas: { 
            id: 'normativas', 
            visible: true, 
            nombre: 'Normativa Institucional', 
            subtitulo: 'Reglamento Orgánico (ROI), correlatividades y resoluciones.',
            modal_content: baseResources.normativas ? JSON.parse(JSON.stringify(baseResources.normativas)) : []
          },
          planes: { 
            id: 'planes', 
            visible: true, 
            nombre: 'Planes de Estudio', 
            subtitulo: 'Planes de los profesorados del instituto y resoluciones.',
            modal_content: { aviso: 'Acceso directo a las páginas oficiales de cada Departamento del Joaquín V. González y sus planes de estudio:', link_general: 'http://institutojvgonzalez.buenosaires.edu.ar/departamentos/' }
          },
          feedback: { id: 'feedback', visible: true, nombre: 'Consultas y Sugerencias', subtitulo: 'Escribinos directamente al equipo de administración.' }
        }
      };
    } else if (siteConfig.tools_config) {
      // Si tools_config ya existe pero no tiene modal_content, inicializarlos
      if (!siteConfig.tools_config.comodato.modal_content && baseResources.comodato) {
        siteConfig.tools_config.comodato.modal_content = JSON.parse(JSON.stringify(baseResources.comodato));
      }
      if (!siteConfig.tools_config.normativas.modal_content && baseResources.normativas) {
        siteConfig.tools_config.normativas.modal_content = JSON.parse(JSON.stringify(baseResources.normativas));
      }
      if (!siteConfig.tools_config.becas.modal_content && baseResources.becas) {
        siteConfig.tools_config.becas.modal_content = JSON.parse(JSON.stringify(baseResources.becas));
      }
      if (!siteConfig.tools_config.planes.modal_content) {
        siteConfig.tools_config.planes.modal_content = { aviso: 'Acceso directo a las páginas oficiales de cada Departamento del Joaquín V. González y sus planes de estudio:', link_general: 'http://institutojvgonzalez.buenosaires.edu.ar/departamentos/' };
      }
    }

    populateEditorCarrerasDropdown();
    switchEditorSubTab('curriculum');
  }

  function populateEditorCarrerasDropdown() {
    if (!editorSelectCarrera || !siteConfig || !siteConfig.curriculum) return;
    const carreras = Object.keys(siteConfig.curriculum).sort();
    editorSelectCarrera.innerHTML = carreras.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');

    if (!activeEditorCarrera || !siteConfig.curriculum[activeEditorCarrera]) {
      activeEditorCarrera = carreras[0] || "";
    }
    editorSelectCarrera.value = activeEditorCarrera;

    editorSelectCarrera.onchange = (e) => {
      activeEditorCarrera = e.target.value;
      activeEditorPlan = "Plan Vigente";
      renderEditorCarreraCurriculum();
    };

    renderEditorCarreraCurriculum();
  }

  function renderEditorCarreraCurriculum() {
    if (!activeEditorCarrera || !siteConfig || !siteConfig.curriculum || !siteConfig.curriculum[activeEditorCarrera]) return;

    const carreraObj = siteConfig.curriculum[activeEditorCarrera];
    if (!carreraObj.planes) {
      carreraObj.planes = { "Plan Vigente": carreraObj };
    }

    const planNames = Object.keys(carreraObj.planes);
    if (!planNames.includes(activeEditorPlan)) {
      activeEditorPlan = planNames[0] || "Plan Vigente";
    }

    if (editorSelectPlan) {
      editorSelectPlan.innerHTML = planNames.map(p => `<option value="${escapeHtml(p)}" ${p === activeEditorPlan ? 'selected' : ''}>${escapeHtml(p)}</option>`).join('');
      editorSelectPlan.onchange = (e) => {
        activeEditorPlan = e.target.value;
        renderEditorCarreraCurriculum();
      };
    }

    const currentPlanYears = carreraObj.planes[activeEditorPlan] || {};

    if (!editorYearsContainer) return;
    const yearsOrder = ["1° Año", "2° Año", "3° Año", "4° Año", "5° Año", "Tramo Superior / Seminarios"];
    const allYears = Array.from(new Set([...yearsOrder, ...Object.keys(currentPlanYears)]));

    editorYearsContainer.innerHTML = allYears.map(yearName => {
      const materias = currentPlanYears[yearName] || [];
      const count = materias.length;

      const materiasHtml = materias.map((mat, idx) => {
        const isComision = /\(Comisi[oó]n\s+[A-Z0-9]+\)/i.test(mat);
        return `
          <div class="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:border-brand-blue transition group">
            <div class="flex items-center gap-2 flex-1 min-w-0 pr-2">
              <span class="text-xs font-bold text-gray-800 truncate">${escapeHtml(mat)}</span>
              ${isComision ? `<span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.5 rounded">Comisión</span>` : ''}
            </div>
            <div class="flex items-center gap-1 opacity-90 group-hover:opacity-100 flex-shrink-0">
              <button type="button" onclick="editSubjectPrompt('${escapeQuote(yearName)}', ${idx})" title="Renombrar materia" class="p-1 text-gray-500 hover:text-brand-navy hover:bg-gray-200 rounded">
                ✏️
              </button>
              <button type="button" onclick="deleteSubject('${escapeQuote(yearName)}', ${idx})" title="Eliminar materia" class="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">
                🗑️
              </button>
            </div>
          </div>
        `;
      }).join('');

      const inputDomId = 'newMateriaInput_' + yearName.replace(/[^a-zA-Z0-9]/g, '');
      return `
        <div class="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <div class="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex justify-between items-center">
            <h5 class="text-xs sm:text-sm font-bold text-brand-navy flex items-center gap-2">
              <span>📅</span> ${escapeHtml(yearName)}
              <span class="text-[11px] font-normal text-gray-500 font-mono">(${count} materias)</span>
            </h5>
          </div>
          <div class="p-4 space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${materiasHtml || `<p class="text-xs text-gray-400 italic py-2 col-span-2">No hay materias registradas en este año.</p>`}
            </div>
            <div class="flex gap-2 pt-2 border-t border-gray-100">
              <input type="text" id="${inputDomId}" placeholder="Escribí el nombre de la materia (ej: Geometría I Comisión B)..." class="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-brand-blue font-medium">
              <button type="button" onclick="addSubjectToYear('${escapeQuote(yearName)}')" class="px-3.5 py-2 bg-brand-navy hover:bg-brand-blue text-white rounded-lg text-xs font-bold whitespace-nowrap transition">
                + Agregar
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Operaciones No-Code sobre Materias
  window.addSubjectToYear = function(yearName) {
    if (!activeEditorCarrera || !siteConfig) return;
    const inputDomId = 'newMateriaInput_' + yearName.replace(/[^a-zA-Z0-9]/g, '');
    const input = document.getElementById(inputDomId);
    if (!input) return;
    const name = input.value.trim();
    if (!name) return;

    const carreraObj = siteConfig.curriculum[activeEditorCarrera];
    if (!carreraObj.planes[activeEditorPlan]) carreraObj.planes[activeEditorPlan] = {};
    if (!carreraObj.planes[activeEditorPlan][yearName]) carreraObj.planes[activeEditorPlan][yearName] = [];

    carreraObj.planes[activeEditorPlan][yearName].push(name);
    setEditorDirty(true);
    input.value = '';
    renderEditorCarreraCurriculum();
  };

  window.editSubjectPrompt = function(yearName, index) {
    if (!activeEditorCarrera || !siteConfig) return;
    const list = siteConfig.curriculum[activeEditorCarrera].planes[activeEditorPlan][yearName];
    if (!list || list[index] === undefined) return;

    const current = list[index];
    const updated = prompt(`Modificar nombre de la materia o comisión:`, current);
    if (updated !== null && updated.trim() !== '' && updated.trim() !== current) {
      list[index] = updated.trim();
      setEditorDirty(true);
      renderEditorCarreraCurriculum();
    }
  };

  window.deleteSubject = function(yearName, index) {
    if (!activeEditorCarrera || !siteConfig) return;
    const list = siteConfig.curriculum[activeEditorCarrera].planes[activeEditorPlan][yearName];
    if (!list || list[index] === undefined) return;

    if (confirm(`¿Seguro que querés eliminar "${list[index]}"?`)) {
      list.splice(index, 1);
      setEditorDirty(true);
      renderEditorCarreraCurriculum();
    }
  };

  // Gestión de Planes de Estudio
  if (btnAddNewPlan) {
    btnAddNewPlan.addEventListener('click', () => {
      if (!activeEditorCarrera || !siteConfig) return;
      const planName = prompt('Nombre del nuevo plan de estudio (ej: Reforma 2026, Plan 2027):');
      if (!planName || !planName.trim()) return;
      const cleanPlanName = planName.trim();

      const carreraObj = siteConfig.curriculum[activeEditorCarrera];
      if (carreraObj.planes[cleanPlanName]) {
        alert('Ya existe un plan con ese nombre.');
        return;
      }

      const clone = confirm('¿Querés copiar las materias del plan actual para usarlas como base?\n\n(Aceptar = Copiar materias actuales, Cancelar = Empezar con plan vacío)');
      if (clone) {
        carreraObj.planes[cleanPlanName] = JSON.parse(JSON.stringify(carreraObj.planes[activeEditorPlan] || {}));
      } else {
        carreraObj.planes[cleanPlanName] = {
          "1° Año": [], "2° Año": [], "3° Año": [], "4° Año": [], "5° Año": [], "Tramo Superior / Seminarios": []
        };
      }

      activeEditorPlan = cleanPlanName;
      setEditorDirty(true);
      renderEditorCarreraCurriculum();
    });
  }

  if (btnRenamePlan) {
    btnRenamePlan.addEventListener('click', () => {
      if (!activeEditorCarrera || !siteConfig) return;
      const newName = prompt('Nuevo nombre para este plan de estudio:', activeEditorPlan);
      if (!newName || !newName.trim() || newName.trim() === activeEditorPlan) return;
      const clean = newName.trim();

      const carreraObj = siteConfig.curriculum[activeEditorCarrera];
      if (carreraObj.planes[clean]) {
        alert('Ya existe un plan con ese nombre.');
        return;
      }

      carreraObj.planes[clean] = carreraObj.planes[activeEditorPlan];
      delete carreraObj.planes[activeEditorPlan];
      activeEditorPlan = clean;
      setEditorDirty(true);
      renderEditorCarreraCurriculum();
    });
  }

  if (btnDeletePlan) {
    btnDeletePlan.addEventListener('click', () => {
      if (!activeEditorCarrera || !siteConfig) return;
      const carreraObj = siteConfig.curriculum[activeEditorCarrera];
      const planKeys = Object.keys(carreraObj.planes);
      if (planKeys.length <= 1) {
        alert('No podés eliminar este plan: cada carrera debe tener al menos un plan de estudios activo.');
        return;
      }

      if (confirm(`¿Seguro que deseás eliminar por completo el plan "${activeEditorPlan}"?`)) {
        delete carreraObj.planes[activeEditorPlan];
        activeEditorPlan = Object.keys(carreraObj.planes)[0];
        setEditorDirty(true);
        renderEditorCarreraCurriculum();
      }
    });
  }

  // Gestión de Herramientas
  function renderEditorTools() {
    if (!editorToolsList || !siteConfig || !siteConfig.tools_config) return;
    const tools = siteConfig.tools_config;

    const toolKeys = Object.keys(tools);
    editorToolsList.innerHTML = toolKeys.map(k => {
      const t = tools[k];
      return `
        <div class="p-4 rounded-xl border ${t.visible ? 'border-gray-200 bg-white' : 'border-dashed border-gray-300 bg-gray-50 opacity-80'} transition space-y-3">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="text-xl">${t.id === 'comodato' ? '💻' : t.id === 'becas' ? '🎟️' : t.id === 'aulas' ? '🏫' : t.id === 'mapas' ? '🗺️' : '📜'}</span>
              <strong class="text-sm text-gray-800">${escapeHtml(t.nombre)}</strong>
              <span class="text-[10px] font-mono text-gray-400">(${t.id})</span>
            </div>
            <label class="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold">
              <input type="checkbox" onchange="toggleToolVisibility('${t.id}', this.checked)" ${t.visible ? 'checked' : ''} class="w-4 h-4 text-emerald-600 rounded">
              <span class="${t.visible ? 'text-emerald-700' : 'text-gray-500'}">${t.visible ? '✓ Visible en la web' : '✕ Oculta'}</span>
            </label>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label class="block text-[11px] font-bold text-gray-500 uppercase mb-1">Título de la Tarjeta</label>
              <input type="text" value="${escapeHtml(t.nombre)}" onchange="updateToolField('${t.id}', 'nombre', this.value)" class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-brand-blue outline-none">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-gray-500 uppercase mb-1">Subtítulo / Bajada Descriptiva</label>
              <input type="text" value="${escapeHtml(t.subtitulo || '')}" onchange="updateToolField('${t.id}', 'subtitulo', this.value)" class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-brand-blue outline-none">
            </div>
          ${renderModalContentEditor(t)}
        </div>
      `;
    }).join('');
  }

  const openToolModals = new Set();
  window.trackToolModalToggle = function(toolId, isOpen) {
    if (isOpen) openToolModals.add(toolId);
    else openToolModals.delete(toolId);
  };

  function renderModalContentEditor(tool) {
    const isOpenAttr = openToolModals.has(tool.id) ? 'open' : '';

    if (tool.id === 'comodato') {
      const mc = tool.modal_content || {};
      const pasosText = Array.isArray(mc.pasos) ? mc.pasos.join('\n') : (mc.pasos || '');
      return `
        <details ${isOpenAttr} ontoggle="trackToolModalToggle('comodato', this.open)" class="mt-3 border-t border-gray-100 pt-3">
          <summary class="text-xs font-bold text-brand-blue cursor-pointer hover:underline select-none flex items-center gap-1.5 py-1">
            <span>📝 Editar Contenido Interno de la Ventana (Requisitos y Modelo de Carta)</span>
          </summary>
          <div class="mt-3 space-y-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div>
              <label class="block text-[11px] font-bold text-gray-600 mb-1">Título de la Ventana</label>
              <input type="text" value="${escapeHtml(mc.titulo || 'Préstamo de Computadoras en Comodato')}" onchange="updateComodatoField('titulo', this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-brand-blue outline-none">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-gray-600 mb-1">Bajada Descriptiva</label>
              <input type="text" value="${escapeHtml(mc.descripcion || '')}" onchange="updateComodatoField('descripcion', this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-brand-blue outline-none">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-gray-600 mb-1">Requisitos y Pasos para Solicitarla (un paso por renglón)</label>
              <textarea rows="4" onchange="updateComodatoPasos(this.value)" class="w-full p-2 border border-gray-300 rounded text-xs leading-relaxed focus:ring-2 focus:ring-brand-blue outline-none">${escapeHtml(pasosText)}</textarea>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-gray-600 mb-1">Modelo de Carta Formal para Presentar en Rectorado</label>
              <textarea rows="6" onchange="updateComodatoField('modeloCarta', this.value)" class="w-full p-2 border border-gray-300 rounded text-xs font-mono leading-relaxed focus:ring-2 focus:ring-brand-blue outline-none">${escapeHtml(mc.modeloCarta || '')}</textarea>
            </div>
          </div>
        </details>
      `;
    }

    if (tool.id === 'normativas') {
      const items = Array.isArray(tool.modal_content) ? tool.modal_content : [];
      return `
        <details ${isOpenAttr} ontoggle="trackToolModalToggle('normativas', this.open)" class="mt-3 border-t border-gray-100 pt-3">
          <summary class="text-xs font-bold text-brand-blue cursor-pointer hover:underline select-none flex items-center gap-1.5 py-1">
            <span>📝 Editar Reglamentos y Resoluciones Oficiales (${items.length} documentos)</span>
          </summary>
          <div class="mt-3 space-y-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div class="space-y-2.5">
              ${items.map((norm, idx) => `
                <div class="bg-white p-3 rounded-lg border border-gray-200 space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-[11px] font-bold text-brand-navy">Documento #${idx + 1}</span>
                    <button type="button" onclick="deleteNormativaItem(${idx})" class="text-xs text-red-600 hover:text-red-800 font-bold">🗑️ Eliminar</button>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input type="text" placeholder="Título..." value="${escapeHtml(norm.titulo || '')}" onchange="updateNormativaField(${idx}, 'titulo', this.value)" class="px-2.5 py-1.5 border border-gray-300 rounded text-xs font-semibold">
                    <input type="text" placeholder="Enlace oficial (URL)..." value="${escapeHtml(norm.link || '')}" onchange="updateNormativaField(${idx}, 'link', this.value)" class="px-2.5 py-1.5 border border-gray-300 rounded text-xs font-mono">
                  </div>
                  <textarea rows="2" placeholder="Descripción breve..." onchange="updateNormativaField(${idx}, 'descripcion', this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs">${escapeHtml(norm.descripcion || '')}</textarea>
                </div>
              `).join('')}
            </div>
            <button type="button" onclick="addNormativaItem()" class="px-3 py-1.5 bg-brand-lightBlue hover:bg-sky-100 text-brand-blue text-xs font-bold rounded-lg border border-sky-200 transition">
              + Agregar Nuevo Reglamento / Documento
            </button>
          </div>
        </details>
      `;
    }

    if (tool.id === 'becas') {
      const items = Array.isArray(tool.modal_content) ? tool.modal_content : [];
      return `
        <details ${isOpenAttr} ontoggle="trackToolModalToggle('becas', this.open)" class="mt-3 border-t border-gray-100 pt-3">
          <summary class="text-xs font-bold text-brand-blue cursor-pointer hover:underline select-none flex items-center gap-1.5 py-1">
            <span>📝 Editar Becas y Beneficios Estudiantiles (${items.length} beneficios)</span>
          </summary>
          <div class="mt-3 space-y-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div id="becasListEditor" class="space-y-2.5">
              ${items.map((beca, idx) => `
                <div class="bg-white p-3 rounded-lg border border-gray-200 space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-[11px] font-bold text-brand-navy">Beneficio #${idx + 1}</span>
                    <button type="button" onclick="deleteBecaItem(${idx})" class="text-xs text-red-600 hover:text-red-800 font-bold">🗑️ Eliminar</button>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input type="text" placeholder="Nombre de la beca..." value="${escapeHtml(beca.nombre || '')}" onchange="updateBecaField(${idx}, 'nombre', this.value)" class="px-2.5 py-1.5 border border-gray-300 rounded text-xs font-semibold">
                    <input type="text" placeholder="Link de inscripción (URL)..." value="${escapeHtml(beca.link || '')}" onchange="updateBecaField(${idx}, 'link', this.value)" class="px-2.5 py-1.5 border border-gray-300 rounded text-xs font-mono">
                  </div>
                  <textarea rows="2" placeholder="Descripción breve..." onchange="updateBecaField(${idx}, 'descripcion', this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs">${escapeHtml(beca.descripcion || '')}</textarea>
                  <div>
                    <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Instructivo paso a paso (un punto por renglón)</label>
                    <textarea rows="3" onchange="updateBecaPasos(${idx}, this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs leading-relaxed">${escapeHtml((beca.pasos || []).join('\n'))}</textarea>
                  </div>
                </div>
              `).join('')}
            </div>
            <button type="button" onclick="addBecaItem()" class="px-3 py-1.5 bg-brand-lightBlue hover:bg-sky-100 text-brand-blue text-xs font-bold rounded-lg border border-sky-200 transition">
              + Agregar Nueva Beca / Beneficio
            </button>
          </div>
        </details>
      `;
    }

    if (tool.id === 'planes') {
      const mc = tool.modal_content || {};
      return `
        <details ${isOpenAttr} ontoggle="trackToolModalToggle('planes', this.open)" class="mt-3 border-t border-gray-100 pt-3">
          <summary class="text-xs font-bold text-brand-blue cursor-pointer hover:underline select-none flex items-center gap-1.5 py-1">
            <span>📝 Editar Información de Planes y Departamentos</span>
          </summary>
          <div class="mt-3 space-y-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div>
              <label class="block text-[11px] font-bold text-gray-600 mb-1">Texto Explicativo en la Ventana</label>
              <input type="text" value="${escapeHtml(mc.aviso || 'Acceso directo a las páginas oficiales de cada Departamento del Joaquín V. González y sus planes de estudio:')}" onchange="updatePlanesField('aviso', this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-brand-blue outline-none">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-gray-600 mb-1">Enlace General a Departamentos del JVG (URL)</label>
              <input type="text" value="${escapeHtml(mc.link_general || 'http://institutojvgonzalez.buenosaires.edu.ar/departamentos/')}" onchange="updatePlanesField('link_general', this.value)" class="w-full px-2.5 py-1.5 border border-gray-300 rounded text-xs font-mono focus:ring-2 focus:ring-brand-blue outline-none">
            </div>
          </div>
        </details>
      `;
    }

    return '';
  }

  window.toggleToolVisibility = function(toolId, isVisible) {
    if (!siteConfig || !siteConfig.tools_config || !siteConfig.tools_config[toolId]) return;
    siteConfig.tools_config[toolId].visible = isVisible;
    setEditorDirty(true);
    renderEditorTools();
  };

  window.updateToolField = function(toolId, field, value) {
    if (!siteConfig || !siteConfig.tools_config || !siteConfig.tools_config[toolId]) return;
    siteConfig.tools_config[toolId][field] = value.trim();
    setEditorDirty(true);
  };

  window.updateComodatoField = function(field, val) {
    if (!siteConfig?.tools_config?.comodato) return;
    if (!siteConfig.tools_config.comodato.modal_content) siteConfig.tools_config.comodato.modal_content = {};
    siteConfig.tools_config.comodato.modal_content[field] = val.trim();
    setEditorDirty(true);
  };

  window.updateComodatoPasos = function(val) {
    if (!siteConfig?.tools_config?.comodato) return;
    if (!siteConfig.tools_config.comodato.modal_content) siteConfig.tools_config.comodato.modal_content = {};
    siteConfig.tools_config.comodato.modal_content.pasos = val.split('\n').map(l => l.trim()).filter(Boolean);
    setEditorDirty(true);
  };

  window.updateNormativaField = function(idx, field, val) {
    if (!siteConfig?.tools_config?.normativas) return;
    if (!Array.isArray(siteConfig.tools_config.normativas.modal_content)) siteConfig.tools_config.normativas.modal_content = [];
    if (siteConfig.tools_config.normativas.modal_content[idx]) {
      siteConfig.tools_config.normativas.modal_content[idx][field] = val.trim();
      setEditorDirty(true);
    }
  };

  window.addNormativaItem = function() {
    if (!siteConfig?.tools_config?.normativas) return;
    if (!Array.isArray(siteConfig.tools_config.normativas.modal_content)) siteConfig.tools_config.normativas.modal_content = [];
    openToolModals.add('normativas');
    siteConfig.tools_config.normativas.modal_content.push({
      titulo: 'Nueva Normativa / Resolución',
      descripcion: 'Descripción del reglamento institucional.',
      link: 'http://institutojvgonzalez.buenosaires.edu.ar/',
      categoria: 'Institucional'
    });
    setEditorDirty(true);
    renderEditorTools();
  };

  window.deleteNormativaItem = function(idx) {
    if (!siteConfig?.tools_config?.normativas) return;
    if (!Array.isArray(siteConfig.tools_config.normativas.modal_content)) return;
    openToolModals.add('normativas');
    siteConfig.tools_config.normativas.modal_content.splice(idx, 1);
    setEditorDirty(true);
    renderEditorTools();
  };

  window.updateBecaField = function(idx, field, val) {
    if (!siteConfig?.tools_config?.becas) return;
    if (!Array.isArray(siteConfig.tools_config.becas.modal_content)) siteConfig.tools_config.becas.modal_content = [];
    if (siteConfig.tools_config.becas.modal_content[idx]) {
      siteConfig.tools_config.becas.modal_content[idx][field] = val.trim();
      setEditorDirty(true);
    }
  };

  window.updateBecaPasos = function(idx, val) {
    if (!siteConfig?.tools_config?.becas) return;
    if (!Array.isArray(siteConfig.tools_config.becas.modal_content)) siteConfig.tools_config.becas.modal_content = [];
    if (siteConfig.tools_config.becas.modal_content[idx]) {
      siteConfig.tools_config.becas.modal_content[idx].pasos = val.split('\n').map(l => l.trim()).filter(Boolean);
      setEditorDirty(true);
    }
  };

  window.addBecaItem = function() {
    if (!siteConfig?.tools_config?.becas) return;
    if (!Array.isArray(siteConfig.tools_config.becas.modal_content)) siteConfig.tools_config.becas.modal_content = [];
    openToolModals.add('becas');
    siteConfig.tools_config.becas.modal_content.push({
      nombre: 'Nueva Beca o Beneficio',
      descripcion: 'Descripción del beneficio y requisitos.',
      pasos: ['Requisito: ser estudiante regular del nivel superior.', 'Completar solicitud en el portal correspondiente.'],
      link: 'https://'
    });
    setEditorDirty(true);
    renderEditorTools();
  };

  window.deleteBecaItem = function(idx) {
    if (!siteConfig?.tools_config?.becas) return;
    if (!Array.isArray(siteConfig.tools_config.becas.modal_content)) return;
    openToolModals.add('becas');
    siteConfig.tools_config.becas.modal_content.splice(idx, 1);
    setEditorDirty(true);
    renderEditorTools();
  };

  window.updatePlanesField = function(field, val) {
    if (!siteConfig?.tools_config?.planes) return;
    if (!siteConfig.tools_config.planes.modal_content) siteConfig.tools_config.planes.modal_content = {};
    siteConfig.tools_config.planes.modal_content[field] = val.trim();
    setEditorDirty(true);
  };

  // Previsualizador en Vivo
  if (btnPreviewMobile) {
    btnPreviewMobile.addEventListener('click', () => {
      previewDevice = 'mobile';
      btnPreviewMobile.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition bg-white shadow-sm text-brand-navy';
      btnPreviewDesktop.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition text-gray-600 hover:text-brand-navy';
      if (previewFrameWrapper) previewFrameWrapper.className = 'w-full max-w-[390px] transition-all duration-300';
      if (previewDeviceMock) previewDeviceMock.className = 'bg-white rounded-[32px] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col min-h-[600px]';
      if (previewNotch) previewNotch.classList.remove('hidden');
      renderLivePreview();
    });
  }

  if (btnPreviewDesktop) {
    btnPreviewDesktop.addEventListener('click', () => {
      previewDevice = 'desktop';
      btnPreviewDesktop.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition bg-white shadow-sm text-brand-navy';
      btnPreviewMobile.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition text-gray-600 hover:text-brand-navy';
      if (previewFrameWrapper) previewFrameWrapper.className = 'w-full max-w-5xl transition-all duration-300';
      if (previewDeviceMock) previewDeviceMock.className = 'bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden flex flex-col min-h-[500px]';
      if (previewNotch) previewNotch.classList.add('hidden');
      renderLivePreview();
    });
  }

  function renderLivePreview() {
    if (!previewContentBody || !siteConfig) return;
    const tools = siteConfig.tools_config || {};
    const carrera = activeEditorCarrera || Object.keys(siteConfig.curriculum || {})[0] || "Profesorado de Matemática";
    const plan = activeEditorPlan || "Plan Vigente";
    const years = (siteConfig.curriculum[carrera]?.planes[plan]) || {};

    let toolsCardsHtml = Object.keys(tools).filter(k => tools[k].visible).map(k => {
      const t = tools[k];
      return `
        <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
          <span class="text-xl bg-blue-50 p-2 rounded-lg">${k === 'comodato' ? '💻' : k === 'becas' ? '🎟️' : k === 'aulas' ? '🏫' : '🗺️'}</span>
          <div class="flex-1 min-w-0">
            <h6 class="text-xs font-bold text-slate-800 truncate">${escapeHtml(t.nombre)}</h6>
            <p class="text-[10px] text-slate-500 line-clamp-1">${escapeHtml(t.subtitulo || '')}</p>
          </div>
        </div>
      `;
    }).join('');

    let yearsSampleHtml = Object.keys(years).slice(0, 2).map(y => {
      const mats = years[y] || [];
      return `
        <div class="bg-white p-3 rounded-xl border border-slate-200">
          <strong class="text-[11px] text-brand-navy block mb-2 font-bold">${escapeHtml(y)} (${mats.length} materias)</strong>
          <div class="flex flex-wrap gap-1.5">
            ${mats.slice(0, 6).map(m => `<span class="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium">${escapeHtml(m)}</span>`).join('')}
            ${mats.length > 6 ? `<span class="text-[10px] text-slate-400 italic">+${mats.length - 6} más</span>` : ''}
          </div>
        </div>
      `;
    }).join('');

    previewContentBody.innerHTML = `
      <div class="space-y-4">
        <div class="bg-brand-navy text-white p-4 rounded-xl shadow">
          <span class="text-xs font-serif font-bold">AltilloJVG <span class="text-brand-gold italic">Estudiantes</span></span>
          <p class="text-[10px] text-slate-300 mt-0.5">Vista previa en vivo de las herramientas y materias configuradas</p>
        </div>

        <div class="space-y-2">
          <div class="flex justify-between items-center px-1">
            <span class="text-[11px] font-bold text-slate-700 uppercase">Herramientas Activas (${Object.keys(tools).filter(k => tools[k].visible).length})</span>
          </div>
          <div class="grid ${previewDevice === 'desktop' ? 'grid-cols-3' : 'grid-cols-1'} gap-2">
            ${toolsCardsHtml || `<p class="text-xs text-red-500 p-2">No hay herramientas activas visibles.</p>`}
          </div>
        </div>

        <div class="space-y-2 pt-2">
          <div class="flex justify-between items-center px-1">
            <span class="text-[11px] font-bold text-slate-700 uppercase">Explorador: ${escapeHtml(carrera)}</span>
            <span class="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded-full">${escapeHtml(plan)}</span>
          </div>
          <div class="space-y-2">
            ${yearsSampleHtml || `<p class="text-xs text-slate-400">Sin materias cargadas.</p>`}
          </div>
        </div>
      </div>
    `;
  }

  // Guardar y Publicar
  if (btnSaveSiteConfig) {
    btnSaveSiteConfig.addEventListener('click', async () => {
      if (!adminPassword) {
        alert('Debés ingresar la contraseña de administrador para publicar cambios.');
        return;
      }

      btnSaveSiteConfig.disabled = true;
      btnSaveSiteConfig.textContent = '⏳ Publicando...';

      try {
        const res = await fetch('/api/site_config', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-password': adminPassword
          },
          body: JSON.stringify(siteConfig)
        });

        if (res.ok) {
          localStorage.setItem('altillojvg_site_config', JSON.stringify(siteConfig));
          setEditorDirty(false);
          alert('✅ ¡Cambios guardados y publicados exitosamente en la web!');
        } else {
          const err = await res.json();
          alert('⚠️ Error: ' + (err.error || 'No se pudo guardar la configuración.'));
        }
      } catch (err) {
        console.warn('Fallback guardado local:', err);
        localStorage.setItem('altillojvg_site_config', JSON.stringify(siteConfig));
        setEditorDirty(false);
        alert('⚠️ Guardado localmente en este navegador. Se sincronizará al haber conexión con el servidor.');
      } finally {
        btnSaveSiteConfig.disabled = false;
        btnSaveSiteConfig.textContent = '💾 Guardar y Publicar en la Web';
      }
    });
  }

  // Restablecer Valores Iniciales
  if (btnResetSiteConfig) {
    btnResetSiteConfig.addEventListener('click', () => {
      if (confirm('¿Seguro que deseás restablecer todas las materias y herramientas a los valores originales de fábrica? Se perderán las modificaciones no guardadas.')) {
        localStorage.removeItem('altillojvg_site_config');
        siteConfig = null;
        loadSiteEditor();
        setEditorDirty(true);
      }
    });
  }

  function escapeQuote(str) {
    return String(str || '').replace(/'/g, "\\'");
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
