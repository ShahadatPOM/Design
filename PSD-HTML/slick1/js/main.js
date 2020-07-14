$('.full-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    autoplay: true,
    nextArrow: '<i class="fas fa-arrow-left nxtArrow"></i>',
    prevArrow: '<i class="fas fa-arrow-right prvArrow"></i>'
  });

  $('.main-team').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    dots: true,
    autoplay: true,
  });
      