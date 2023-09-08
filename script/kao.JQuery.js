$(document).ready(function () {
    $(".product-slider").slick({
      slidesToShow: 4,
      dots: true,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      lazyLoad: "ondemand",
      prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`
    });
  });
  
  $(document).ready(function () {
    $("main").slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`
    });
  });

  $(document).ready(function () {
    $(".img-select ul").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000
    });
  });
  $(document).ready(function () {
     $(".img-three").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed:  500
     });
  });
  
  