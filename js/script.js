// Set current year
const yearEl = document.querySelector(".year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
if (btnNavEl && headerEl) {
  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
}

// change the NavBar color
const header = document.querySelector(".header");

// Attach the scroll event listener to the window object
window.addEventListener("scroll", function () {
  if (window.scrollY > 800) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});
