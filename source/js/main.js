$(document).ready(function () {
  // $('.open-modal-quote').click(function () {
  //   event.preventDefault();
  //   $('.modal-quote').addClass('active');
  //   $('.overlay').fadeIn(200);
  // });

  // $('.overlay').click(function () {
  //   event.preventDefault();
  //   $(this).fadeOut(200);
  //   $('.modal').removeClass('active');
  // });

  // $('.modal__close-btn').click(function () {
  //   event.preventDefault();
  //   $('.overlay').fadeOut(200);
  //   $('.modal').removeClass('active');
  // });

  $('.menu__btn').click(function () {
    event.preventDefault();
    // $('.menu').toggleClass('active');
    $('.menu-mobile').toggleClass('active');
    $(this).toggleClass('active');
  });

  // $('.service-info__name').click(function () {
  //   $('.service-info__name').removeClass('active');
  //   $(this).addClass('active');

  //   if ($(window).width() < 940) {
  //     $('.service-info__text').stop().slideUp(200).removeClass('active');
  //     $(this).next('.service-info__text').toggleClass('active').stop().slideToggle(200);
  //   }
  //   $('.service-info__text').removeClass('active');
  //   $(this).next('.service-info__text').addClass('active');
  // });

  // $(window).resize(function () {
  //   if ($(window).width() >= 940) {
  //     $('.service-info__text').css('display', 'block');
  //   } else {
  //     $('.service-info__text').css('display', 'none');
  //   }
  // });

  new WOW().init();

  // $(".service-preview__title--horizontal").lettering();

  // $(window).on('scroll', function () {
  //   if ($(window).scrollTop() >= 200) {
  //     $('.page-header__wrap').addClass('scrolled');
  //   } else {
  //     $('.page-header__wrap').removeClass('scrolled');
  //   }
  // });

  // $('.scroll-down-button').click(function (event) {
  //   event.preventDefault();
  //   var id = $(this).attr('href'),
  //     top = $(id).offset().top - 70;

  //   $('body, html').animate({
  //     scrollTop: top
  //   }, 200);
  // });

    var swiper = new Swiper(".hero-slider", {
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
        900: {
        }
      }
    });

    var swiper = new Swiper(".testimonials-slider", {
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

    

});
