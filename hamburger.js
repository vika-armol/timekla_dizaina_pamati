const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation a");

hamburger.addEventListener("click", (event) => {
    event.stopPropagation();

    const menuIsOpen = navigation.classList.contains("active");

    if (menuIsOpen) {
        navigation.classList.remove("active");
        hamburger.classList.remove("active");
    } else {
        navigation.classList.add("active");
        hamburger.classList.add("active");
    }

    // remove focus after click
    hamburger.blur();
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.blur();
    });
});

document.addEventListener("click", (event) => {

    const clickedInsideMenu = navigation.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {
        navigation.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.blur();
    }

});