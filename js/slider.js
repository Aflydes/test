$(document).ready(function(){
    $('.reviews__slider').slick({
        dots: false,
        prevArrow: '<div class="slider-arrow prev-arrow"></div>',
		nextArrow: '<div class="slider-arrow next-arrow"></div>',
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                arrows: false,
                dots: true,
              }
            },]
      });
});