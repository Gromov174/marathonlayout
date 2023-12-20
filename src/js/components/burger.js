"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('[data-burger="btn"]'),
    menu = document.querySelector('[data-burger="menu"]'),
    linksParent = document.querySelector('[data-burger="menu"]'),
    burgerOpen = () => {
      burger.classList.add("burger--active");
      menu.classList.add("header__menu--active");
    },
    burgerClose = () => {
      burger.classList.remove("burger--active");
      menu.classList.remove("header__menu--active");
    };

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("header__menu--active")) {
      burgerOpen();
    } else {
      burgerClose();
    }
  });

  linksParent.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target && event.target.tagName == "A") {
      burgerClose();
      console.log(event.target);
    }
  });
});
