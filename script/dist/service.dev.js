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
var questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  var btn = question.querySelector(".question-btn");
  var title = question.querySelector(".question-title");
  var text = document.querySelector(".question-text p");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        title.style.color = "red";
      }
    });
    question.classList.toggle("show-text");
  });
});
questionTitle.addEventListener("click", function () {
  questionTitle.style.color = "red";
});