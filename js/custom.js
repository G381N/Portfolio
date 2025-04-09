document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // Initialize Typed.js
    new Typed('.typed', {
        strings: ['Cybersecurity Enthusiast', 'Web Developer', 'Tech Explorer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
