const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('show-menu');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('shadow-header', window.scrollY > 40);
});
