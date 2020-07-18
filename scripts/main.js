'use strict';

const mobileNavToggler = () => {
  const menuToggler = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobilePart = document.querySelectorAll('.menu-toggle__part');

  menuToggler.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav--show');

    mobilePart.forEach(part => part.classList
      .toggle('menu-toggle__part--active'));
    menuToggler.classList.toggle('menu-toggle--close');
  });
};

mobileNavToggler();

$('.header-search__period-button').click(function() {
  if ($(this).is('.header-search__period-button--active')) {
    $('.header-search__period-button')
      .not(this)
      .removeClass('header-search__period-button--active');
  } else {
    $(this).addClass('header-search__period-button--active');

    $('.header-search__period-button')
      .not(this)
      .removeClass('header-search__period-button--active');
  }
});

$('.header-search__period-button--search-results').click(function() {
  if ($(this).is('.header-search__period-button--active')) {
    $('.header-search__period-button--search-results')
      .not(this)
      .removeClass('header-search__period-button--active');
  } else {
    $(this).addClass('header-search__period-button--active');

    $('.header-search__period-button--search-results')
      .not(this)
      .removeClass('header-search__period-button--active');
  }
});

$('.mobile-filters-form__period-button').click(function() {
  if ($(this).is('.mobile-filters-form__period-button--active')) {
    $('.mobile-filters-form__period-button')
      .not(this)
      .removeClass('mobile-filters-form__period-button--active');
  } else {
    $(this).addClass('mobile-filters-form__period-button--active');

    $('.mobile-filters-form__period-button')
      .not(this)
      .removeClass('mobile-filters-form__period-button--active');
  }
});

const additionalNav = document
  .querySelector('.additional-navigation');
const additionalNavItem = document
  .querySelectorAll('.additional-navigation__item');

document.addEventListener('scroll', () => {
  if (pageYOffset > '80' && window.innerWidth > '1200' && additionalNav) {
    additionalNav.style.height = '60px';

    additionalNavItem.forEach(item => {
      item.style.display = 'block';
    });
  } else if (additionalNav) {
    additionalNav.style.height = '0';

    additionalNavItem.forEach(item => {
      item.style.display = 'none';
    });
  }
});

const whiteLogo = document.querySelector('.logo--white');
const darkLogo = document.querySelector('.logo--dark');
const headerNav = document.querySelector('.header-nav--main');
// const headerNavWhite =
const headerButtons = document.querySelectorAll('.header-account__button');
const navArrows = document.querySelectorAll('.navigation__arrow');
const menuPart = document.querySelectorAll('.menu-toggle__part');
const accountIcon = document.querySelector('.header-account__icon');

document.addEventListener('scroll', () => {
  if (pageYOffset > '80'
  && whiteLogo
  && darkLogo
  && headerNav
  && accountIcon
  && headerButtons.length > 0
  && navArrows.length > 0
  && menuPart.length > 0) {
    console.log(whiteLogo, darkLogo);
    headerNav.classList.add('header-nav--white');
    whiteLogo.style.display = 'none';
    darkLogo.style.display = 'block';
    headerNav.style.color = '#000';
    accountIcon.style.fill = '#000';

    menuPart.forEach(part => {
      part.style.background = '#000';
    });

    navArrows.forEach(arrow => {
      arrow.style.fill = '#000';
    });

    headerButtons.forEach(btn => {
      btn.style.color = '#000';
    });
    // console.log(headerNav)
  } else if (whiteLogo
    && darkLogo
    && headerNav
    && accountIcon
    && headerButtons.length > 0
    && navArrows.length > 0
    && menuPart.length > 0) {
    headerNav.classList.remove('header-nav--white');
    whiteLogo.style.display = 'block';
    darkLogo.style.display = 'none';
    headerNav.style.color = '#fff';
    accountIcon.style.fill = '#fff';

    menuPart.forEach(part => {
      part.style.background = '#fff';
    });

    navArrows.forEach(arrow => {
      arrow.style.fill = '#fff';
    });

    headerButtons.forEach(btn => {
      btn.style.color = '#fff';
    });
  }
});

const mainHeader = document.querySelector(".header--main")
const headerParalax = document.querySelector(".header__bg-paralax")

document.addEventListener('scroll', () => {
  if (pageYOffset > '80' && mainHeader && headerParalax) {
    mainHeader.style.height = '620px';
    headerParalax.style.height = '620px';
  } else {
    mainHeader.style.height = '700px';
    headerParalax.style.height = '700px';
  }
  // else if ( pageYOffset > '80' && mainHeader && headerParalax && window.innerWidth < '600') {
  //   mainHeader.style.height = '580px';
  //   headerParalax.style.height = '580px';
  // }
});

const searchField = document
  .querySelector('.header-search-form__select-wrapper--search-results');
const mobileForm = document.querySelector('.mobile-filters');
const headerSearchResults = document.querySelector('#header');
const mainSearchResults = document.querySelector('#mainSearchResults');
const footerSearchResults = document.querySelector('#footerSearchResults');
const mobileFiltersButton = document.querySelector('.mobile-filters__button')

if (searchField) {
  searchField.addEventListener('click', () => {
    if (innerWidth <= 800) {
      mobileForm.style.display = 'block';
      headerSearchResults.style.display = 'none';
      mainSearchResults.style.display = 'none';
      footerSearchResults.style.display = 'none';
    }
  });

  mobileFiltersButton.addEventListener('click', () => {
    if (innerWidth <= 800) {
      mobileForm.style.display = 'none';
      headerSearchResults.style.display = 'block';
      mainSearchResults.style.display = 'block';
      footerSearchResults.style.display = 'block';
    }
  });
}

// const bookingForm = document.querySelector('.booking');

// if (pageYOffset > '100') {
//   console.log(bookingForm);
// }

// document.addEventListener('scroll', () => {
//   if (pageYOffset > '100') {
//     console.log(bookingForm.style.display);
//   }
  // if (pageYOffset > '100') {
  //   bookingForm.style.display = 'fixed';
  // }
// });
