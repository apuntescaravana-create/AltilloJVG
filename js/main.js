/**
 * AltilloJVG - Main UI Interactions Script
 * Instituto Superior del Profesorado "Joaquín V. González"
 */

document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const uploadModal = document.getElementById('uploadModal');
  const openUploadModalBtn = document.getElementById('openUploadModalBtn');
  const mobileUploadBtn = document.getElementById('mobileUploadBtn');
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');

  // Open Modal (Desktop & Mobile buttons)
  [openUploadModalBtn, mobileUploadBtn].forEach(btn => {
    if (btn && uploadModal) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        uploadModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  });

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
});
