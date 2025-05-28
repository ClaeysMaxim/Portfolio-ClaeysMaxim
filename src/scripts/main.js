import { setupNavigation } from "./navigator.js";
import { setupDarkMode } from "./darkmode.js";
import { setupMoreInfo } from "./moreInfo.js";
import { setupProjectsPage } from "./projects.js";
import { setupCarousel } from "./carousel.js";
import { setupScrollAnimations } from "./scrollAnimations.js";
import { setupBackToTop } from "./backToTop.js";
import { setupLoadingStates } from "./loadingStates.js";
import { setupProjectFilters } from "./projectFilters.js";
import { setupTypingEffect } from "./typingEffect.js";
import { setupBreadcrumb } from "./breadcrumb.js";
import { setupSkillBars } from "./skillBars.js";

document.addEventListener("DOMContentLoaded", () => {
  setupLoadingStates();
  setupBreadcrumb();
  setupNavigation();
  setupDarkMode();
  setupMoreInfo();
  setupProjectsPage();
  setupCarousel();
  setupScrollAnimations();
  setupBackToTop();
  setupProjectFilters();
  setupTypingEffect();
  setupSkillBars();
});
