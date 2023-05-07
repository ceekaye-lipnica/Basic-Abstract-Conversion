const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav ul");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  header.style=("border-bottom: 1px solid #ffffff;");
});


