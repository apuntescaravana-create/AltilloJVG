/**
 * AltilloJVG - Main UI Interactions & Category Filtering Script
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const uploadModal = document.getElementById('uploadModal');
  const openUploadModalBtn = document.getElementById('openUploadModalBtn');
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');

  // Open Modal
  if (openUploadModalBtn && uploadModal) {
    openUploadModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      uploadModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close Modal
  if (closeUploadModalBtn && uploadModal) {
    closeUploadModalBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  if (uploadModal) {
    uploadModal.addEventListener('click', (e) => {
      if (e.target === uploadModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && uploadModal && uploadModal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    if (uploadModal) {
      uploadModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Filter Tabs for Carreras
  const filterTabs = document.querySelectorAll('.filter-tab');
  const carreraCards = document.querySelectorAll('.carrera-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      carreraCards.forEach(card => {
        const cardDept = card.getAttribute('data-dept');
        if (filterValue === 'all' || cardDept === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
