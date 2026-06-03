const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation a");

hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    navigation.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

document.addEventListener("click", (event) => {

    const clickedInsideMenu = navigation.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {
        navigation.classList.remove("active");
    }

});