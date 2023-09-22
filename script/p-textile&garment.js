const filterButtons = document.querySelectorAll(".product-number button");
const filterDetailed = document.querySelectorAll(".section-center .product-detailed");
console.log(filterButtons, filterDetailed);

const myFilterBT = e => {
    const buttons = document.querySelector(".active");
    buttons.classList.remove("active");
    e.target.classList.add("active");   

    filterDetailed.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        };
    });
};

filterButtons.forEach(button => button.addEventListener("click",myFilterBT));
