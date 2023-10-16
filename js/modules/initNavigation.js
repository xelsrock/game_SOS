const navBar = document.querySelector('.nav__bar');
const btnOpen = document.querySelector('.header__toggle');
const btnClose = document.querySelector('.nav__close');

export const initNavigation = () => {

  btnOpen.addEventListener('click', () => {
    navBar.classList.add('active');
  });

  window.addEventListener('click', (event) => {
    if (!navBar.contains(event.target) && !btnOpen.contains(event.target)) {
      navBar.classList.remove('active');
    }
  });

  btnClose.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
};
