document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll('.gallery-row');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // screen(15%)
    };

    const rowObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // stop animate when once done
                observer.unobserve(entry.target);

                // 200ms delay for card by card (Stagger Effect)
            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, delayCounter * 200);
            }
        });
    }, observerOptions);

    rows.forEach(row => {
        rowObserver.observe(row);
    });
});


const sliderContainer = document.getElementById('sliderContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

// slide(desktop)
function getSlidesPerView() {
return window.innerWidth > 992 ? 2 : 1;
}

function updateSlider() {
const slidesPerView = getSlidesPerView();
const maxIndex = totalSlides - slidesPerView;

if (currentIndex > maxIndex) currentIndex = maxIndex;
if (currentIndex < 0) currentIndex = 0;

// Slide (Animation)
const movePercentage = currentIndex * (100 / slidesPerView);
sliderContainer.style.transform = `translateX(-${movePercentage}%)`;

// Active Dots update
dots.forEach((dot, index) => {
    if (index === currentIndex) {
        dot.classList.add('active');
    } else {
        dot.classList.remove('active');
    }
});
}

nextBtn.addEventListener('click', () => {
const slidesPerView = getSlidesPerView();
if (currentIndex < totalSlides - slidesPerView) {
    currentIndex++;
} else {
    currentIndex = 0; // return to start
}
updateSlider();
});

prevBtn.addEventListener('click', () => {
if (currentIndex > 0) {
    currentIndex--;
} else {
    currentIndex = totalSlides - getSlidesPerView();
}
updateSlider();
});

function goToSlide(index) {
currentIndex = index;
updateSlider();
}

// Auto-play Animation (5s)
setInterval(() => {
const slidesPerView = getSlidesPerView();
if (currentIndex < totalSlides - slidesPerView) {
    currentIndex++;
} else {
    currentIndex = 0;
}
updateSlider();
}, 5000);

// Screen resize (layout)
window.addEventListener('resize', updateSlider);