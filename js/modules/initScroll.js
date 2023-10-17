const navItems = document.querySelectorAll("a[href^='#']");

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
};
