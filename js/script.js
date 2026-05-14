const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
        mainNav.classList.toggle("show-nav");
    });
}