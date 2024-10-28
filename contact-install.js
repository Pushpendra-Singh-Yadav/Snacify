document.addEventListener("DOMContentLoaded", () => {
    const formElements = document.querySelectorAll("input, textarea");
    formElements.forEach((element, index) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    const submitButton = document.querySelector(".contact-install-btn");
    submitButton.addEventListener("mouseenter", () => {
        submitButton.style.transition = 'transform 0.3s ease';
        submitButton.style.transform = 'scale(1.1)';
    });
    submitButton.addEventListener("mouseleave", () => {
        submitButton.style.transform = 'scale(1)';
    });
});