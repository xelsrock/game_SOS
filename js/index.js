import { initAccordion } from "./modules/initAccordion.js";
import { initNavigation } from "./modules/initNavigation.js";
import { initSubscribe } from "./modules/initSubscribe.js";

const init = () => {
  initAccordion();
  initSubscribe();
  initNavigation();
}

window.addEventListener('DOMContentLoaded', init);



