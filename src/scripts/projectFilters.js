export function setupProjectFilters() {
  const projectsPage = document.querySelector(".projects__container");
  if (!projectsPage) return;

  // Add filter buttons container
  const filterContainer = document.createElement("div");
  filterContainer.className = "project-filters";
  filterContainer.innerHTML = `
    <h3>Filter Projects</h3>
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="web">Web Development</button>
      <button class="filter-btn" data-filter="design">Design</button>
      <button class="filter-btn" data-filter="app">Applications</button>
    </div>
  `;

  // Insert filter container before projects grid
  const projectsGrid = document.querySelector(".projects__grid");
  projectsGrid.parentNode.insertBefore(filterContainer, projectsGrid);

  // Add data attributes to project cards based on content
  const projectCards = document.querySelectorAll(".project__card");
  const projectCategories = {
    "Make IT Happen": "app",
    "STAM Ghent - Remake": "web",
    "No Planet B": "web",
    "1e Portfolio": "web",
    "Nexu Bank App Design": "design",
    "Pixel Pioneers": "web",
    "Weather Dashboard": "app",
    "Personal Budget Tracker": "app",
  };

  projectCards.forEach((card) => {
    const title = card.querySelector(".project__title").textContent;
    const category = projectCategories[title] || "web";
    card.setAttribute("data-category", category);
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          card.classList.add("filter-show");
          card.classList.remove("filter-hide");
        } else {
          card.classList.add("filter-hide");
          card.classList.remove("filter-show");
          setTimeout(() => {
            if (card.classList.contains("filter-hide")) {
              card.style.display = "none";
            }
          }, 300);
        }
      });
    });
  });
}
