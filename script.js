(function () {
    'use strict';

    var header = document.getElementById('header');
    var burgerBtn = document.getElementById('burger-btn');
    var overlay = document.getElementById('header-overlay');

    function openMenu() {
        header.classList.add('header--open');
        burgerBtn.setAttribute('aria-expanded', 'true');
        burgerBtn.setAttribute('aria-label', 'Fermer le menu');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        header.classList.remove('header--open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
        document.body.style.overflow = '';
    }

    if (burgerBtn) {
        burgerBtn.addEventListener('click', function () {
            if (header.classList.contains('header--open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    document.querySelectorAll('.header__menu a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
})();
