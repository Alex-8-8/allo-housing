'use strict';

$(document).ready(function() {
  $('.featured-slider__cards-wrapper').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendArrows: $('.featured-slider__buttons-wrapper'),
    prevArrow: '<button type="button" class="slick-prev">prev</button>',
    nextArrow: '<button type="button" class="slick-next">next</button>',
  });

  $('.partners-slider__cards-wrapper').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
    appendArrows: $('.partners-slider__buttons-wrapper'),
    prevArrow: '<button type="button" class="partners-prev">prev</button>',
    nextArrow: '<button type="button" class="partners-next">next</button>',
  });

  $('.slider-block__wrapper').slick({
    arrows: true,
    slidesToShow: 1,
    appendArrows: $('.slider-block__control'),
    // prevArrow: '<button type="button" class="slick-prev">prev</button>',
    // nextArrow: '<button type="button" class="slick-next">next</button>',
  });

  $('.details-header-slider__wrapper').slick({
    arrows: true,
    centerMode: true,
    autoplay: true,
    appendArrows: $('.details-header-slider__control'),
    variableWidth: true,
    // prevArrow: '<button type="button" class="slick-prev">prev</button>',
    // nextArrow: '<button type="button" class="slick-next">next</button>',
  });
}
);
