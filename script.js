const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the navigation menu on click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-btn').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow");
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });
    slides[currentSlide].classList.add("active");
    currentSlide = (currentSlide + 1) % totalSlides;
}

// Initial display of the first slide
showSlides();
// Transition every 4 seconds
setInterval(showSlides, 4000);

// Text Animation for "24 X 7 Available"
const animatedText = document.querySelector('.animated-text');
const phrases = ["24 X 7 Available", "Instant Vending Solutions", "Serving You Anytime"];
let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    if (!deleting && letterIndex <= phrases[phraseIndex].length) {
        animatedText.textContent = phrases[phraseIndex].slice(0, ++letterIndex);
    } else if (deleting && letterIndex > 0) {
        animatedText.textContent = phrases[phraseIndex].slice(0, --letterIndex);
    } else if (letterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    if (letterIndex === phrases[phraseIndex].length) {
        deleting = true;
    }
    
    setTimeout(typeEffect, deleting ? 100 : 200);
}
document.addEventListener('DOMContentLoaded', typeEffect);

document.addEventListener("DOMContentLoaded", () => {
    const toggleDetailsButton = document.getElementById("toggle-details");
    const detailsSection = document.getElementById("details-section");

    toggleDetailsButton.addEventListener("click", () => {
        const isOpen = detailsSection.classList.toggle("open");

        // Change button text based on state
        toggleDetailsButton.textContent = isOpen ? "Hide Details" : "View Details";

        // Smooth scroll to the details when opened
        if (isOpen) {
            detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".partner-logos");
    let scrollAmount = 0;

    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount > logoContainer.scrollWidth) {
            scrollAmount = 0;
        }
        logoContainer.scrollLeft = scrollAmount;
    }

    setInterval(autoScroll, 50);
});

    // Scroll-to-Top Button Logic
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    