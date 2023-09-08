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

