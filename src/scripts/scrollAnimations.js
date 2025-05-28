export function setupScrollAnimations() {
  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px 0px -50px 0px",
    }
  );

  // Observe elements that should animate
  const animateElements = document.querySelectorAll(
    ".intro__homepage, .projects__section, .project__card, .about__profile, .about__skills, .contact-hero, .contact-form-section, .fun-facts"
  );

  animateElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

  // Stagger animations for project cards
  const projectCards = document.querySelectorAll(".project__card");
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}
