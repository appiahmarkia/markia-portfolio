
document.addEventListener("DOMContentLoaded", () => {
  // Animate sections
  const blocks = document.querySelectorAll("section.block");
  blocks.forEach((block, idx) => {
    setTimeout(() => {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }, 140 * (idx + 1));
  });
document.addEventListener("DOMContentLoaded", () => {

  // Animate blocks
  const blocks = document.querySelectorAll("section.block");
  blocks.forEach((block, idx) => {
    setTimeout(() => {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }, 140 * (idx + 1));
  });

  // --- Time-Based Theme Logic ---
  const now = new Date();
  const hour = now.getHours();

  // Light mode from 6:00 AM to 6:00 PM
  if (hour >= 6 && hour < 18) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

});

  
