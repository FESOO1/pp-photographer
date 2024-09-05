const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn-js');
    nav.classList.toggle('navbar-js');
    body.classList.toggle('body-js');
});