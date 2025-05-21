export function setupProjectsPage() {
  const detailButtons = document.querySelectorAll(".project__details-btn");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project__card");
      const description = card.querySelector(".project__description");

      if (
        description.style.display === "none" ||
        description.style.display === ""
      ) {
        description.style.display = "block";
        button.textContent = "Hide Details";
        button.setAttribute("aria-expanded", "true");
      } else {
        description.style.display = "none";
        button.textContent = "Details";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}
