const sliderList = document.querySelector('.slider__list');
const slides = sliderList.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
const paginationList = document.querySelector('.slider__pagination');
const paginations = paginationList.querySelectorAll('.slider__pagination-button');

let indexSlide = 0;

const activeSlide = () => {
  slides.forEach((slide, index) => {
    if (index === indexSlide) {
      slide.style.display = 'grid';
    } else {
      slide.style.display = 'none';
    }
  });

  if (indexSlide === slides.length - 1) {
    buttonNext.setAttribute('disabled', 'true');
  } else if (indexSlide === 0) {
    buttonPrev.setAttribute('disabled', 'true');
  }
};

const removeDisabled = () => {
  if (indexSlide !== slides.length - 1) {
    buttonNext.removeAttribute('disabled');
  } else if (indexSlide !== 0) {
    buttonPrev.removeAttribute('disabled');
  }
};

const activePagination = (index) => {
  paginations.forEach((item) => item.classList.remove('slider__pagination-button--current'));
  paginations[index].classList.add('slider__pagination-button--current');
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activePagination(ind);
  removeDisabled();
};

paginations.forEach((element, index) => {
  element.addEventListener('click', () => {
    indexSlide = index;
    prepareCurrentSlide(indexSlide);
  });
});

const showNextSlide = () => {
  if (indexSlide === slides.length - 1) {
    indexSlide = 0;
    prepareCurrentSlide(indexSlide);
  } else {
    indexSlide++;
    prepareCurrentSlide(indexSlide);
  }
};

const showPrevSlide = () => {
  if (indexSlide === 0) {
    indexSlide = slides.length - 1;
    prepareCurrentSlide(indexSlide);
  } else {
    indexSlide--;
    prepareCurrentSlide(indexSlide);
  }
};

buttonNext.addEventListener('click', showNextSlide);
buttonPrev.addEventListener('click', showPrevSlide);
