const root = document.documentElement;
const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.dataset.theme = savedTheme;

themeToggle.textContent = root.dataset.theme === 'light' ? '☾' : '☀';

themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  localStorage.setItem('portfolio-theme', next);
  themeToggle.textContent = next === 'light' ? '☾' : '☀';
});

menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
