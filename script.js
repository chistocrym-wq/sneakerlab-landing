(() => {
  'use strict';

  function initialize() {
    const dialog = document.getElementById('maintenance-modal');
    const okButton = document.getElementById('modal-ok');
    if (!dialog || !okButton) return;

    function openMaintenance() {
      if (dialog.open) return;
      dialog.showModal();
      okButton.focus();
    }

    document.querySelectorAll('[data-maintenance]').forEach(button => {
      button.addEventListener('click', openMaintenance);
    });
    okButton.addEventListener('click', () => dialog.close());

    // Native <dialog> supports Escape and traps keyboard focus.
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
