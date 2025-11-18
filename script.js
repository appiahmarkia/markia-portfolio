
document.addEventListener("DOMContentLoaded", () => {
  // Animate sections
  const blocks = document.querySelectorAll("section.block");
  blocks.forEach((block, idx) => {
    setTimeout(() => {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }, 140 * (idx + 1));
  });

  // Theme toggle
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light");
      toggle.innerHTML = '<span>☀</span> Light';
    } else {
      toggle.innerHTML = '<span>☾</span> Dark';
    }

    toggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light");
      if (isLight) {
        toggle.innerHTML = '<span>☀</span> Light';
        localStorage.setItem("theme", "light");
      } else {
        toggle.innerHTML = '<span>☾</span> Dark';
        localStorage.setItem("theme", "dark");
      }
    });
  }
});

