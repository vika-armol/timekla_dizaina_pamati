const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

function toggleTheme() {
    document.body.classList.toggle("dark");

    toggleBtn.classList.add("pressed");

    setTimeout(() => {
        toggleBtn.classList.remove("pressed");
    }, 150);

    if (document.body.classList.contains("dark")) {
        icon.src = "photos/sun.PNG";
        icon.alt = "Gaišais režīms";
    } else {
        icon.src = "photos/moon.PNG";
        icon.alt = "Tumšais režīms";
    }
}

/* Click works everywhere (desktop + mobile) */
toggleBtn.addEventListener("click", toggleTheme);

/* Mobile fix: removes “stuck press / focus” state */
toggleBtn.addEventListener("touchend", () => {
    toggleBtn.blur();
});