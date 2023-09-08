"use strict";

$(document).ready(function () {
  $(".product-slider").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    lazyLoad: "ondemand",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"fas fa-arrow-left\"></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"fas fa-arrow-right\"></i></button>"
  });
});