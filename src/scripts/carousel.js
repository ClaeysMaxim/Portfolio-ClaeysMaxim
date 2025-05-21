export function setupCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
  const indicators = Array.from(
    carousel.querySelectorAll(".carousel__indicator")
  );

  let currentSlide = 0;

  // Configure grid for slides
  track.style.gridTemplateColumns = `repeat(${slides.length}, 100%)`;

  // Update slide display
  function showSlide(index) {
    index = Math.max(0, Math.min(index, slides.length - 1));

    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.setAttribute("aria-hidden", i !== index);
      slide.setAttribute("aria-current", i === index ? "true" : "false");
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
      indicator.setAttribute("aria-selected", i === index);
    });

    currentSlide = index;
  }

  // Indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => showSlide(index));
  });

  // Touch swipe functionality
  let touchStartX = 0;

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        showSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
      }
    },
    { passive: true }
  );

  // Initialize
  showSlide(0);
}
