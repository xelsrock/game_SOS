const sliderImgs = document.querySelectorAll('.about__slider-img');
const arrow = document.querySelector('.about__slider-arrow');

export const initSlider = () => {
  arrow.addEventListener('click', () => {
    sliderImgs.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.classList.add('noactive__two');
      } else if (item.classList.contains('noactive__one')) {
        item.classList.remove('noactive__one');
        item.classList.add('active');
      } else if (item.classList.contains('noactive__two')) {
        item.classList.remove('noactive__two');
        item.classList.add('noactive__one');
      }
    });
  });
};
