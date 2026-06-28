document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.reveal-card');

    const observerOptions = {
        root: null, // base browser viewport
        rootMargin: '0px',
        threshold: 0.15 // Animation get starts after 15% shows of card
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        let delayCounter = 0;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // if doesn't animate
                if (!entry.target.classList.contains('is-visible')) {
                    // 200ms delay for card by card (Stagger Effect)
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delayCounter * 200);
                    
                    delayCounter++;
                    // stop when once animate
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        cardObserver.observe(card);
    });
});