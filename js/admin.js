/**
 * AltilloJVG - Controlador del Panel de Administración
 */

document.addEventListener('DOMContentLoaded', () => {
  const loginSection = document.getElementById('loginSection');
  const dashboardSection = document.getElementById('dashboardSection');
  const loginForm = document.getElementById('loginForm');
  const adminPasswordInput = document.getElementById('adminPassword');
  
  const filterCarrera = document.getElementById('filterCarrera');
  const filterAnio = document.getElementById('filterAnio');
  const filterTipo = document.getElementById('filterTipo');
  const searchKeyword = document.getElementById('searchKeyword');
  
  const materialsTableBody = document.getElementById('materialsTableBody');
  const totalRecordsBadge = document.getElementById('totalRecordsBadge');
  
  const logoutBtn = document.getElementById('logoutBtn');
  
  // Modal Edición
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

  let allMaterials = [];
  let adminPassword = localStorage.getItem('altillojvg_admin_pass') || '';

  // 1. Verificar sesión activa al cargar
  if (adminPassword) {
    showDashboard();
  } else {
    showLogin();
  }

  // 2. Manejo de Login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    adminPassword = adminPasswordInput.value.trim();
    if (!adminPassword) return;

    const ok = await testConnectionAndLoad();
    if (ok) {
      localStorage.setItem('altillojvg_admin_pass', adminPassword);
      showDashboard();
    } else {
      alert('⚠️ Contraseña incorrecta o error de conexión con el servidor.');
      adminPassword = '';
      adminPasswordInput.value = '';
    }
  });

  // 3. Manejo de Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('altillojvg_admin_pass');
    adminPassword = '';
    showLogin();
  });

  // 4. Mostrar Secciones
  function showLogin() {
    loginSection.classList.remove('hidden');
    dashboardSection.classList.add('hidden');
  }

  function showDashboard() {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    
    // Inicializar filtros y cargar datos
    populateCareerFilter();
    loadMaterials();
  }

  // 5. Poblar filtro de carreras desde la base de datos de aulas
  function populateCareerFilter() {
    if (typeof AULAS_DATABASE !== 'undefined') {
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

  // 6. Testear conexión cargando datos
  async function testConnectionAndLoad() {
    try {
      const res = await fetch('/api/materials', {
        headers: {
          'x-admin-password': adminPassword
        }
      });
      if (res.status === 401) return false;
      if (!res.ok) return false;
      allMaterials = await res.json();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  // 7. Cargar materiales
  async function loadMaterials() {
    materialsTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-12 text-center text-gray-500 font-medium">
          Cargando apuntes desde Supabase...
        </td>
      </tr>
    `;
    totalRecordsBadge.textContent = "Cargando...";

    try {
      const res = await fetch('/api/materials', {
        headers: {
          'x-admin-password': adminPassword
        }
      });
      
      if (res.status === 401) {
        alert("⚠️ Sesión expirada o contraseña inválida.");
        logoutBtn.click();
        return;
      }
      
      if (!res.ok) throw new Error('Error al obtener materiales.');
      
      allMaterials = await res.json();
      renderTable();
    } catch (err) {
      console.error(err);
      materialsTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="px-6 py-12 text-center text-red-500 font-bold">
            ⚠️ Error al conectar con la base de datos.
          </td>
        </tr>
      `;
      totalRecordsBadge.textContent = "Error";
    }
  }

  // 8. Renderizar Tabla aplicando filtros locales
  function renderTable() {
    const selectedCarrera = filterCarrera.value;
    const selectedAnio = filterAnio.value;
    const selectedTipo = filterTipo.value;
    const keyword = searchKeyword.value.toLowerCase().trim();

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

    totalRecordsBadge.textContent = `${filtered.length} apuntes encontrados`;

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

  // Vincular eventos de filtros
  filterCarrera.addEventListener('change', renderTable);
  filterAnio.addEventListener('change', renderTable);
  filterTipo.addEventListener('change', renderTable);
  searchKeyword.addEventListener('input', renderTable);

  // 9. Eliminar material
  window.deleteMaterial = async function(id) {
    const item = allMaterials.find(m => m.id === id);
    if (!item) return;

    if (!confirm(`¿Estás seguro de que querés borrar permanentemente el apunte "${item.nombre}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/materials?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
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
  };

  // 10. Abrir modal edición
  window.openEditModal = function(id) {
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
  };

  // Cerrar modal edición
  function closeEditModal() {
    editModal.classList.add('hidden');
    editForm.reset();
  }

  closeEditModalBtn.addEventListener('click', closeEditModal);
  cancelEditBtn.addEventListener('click', closeEditModal);
  
  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeEditModal();
  });

  // Guardar edición
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
});
