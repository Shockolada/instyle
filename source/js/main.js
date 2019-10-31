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

  // $('.company-success__count').html(function (i, html) {
    // return html.replace(/^[0-9]/, '<span>$1</span>');
    // return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span>$1</span>');
  // });

  
  // (function wrapFirstLetter () {
  //   var item, i, span = "";
  //   item = document.querySelectorAll(".company-success__count")[0];
  //   span += "<span>";
  //   span += item.innerText[0];
  //   span += "</span>";
  //   console.log(item.innerText.length);
  //   for (i = 1; i < item.innerText.length; i++) {
  //     if (item.innerText[i] !== " ") {
  //       span += item.innerText[i];
  //     }
  //   }
  //   item.innerHTML = span;
  // })();


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