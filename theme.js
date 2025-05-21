// This script runs independently from webpack to handle theme
(function() {
  function applyTheme() {
    const savedTheme = localStorage.getItem("theme") || "darkmode";
    document.documentElement.classList.toggle("lightmode", savedTheme === "lightmode");
    document.documentElement.classList.toggle("darkmode", savedTheme === "darkmode");
  }

  // Apply theme immediately
  applyTheme();

  // Set up toggle functions after DOM loads
  document.addEventListener("DOMContentLoaded", function() {
    const sunButton = document.getElementById("theme-toggle-sun");
    const moonButton = document.getElementById("theme-toggle-moon");

    if (sunButton && moonButton) {
      function updateButtonDisplay() {
        const isLightMode = document.documentElement.classList.contains("lightmode");
        sunButton.style.display = isLightMode ? "none" : "block";
        moonButton.style.display = isLightMode ? "block" : "none";
      }

      function toggleTheme() {
        const currentTheme = document.documentElement.classList.contains("lightmode") ? "darkmode" : "lightmode";
        document.documentElement.classList.toggle("lightmode", currentTheme === "lightmode");
        document.documentElement.classList.toggle("darkmode", currentTheme === "darkmode");
        localStorage.setItem("theme", currentTheme);
        updateButtonDisplay();
      }

      sunButton.addEventListener("click", toggleTheme);
      moonButton.addEventListener("click", toggleTheme);
      
      // Set initial button display
      updateButtonDisplay();
    }
  });
})();
