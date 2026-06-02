const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.src = "photos/laptop.png";
        icon.alt = "Light mode";
    } else {
        icon.src = "photos/bootle.PNG";
        icon.alt = "Dark mode";
    }
});