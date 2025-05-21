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
