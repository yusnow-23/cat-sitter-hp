import "../css/pages/all.css";
import { initHamburgerMenu } from "./hamburger-menu";
import { initScrollAnimation } from "./scroll-animation";
import { initNavigation } from "./navigation";
import { initFaqAccordion } from "./faq-accordion";
import { initFormValidation } from "./form-validation";
import { initPriceCalculator } from "./price-calculator";

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerMenu();
  initScrollAnimation();
  initNavigation();
  initFaqAccordion();
  initFormValidation();
  initPriceCalculator();
});
