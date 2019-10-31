$(document).ready(function () {
  $('.modal-quote-btn').click(function () {
    event.preventDefault();
    $('.modal-quote').addClass('active');
    $('.overlay').fadeIn(200);
  });

  $('.overlay').click(function () {
    event.preventDefault();
    $(this).fadeOut(200);
    $('.modal').removeClass('active');
  });

  $('.modal__close-btn').click(function () {
    event.preventDefault();
    $('.overlay').fadeOut(200);
    $('.modal').removeClass('active');
  });

  $('.menu__btn').click(function () {
    event.preventDefault();
    // $('.menu').toggleClass('active');
    $('.menu-mobile').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.services-links__link').hover(function () {
    $(this).closest('.services-links__item').find('.services-lick__title').toggleClass('active');
  });

  $(".company-success__count").each(function() {
    var item = $(this);
    var text = item.text();
    item.text(text.substring(1));
    item.attr("data-before", text.charAt(0));
  });

  new WOW().init();

  var heroSlider = new Swiper(".hero-slider", {
    speed: 600,
    // parallax: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4200
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      900: {}
    }
  });

  var testimonialSlider = new Swiper(".testimonials-slider", {
    speed: 600,
    parallax: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4200
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var projectSlider = new Swiper(".projects-slider", {
    speed: 600,
    parallax: true,
    slidesPerView: 1,
    // autoplay: {
    //   delay: 4200
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var slideCounterCurrent = $('.projects-slider__current');
  var slideCounterAll = $('.projects-slider__all');

  var slideAllEl = ($('.projects-slider .project-slider__slide')).length;

  slideCounterAll.text('/' + slideAllEl);

  projectSlider.on('slideChange', function () {

    setTimeout(function () {
      var slideCurrentEl = (($('.projects-slider .swiper-slide-active')).index() + 1);
      slideCounterCurrent.text(slideCurrentEl);
    }, 50)
  });

});