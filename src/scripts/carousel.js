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

  // Navigation functions
  function nextSlide() {
    showSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }

  // Indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Touch swipe functionality
  let touchStartX = 0;
  let touchStartY = 0;

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Only trigger if horizontal swipe is more significant than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        showSlide(diffX > 0 ? currentSlide + 1 : currentSlide - 1);
      }
    },
    { passive: true }
  );

  // Desktop arrow navigation
  function addDesktopNavigation() {
    if (window.innerWidth >= 768) {
      carousel.addEventListener("click", (e) => {
        const rect = carousel.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const carouselWidth = rect.width;

        // Left arrow area (first 80px)
        if (clickX < 80) {
          prevSlide();
        }
        // Right arrow area (last 80px)
        else if (clickX > carouselWidth - 80) {
          nextSlide();
        }
      });
    }
  }

  // Keyboard navigation
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  // Make carousel focusable for keyboard navigation
  carousel.setAttribute("tabindex", "0");

  // Initialize
  showSlide(0);
  addDesktopNavigation();

  // Handle window resize
  window.addEventListener("resize", addDesktopNavigation);
}
