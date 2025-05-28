/* filepath: c:\Users\maxim\OneDrive\Documenten\1. Artevelde\Jaar 1\Semester 2\IT Portfolio\portfolio\portfolio-ClaeysMaxim\src\scripts\skillBars.js */
export function setupSkillBars() {
  const skillItems = document.querySelectorAll(".skill-progress");

  // Skill levels (percentages)
  const skillLevels = {
    "HTML & CSS": 90,
    JavaScript: 75,
    React: 65,
    "Node.js": 70,
    PHP: 60,
    Python: 55,
    MySQL: 70,
    Git: 80,
    Figma: 75,
    Docker: 25,
    Express: 65,
  };

  // Create intersection observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillNameElement = entry.target.querySelector(
            ".skill-progress__name"
          );
          // Get only the text content, trim whitespace, and remove extra spaces
          const skillName = skillNameElement.textContent
            .trim()
            .replace(/\s+/g, " ");

          const progressBar = entry.target.querySelector(
            ".skill-progress__bar-fill"
          );
          const percentage = entry.target.querySelector(
            ".skill-progress__percentage"
          );

          const skillLevel = skillLevels[skillName] || 50;

          // Debug log to see what skill name we're getting
          console.log(`Skill: "${skillName}" -> ${skillLevel}%`);

          // Animate the progress bar
          setTimeout(() => {
            progressBar.style.width = `${skillLevel}%`;

            // Animate the percentage counter
            animateCounter(percentage, skillLevel);
          }, 200);

          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all skill items
  skillItems.forEach((item) => {
    observer.observe(item);
  });

  // Animate counter function
  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = `${Math.round(current)}%`;
    }, 16); // ~60fps
  }
}
