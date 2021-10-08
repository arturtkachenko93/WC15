/* Buttons "Показать все/Скрыть все" */

const buttonStatus = (show, icon) => {
  const buttonBrands = document.querySelector('.brands__button');
  const iconBtnBrands = document.querySelector('.brands__icon-arrows');
  const listBrands = document.querySelector('.brands__list');

  buttonBrands.addEventListener('click', (e) => {
    e.preventDefault();
    listBrands.classList.toggle(show);
    buttonTextToogle();
    iconBtnBrands.classList.toggle(icon);
  });

  const buttonTextToogle = () => {
    if (buttonBrands.textContent===`Показать все`) {
      buttonBrands.textContent = `Скрыть`;

    } else if (buttonBrands.textContent===`Скрыть`){
      buttonBrands.textContent = `Показать все`;
    }
  }
}

buttonStatus('brands__list--visible', 'brands__icon-arrows--rotate');


/* Swiper slider */

const breakpoint = window.matchMedia('(min-width: 768px)');
let mySwiper;

const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper!== undefined) {
        mySwiper.destroy (true, true);
      }
      return;

    } else if (breakpoint.matches === false) {
      enableSwiper();
      return;
  }
};

const enableSwiper = function () {
  mySwiper = new Swiper('.swiper', {

    // Бесконечный скролл
    loop: true,
    loopedSlides: 3,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Кол-во слайдов для показа
    slidesPerView: 'auto',

    // Скорость скролла
    speed: 800,
  });
};

breakpoint.addEventListener('change', () => {
  breakpointChecker();
});

breakpointChecker ();
