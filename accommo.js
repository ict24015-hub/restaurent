document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.reveal-element');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // when show 15% of screen
    };

    const roomObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // for Smoothness
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        roomObserver.observe(element);
    });
});