// Sticky Navbar on Scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

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

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "flex"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
};

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};

