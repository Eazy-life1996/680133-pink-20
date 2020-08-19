let navMain = document.querySelector(".main-nav");
let navButton = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navButton.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--close")) {
    navMain.classList.remove("main-nav--close");
    navMain.classList.add("main-nav--open");
  } else {
    navMain.classList.add("main-nav--close");
    navMain.classList.remove("main-nav--open");
  }
});