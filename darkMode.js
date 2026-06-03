const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

let isTouch = false;

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

// touch (mobile)
toggleBtn.addEventListener("touchstart", () => {
    isTouch = true;
    toggleBtn.classList.add("pressed");
});

toggleBtn.addEventListener("touchend", () => {
    toggleBtn.classList.remove("pressed");
    toggleTheme();

    setTimeout(() => {
        isTouch = false;
    }, 300);
});

// mouse (desktop)
toggleBtn.addEventListener("click", () => {
    if (isTouch) return;
    toggleTheme();
});