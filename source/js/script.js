let navMain = document.querySelector(".main-nav");
let navButton = document.querySelector(".main-nav__toggle");

let form = document.querySelector(".form");
let userName = document.querySelector(".form__input--name");
let userSurname = document.querySelector(".form__input--surname");
let userMail = document.querySelector(".form__input--email");
let modalFail = document.querySelector(".modal-failur");
let modalSuccess = document.querySelector(".modal-success");

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

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userSurname.value || !userMail.value) {
    evt.preventDefault();
    modalFail.classList.add("modal-failur-show")
  } else {
    modalSuccess.classList.add("modal-success-show");
  }
});
