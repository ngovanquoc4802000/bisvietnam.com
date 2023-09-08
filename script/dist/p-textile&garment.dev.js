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
var filterButtons = document.querySelectorAll(".product-number button");
var filterDetailed = document.querySelectorAll(".section-center .product-detailed");
console.log(filterButtons, filterDetailed);

var myFilterBT = function myFilterBT(e) {
  var buttons = document.querySelector(".active");
  buttons.classList.remove("active");
  e.target.classList.add("active");
  filterDetailed.forEach(function (card) {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }

    ;
  });
};

filterButtons.forEach(function (button) {
  return button.addEventListener("click", myFilterBT);
});