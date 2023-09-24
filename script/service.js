const toggleSpan = document.querySelector(".toggle-header span");
const headerToggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".icon-menu");
console.log(menu);
console.log(headerToggle);

menu.addEventListener("click",function() {
    headerToggle.classList.toggle("show-siderbar");
});

toggleSpan.addEventListener("click",function() {
    headerToggle.classList.remove("show-siderbar");
})


const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    const title = question.querySelector(".question-title");

    const text = document.querySelector(".question-text p");

    btn.addEventListener("click",function () {
        questions.forEach(function (item) {
            if(item !== question) {
                item.classList.remove("show-text");
                title.style.color = "red";
            }
        });
        question.classList.toggle("show-text");
    });
});




