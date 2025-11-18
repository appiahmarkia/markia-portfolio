
document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("section.block");
  blocks.forEach((block, idx) => {
    setTimeout(() => {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }, 140 * (idx + 1));
  });
});
