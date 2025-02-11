let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > lastScrollY) {
        navbar.style.top = '-80px'; // 隐藏导航栏
    } else {
        navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
});

// JavaScript to handle hamburger menu toggle
document.getElementById('menu-button').addEventListener('click', function() {
        var menu = document.getElementById('mobile-menu');
        menu.classList.toggle('active');
    });