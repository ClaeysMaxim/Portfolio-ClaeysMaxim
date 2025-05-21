export function setupNavigation() {
  // Get navigation elements
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Exit if elements don't exist
  if (!hamburger || !navLinks) return;

  // Toggle mobile navigation visibility
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("nav-active")
    );
  });

  // Close mobile menu when clicking on a link (better UX)
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        // Only on mobile
        navLinks.classList.remove("nav-active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });
}
