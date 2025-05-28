export function setupBackToTop() {
  // Create back to top button
  const backToTopButton = document.createElement("button");
  backToTopButton.className = "back-to-top";
  backToTopButton.innerHTML = "↑";
  backToTopButton.setAttribute("aria-label", "Back to top");
  backToTopButton.setAttribute("title", "Back to top");

  document.body.appendChild(backToTopButton);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
