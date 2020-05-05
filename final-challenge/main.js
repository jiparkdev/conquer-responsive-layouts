const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const headerBox = document.querySelector(".header-box");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-visible");
  headerBox.classList.toggle("header-box-visible");
});
