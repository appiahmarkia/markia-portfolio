
document.addEventListener("DOMContentLoaded", () => {
  // Animate sections
  const blocks = document.querySelectorAll("section.block");
  blocks.forEach((block, idx) => {
    setTimeout(() => {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }, 140 * (idx + 1));
  });

  // --- Hero tag tap + haptic feedback ---
  const heroTags = document.querySelectorAll(".hero-tags .tag");

  heroTags.forEach(tag => {
    tag.addEventListener("click", () => {
      // Add temporary pop-out class
      tag.classList.add("is-tapped");
      setTimeout(() => {
        tag.classList.remove("is-tapped");
      }, 160); // short pop

      // Try to trigger vibration where supported (mostly Android / some UAs)
      if (navigator.vibrate) {
        navigator.vibrate(10); // 10ms tiny buzz
      }
    });
  });
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

  
