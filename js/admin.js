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

  // Contenedores de Sección
  const sectionSubmissions = document.getElementById('sectionSubmissions');
  const sectionApuntes = document.getElementById('sectionApuntes');
  const sectionNoticias = document.getElementById('sectionNoticias');

  // Badges y Contadores
  const pendingBadgeCount = document.getElementById('pendingBadgeCount');
  const pendingHeaderBadge = document.getElementById('pendingHeaderBadge');
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
  let adminPassword = localStorage.getItem('altillojvg_admin_pass') || '';

  // ==========================================================================
  // CONMUTACIÓN DE PESTAÑAS (TABS)
  // ==========================================================================
  function switchTab(tabName) {
    // Resetear estilos de los tres botones
    [tabSubmissions, tabApuntes, tabNoticias].forEach(btn => {
      if (btn) {
        btn.classList.remove('border-brand-navy', 'text-brand-navy');
        btn.classList.add('border-transparent', 'text-gray-500');
      }
    });

    // Ocultar todas las secciones
    if (sectionSubmissions) sectionSubmissions.classList.add('hidden');
    if (sectionApuntes) sectionApuntes.classList.add('hidden');
    if (sectionNoticias) sectionNoticias.classList.add('hidden');

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
    }
  }

  // Registrar Clicks en Pestañas
  if (tabSubmissions) tabSubmissions.addEventListener('click', () => switchTab('submissions'));
  if (tabApuntes) tabApuntes.addEventListener('click', () => switchTab('apuntes'));
  if (tabNoticias) tabNoticias.addEventListener('click', () => switchTab('noticias'));

  // ==========================================================================
  // AUTENTICACIÓN Y SESIÓN
  // ==========================================================================
  function showLogin() {
    if (loginSection) loginSection.classList.remove('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
  }

  function showDashboard() {
    if (loginSection) loginSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.remove('hidden');
    populateCareerFilter();
    switchTab('submissions');
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
  // SECCIÓN 3: TABLÓN DE NOTICIAS
  // ==========================================================================
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
        <div class="p-6 flex justify-between items-start gap-4 hover:bg-gray-50 transition">
          <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeClass}">
                ${item.categoria}
              </span>
              ${isPinned ? '<span class="bg-amber-50 text-amber-800 text-xs px-2 py-0.5 rounded-full font-bold border border-amber-300">📌 Fijado</span>' : ''}
              <span class="text-xs text-gray-400">${fecha}</span>
            </div>
            <h4 class="text-base font-bold text-brand-navy">${item.titulo}</h4>
            <p class="text-sm text-gray-600 whitespace-pre-line leading-relaxed">${item.contenido}</p>
            <div class="text-xs text-gray-400 pt-1 font-medium">Publicado por: ${item.autor}</div>
          </div>
          <button onclick="deleteNewsItem(${item.id})" class="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold transition">
            🗑️ Eliminar
          </button>
        </div>
      `;
    });
    if (newsListContainer) newsListContainer.innerHTML = html;
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

  function escapeQuote(str) {
    return String(str || '').replace(/'/g, "\\'");
  }
});
