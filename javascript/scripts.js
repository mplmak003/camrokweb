document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
});