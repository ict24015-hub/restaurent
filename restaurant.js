// Navigation Bar thinner while scrolling
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "12px 0";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    } else {
        navbar.style.padding = "20px 0";
        navbar.style.boxShadow = "none";
    }
});

        // Animation (Function)
function revealElements() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // when scroll to up
            reveals[i].classList.remove("active"); 
        }
    }
}

// animation for scroll the page
window.addEventListener("scroll", revealElements);

// load animation
revealElements();


// menu button scroll
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('detailedMenu').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
        // when click the menu button to down scroll
        document.getElementById('menuBtn').addEventListener('click', function() {
            document.getElementById('detailedMenu').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });