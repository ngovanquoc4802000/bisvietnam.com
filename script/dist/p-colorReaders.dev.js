"use strict";

var toggleSpan = document.querySelector(".toggle-header span");
var headerToggle = document.querySelector(".header-toggle");
var menu = document.querySelector(".icon-menu");
console.log(menu);
console.log(headerToggle);
menu.addEventListener("click", function () {
  headerToggle.classList.toggle("show-siderbar");
});
toggleSpan.addEventListener("click", function () {
  headerToggle.classList.remove("show-siderbar");
});