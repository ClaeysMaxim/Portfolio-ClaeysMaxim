// Simplified darkmode implementation
function applyTheme(theme) {
  document.documentElement.classList.toggle("lightmode", theme === "lightmode");
  document.documentElement.classList.toggle("darkmode", theme === "darkmode");

  // Update buttons if they exist
  const $sunButton = document.querySelector("#theme-toggle-sun");
  const $moonButton = document.querySelector("#theme-toggle-moon");

  if ($sunButton) {
    $sunButton.style.display = theme === "lightmode" ? "none" : "block";
  }

  if ($moonButton) {
    $moonButton.style.display = theme === "lightmode" ? "block" : "none";
  }
}

// Apply saved theme immediately
(function () {
  const savedTheme = localStorage.getItem("theme") || "darkmode";
  applyTheme(savedTheme);
})();

export function setupDarkMode() {
  const $sunButton = document.querySelector("#theme-toggle-sun");
  const $moonButton = document.querySelector("#theme-toggle-moon");

  if (!$sunButton || !$moonButton) return;

  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("lightmode")
      ? "darkmode"
      : "lightmode";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  }

  // Set up event listeners
  $sunButton.addEventListener("click", toggleTheme);
  $moonButton.addEventListener("click", toggleTheme);
}
