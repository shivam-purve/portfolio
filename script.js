/* Dark‑mode toggle */
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  themeBtn.innerHTML =
    root.dataset.theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
});

/* Projects filter */
const filters = document.querySelectorAll('.filter button');
const cards = document.querySelectorAll('.project-grid .card');

filters.forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.filter .active').classList.remove('active');
  btn.classList.add('active');

  const tag = btn.dataset.filter;
  cards.forEach(c => c.style.display =
    tag === 'all' || c.classList.contains(tag) ? 'block' : 'none');
}));