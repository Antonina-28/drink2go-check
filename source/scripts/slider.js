const sliderSection = document.querySelector('.hero');
const sliderList = document.querySelector('.slider__list');
const slides = sliderList.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
const paginationList = document.querySelector('.slider__pagination');
const paginations = paginationList.querySelectorAll('.slider__pagination-button');

let currentSlide = 0;

const backgroundColors = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];

const activeSlide = () => {
  slides.forEach((slide, index) => {
    console.log(index, 'index');
    sliderSection.style.backgroundColor = backgroundColors[index];

    if (index === currentSlide) {
      slide.style.display = 'grid';
    } else {
      slide.style.display = 'none';
    }
  });

  if (currentSlide === slides.length - 1) {
    buttonNext.setAttribute('disabled', 'true');
  } else if (currentSlide === 0) {
    buttonPrev.setAttribute('disabled', 'true');
  }
};

const removeDisabled = () => {
  if (currentSlide !== slides.length - 1) {
    buttonNext.removeAttribute('disabled');
  } else if (currentSlide !== 0) {
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
    currentSlide = index;
    prepareCurrentSlide(currentSlide);
  });
});

const showNextSlide = () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
    prepareCurrentSlide(currentSlide);
  } else {
    currentSlide++;
    prepareCurrentSlide(currentSlide);
  }
};

const showPrevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
    prepareCurrentSlide(currentSlide);
  } else {
    currentSlide--;
    prepareCurrentSlide(currentSlide);
  }
};

buttonNext.addEventListener('click', showNextSlide);
buttonPrev.addEventListener('click', showPrevSlide);
