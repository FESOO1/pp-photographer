const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn-js');
    nav.classList.toggle('navbar-js');
});