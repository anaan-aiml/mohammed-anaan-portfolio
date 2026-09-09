// Shared header behaviour: mark the current page in both navs, run the mobile
// menu. Pages are real documents now, so the links are plain hrefs — this only
// handles the active state and the burger.

const root = document.documentElement;
const page = document.body.dataset.page || 'home';

// active state, stagger index
document.querySelectorAll('.hdr__nav li, .menu li').forEach((li, i) => {
  li.style.setProperty('--i', i % 5);
});
document.querySelectorAll('a[data-nav]').forEach((a) => {
  if (a.dataset.target === page) a.setAttribute('aria-current', 'page');
});

// mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
function setMenu(open) {
  if (!burger) return;
  burger.setAttribute('aria-expanded', String(open));
  root.classList.toggle('is-menu', open);
  if (open) menu.hidden = false;
  else setTimeout(() => { if (!root.classList.contains('is-menu')) menu.hidden = true; }, 450);
}
burger?.addEventListener('click', () =>
  setMenu(burger.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && root.classList.contains('is-menu')) setMenu(false);
});
