var typed = new Typed(".text", {
    strings: ["FullStack Developer", "Web Developer", "Laravel Developer"],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 100,
    loop: true
});




// scripts.js
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});