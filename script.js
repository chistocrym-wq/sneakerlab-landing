(() => {
  'use strict';

  const dialog = document.getElementById('maintenance-dialog');
  const okButton = document.getElementById('dialog-ok');
  let lastOpener = null;

  if (!dialog || !okButton) return;

  function showMaintenance(event) {
    lastOpener = event.currentTarget;
    if (dialog.open) return;
    dialog.showModal();
    okButton.focus();
  }

  document.querySelectorAll('button[data-maintenance]').forEach(button => {
    button.addEventListener('click', showMaintenance);
  });

  okButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (lastOpener && lastOpener.isConnected) lastOpener.focus({ preventScroll: true });
  });
})();
