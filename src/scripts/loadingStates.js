export function setupLoadingStates() {
  // Add loading class to body initially
  document.body.classList.add("loading");

  // Remove loading state when page is fully loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    }, 500);
  });

  // Add skeleton loading for images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (!img.complete) {
      img.classList.add("loading-image");
      img.addEventListener("load", () => {
        img.classList.remove("loading-image");
        img.classList.add("loaded-image");
      });
    }
  });
}
