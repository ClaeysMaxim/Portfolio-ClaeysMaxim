export function setupMoreInfo() {
  const openButton = document.getElementById("open-info-popover");
  const closeButton = document.getElementById("close-info-popover");
  const popover = document.getElementById("info-popover");

  if (!openButton || !closeButton || !popover) return;

  openButton.addEventListener("click", () => {
    if (typeof popover.showModal === "function") {
      popover.showModal();
    } else {
      popover.setAttribute("open", "");
    }
  });

  closeButton.addEventListener("click", () => {
    popover.close();
  });
}
