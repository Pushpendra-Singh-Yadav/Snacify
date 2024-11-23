document.addEventListener("DOMContentLoaded", () => {
    const missionImage = document.querySelector(".animated-img");

    missionImage.addEventListener("mouseover", () => {
        missionImage.style.transform = "scale(1.05)";
    });

    missionImage.addEventListener("mouseleave", () => {
        missionImage.style.transform = "scale(1)";
    });
});

function showInfo(button) {
    const member = button.parentElement;
    const name = member.querySelector('h3').innerText;
    const description = member.getAttribute('data-info');

    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-description').innerText = description;

    const modal = document.getElementById('info-modal');
    modal.style.display = "block";
}

function closeInfo() {
    const modal = document.getElementById('info-modal');
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
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
    