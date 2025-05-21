import { setupNavigation } from "./navigator.js";
import { setupDarkMode } from "./darkmode.js";
import { setupMoreInfo } from "./moreInfo.js";
import { setupProjectsPage } from "./projects.js";
import { setupCarousel } from "./carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupDarkMode();
  setupMoreInfo();
  setupProjectsPage();
  setupCarousel();
});
