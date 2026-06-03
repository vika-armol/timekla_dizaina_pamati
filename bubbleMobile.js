const bubbles = document.querySelectorAll(".tech-bubble");

bubbles.forEach(bubble => {
    bubble.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            bubble.classList.toggle("active");
        }

    });
});