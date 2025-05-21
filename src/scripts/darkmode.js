// Function to handle theme application immediately
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

// Apply saved theme immediately before DOM is fully loaded
(function () {
  const savedTheme = localStorage.getItem("theme") || "darkmode";
  applyTheme(savedTheme);
})();

// Full setup function for when DOM is ready
export function setupDarkMode() {
  const $sunButton = document.querySelector("#theme-toggle-sun");
  const $moonButton = document.querySelector("#theme-toggle-moon");

  if (!$sunButton || !$moonButton) return;

  function applyTheme(theme) {
    document.documentElement.classList.toggle(
      "lightmode",
      theme === "lightmode"
    );
    document.documentElement.classList.toggle("darkmode", theme === "darkmode");

    $sunButton.style.display = theme === "lightmode" ? "none" : "block";
    $moonButton.style.display = theme === "lightmode" ? "block" : "none";
  }

  function toggleTheme() {
    const newTheme = document.documentElement.classList.contains("lightmode")
      ? "darkmode"
      : "lightmode";

    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  $sunButton.addEventListener("click", toggleTheme);
  $moonButton.addEventListener("click", toggleTheme);

  const savedTheme = localStorage.getItem("theme") || "darkmode";
  applyTheme(savedTheme);
}

// Also run setup immediately if document is already loaded
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setupDarkMode();
} else {
  document.addEventListener("DOMContentLoaded", setupDarkMode);
}
