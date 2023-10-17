const navBar = document.querySelector('.nav__bar');
const btnOpen = document.querySelector('.header__toggle');
const navItem = document.querySelectorAll('.nav__item');

export const initNavigation = () => {
  btnOpen.addEventListener('click', () => {
    navBar.classList.add('active');
  });

  navItem.forEach((item) => {
    item.addEventListener('click', () => {
      navBar.classList.remove('active');
    })
  })

  window.addEventListener('click', (event) => {    
    if (navBar !== event.target && !btnOpen.contains(event.target)) {
      navBar.classList.remove('active');
    }
  });
};
