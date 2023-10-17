import { initAccordion } from "./modules/initAccordion.js";
import { initNavigation } from "./modules/initNavigation.js";
import { initScroll } from "./modules/initScroll.js";
import { initSlider } from "./modules/initSlider.js";
import { initSubscribe } from "./modules/initSubscribe.js";

const init = () => {
  initAccordion();
  initSubscribe();
  initNavigation();
  initScroll();
  initSlider();
}

window.addEventListener('DOMContentLoaded', init);