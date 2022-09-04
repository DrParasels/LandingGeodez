$(function () {
  // Section tabs
    $('.tabs__top-link').on('click', function(e){
      e.preventDefault();
      $('.tabs__top-link').removeClass('tabs__top-link--active');
      $(this).addClass('tabs__top-link--active');

      $('.tabs__content-item').removeClass('tabs__content-item--active');
      $($(this).attr('href')).addClass('tabs__content-item--active');
    });

  //Section slider
    $('.slider__inner').slick({
      arrows:true,

      responsive: [
        {
          breakpoint: 1201,
          settings: {
            arrows:false,
            dots:true
          }
        }
      ]
    });

    //Section header menu
    $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
      $('.menu__btn').toggleClass('menu__btn--active');
    });
});