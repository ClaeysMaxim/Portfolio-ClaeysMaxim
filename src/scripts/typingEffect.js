export function setupTypingEffect() {
  const titleElement = document.querySelector(".intro__title__homepage");
  if (!titleElement) return;

  const text = titleElement.textContent;
  const typingSpeed = 100; // milliseconds per character
  const pauseBeforeRestart = 2000; // pause before typing again
  const deleteSpeed = 50; // speed of deleting characters

  titleElement.textContent = "";
  titleElement.style.borderRight = "2px solid var(--accent-color)";
  titleElement.style.animation = "blink-cursor 1s infinite";

  let charIndex = 0;
  let isDeleting = false;
  let isComplete = false;

  function typeWriter() {
    if (!isDeleting && charIndex < text.length) {
      // Typing characters
      titleElement.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else if (!isDeleting && charIndex === text.length) {
      // Finished typing, pause then start deleting
      isComplete = true;
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, pauseBeforeRestart);
    } else if (isDeleting && charIndex > 0) {
      // Deleting characters
      titleElement.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, start typing again
      isDeleting = false;
      isComplete = false;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  // Start the typing effect
  setTimeout(typeWriter, 500); // small delay before starting
}
