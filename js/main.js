/**
 * AltilloJVG - Main UI Interactions Script
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
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  }

  // Close Modal
  if (closeUploadModalBtn && uploadModal) {
    closeUploadModalBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  // Close Modal clicking on backdrop
  if (uploadModal) {
    uploadModal.addEventListener('click', (e) => {
      if (e.target === uploadModal) {
        closeModal();
      }
    });
  }

  // Escape Key to close modal
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

  // Mobile Accordion Toggle for Carreras
  const toggleCarrerasBtn = document.getElementById('toggleCarrerasBtn');
  const carrerasGrid = document.getElementById('carrerasGrid');

  if (toggleCarrerasBtn && carrerasGrid) {
    toggleCarrerasBtn.addEventListener('click', () => {
      const isExpanded = carrerasGrid.style.display !== 'none';
      carrerasGrid.style.display = isExpanded ? 'none' : 'grid';
      toggleCarrerasBtn.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }
});
