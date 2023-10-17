const navItems = document.querySelectorAll("a[href^='#']");
const scrollArrow = document.querySelector('.preview__about');
const subscribe = document.querySelector('.subscribe');
const reqTable = document.querySelector('.req__table');

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

  const animationTime = 2500;
  const framesCount = 2500;

  scrollArrow.addEventListener('click', (e) => {
    e.preventDefault();

    const coordY = subscribe.getBoundingClientRect().top + window.scrollY;
    const reqTableCoord = reqTable.getBoundingClientRect().top + window.scrollY;

    reqTable.style.scale = 0;

    const scroller = setInterval(() => {
      // считаем на сколько скроллить за 1 такт
      const scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (
        scrollBy > window.scrollY - coordY &&
        window.innerHeight + window.scrollY < document.body.offsetHeight
      ) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);

        if (Math.trunc(reqTableCoord - window.innerHeight) < Math.trunc(window.scrollY)) {
          if (reqTable.style.scale < 1) {
            reqTable.style.scale = 1;
          }
        }
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
};
