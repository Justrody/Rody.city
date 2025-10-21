"use strict";

const navbarProjectBtn = document.querySelector("#projects-btn button");
const navbarModalItems = document.querySelector("#navbar-modal-items");


navbarProjectBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navbarModalItems.classList.toggle("hidden");
});

//detecta se ha algum click fora do modal e o fecha caso haja
document.addEventListener("click", (e) => {
  if (!navbarModalItems.contains(e.target) && !navbarProjectBtn.contains(e.target)) {
    navbarModalItems.classList.add("hidden");
  }
});

