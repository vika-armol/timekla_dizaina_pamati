const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.src = "photos/sun.PNG";
        icon.alt = "Gaišais režīms";
    } else {
        icon.src = "photos/moon.PNG";
        icon.alt = "Tumšais režīms";
    }
});