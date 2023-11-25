"use strict";

const navBtn = document.querySelector("button[aria-expanded]");

navBtn.addEventListener("click", toggleNav);
window.onscroll = closeNav;
window.onresize = closeNav;

function toggleNav() {
  const expanded = navBtn.getAttribute("aria-expanded") === "true";
  navBtn.setAttribute("aria-expanded", !expanded);
}

function closeNav() {
  navBtn.setAttribute("aria-expanded", "false");
}
