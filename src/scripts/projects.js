export function setupProjectsPage() {
  const detailButtons = document.querySelectorAll(".project__details-btn");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project__card");
      const description = card.querySelector(".project__description");
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      if (!isExpanded) {
        // Show details
        description.classList.add("show");
        button.textContent = "Verberg Details";
        button.setAttribute("aria-expanded", "true");
      } else {
        // Hide details
        description.classList.remove("show");
        button.textContent = "Details";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Initialize all descriptions as hidden
  const descriptions = document.querySelectorAll(".project__description");
  descriptions.forEach((desc) => {
    desc.classList.remove("show");
  });

  // Initialize all buttons
  detailButtons.forEach((button) => {
    button.textContent = "Details";
    button.setAttribute("aria-expanded", "false");
  });
}
