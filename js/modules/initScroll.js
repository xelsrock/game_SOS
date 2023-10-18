const navItems = document.querySelectorAll("a[href^='#']");

const scrollArrayAttr = [
  '.about__info-subtitle',
  '.req__table',
  '.about__info-title',
  '.about__text',
  '.req__subtitle',
  '.req__title',
  '.reviews__item-one',
  '.reviews__item-two',
  '.reviews__item-three',
  '.review__title',
  '.review__description',
  '.subscribe__subtitle',
  '.subscribe__description',
  '.rule__title',
  '.rule__accordion',
];

const findElem = (element) => {
  return document.querySelector(element);
};

const animationScroll = (attr) => {
  console.log('animScroll');

  const elem = findElem(attr);
  const positionElem = elem.getBoundingClientRect().top;

  if (positionElem < window.innerHeight && !elem.classList.contains('scroll')) {
    elem.classList.add('scroll');
  }
};

export const initScroll = () => {
  navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      let href = item.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  window.addEventListener('scroll', (e) => {
    e.preventDefault();

    scrollArrayAttr.forEach((elem) => {
      animationScroll(elem);
    });
  });
};
