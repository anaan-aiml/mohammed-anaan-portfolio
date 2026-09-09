// The profile card popup on the About page.

const dlg = document.getElementById('cardDialog');
if (dlg) {
  document.querySelectorAll('[data-open-card]').forEach((b) =>
    b.addEventListener('click', () => dlg.showModal()));
  dlg.querySelector('[data-close-card]')?.addEventListener('click', () => dlg.close());
  // click the backdrop (outside the card) to dismiss
  dlg.addEventListener('click', (e) => {
    const r = dlg.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right
      && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) dlg.close();
  });
}
