const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.src = "photos/sun.PNG";
        icon.alt = "Gaišais režīms";
    } else {
        icon.src = "photos/moon.PNG";
        icon.alt = "Tumšais režīms";
    }
}

// pointer events = works for mouse + touch + pen (BEST FIX)
toggleBtn.addEventListener("pointerdown", () => {
    toggleBtn.classList.add("pressed");
});

toggleBtn.addEventListener("pointerup", () => {
    toggleBtn.classList.remove("pressed");
});

toggleBtn.addEventListener("pointercancel", () => {
    toggleBtn.classList.remove("pressed");
});

toggleBtn.addEventListener("click", toggleTheme);