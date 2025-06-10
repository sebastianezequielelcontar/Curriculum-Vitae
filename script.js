// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");

  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    section.style.transition = `all 0.6s ease ${(index + 1) * 0.2}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
});