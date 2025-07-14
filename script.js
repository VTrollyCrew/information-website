function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu");
  const icon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector(".menu-overlay");
  const body = document.body;

  // Toggle classes
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
  icon.classList.toggle("open");
  body.classList.toggle("menu-open");

  // Close menu when clicking on links
  const menuLinks = document.querySelectorAll(".menu-links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      overlay.classList.remove("open");
      icon.classList.remove("open");
      body.classList.remove("menu-open");
    });
  });
}

// Close menu when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const menu = document.querySelector(".hamburger-menu");
    if (menu.classList.contains("open")) {
      toggleMenu();
    }
  }
});

// Wait for everything to load
window.addEventListener("load", function () {
  // Fade out splash screen
  const splash = document.getElementById("splash-screen");
  splash.classList.add("fade-out");

  // Show main content
  document.getElementById("main-content").style.display = "block";

  // Remove splash screen after animation completes
  setTimeout(() => {
    splash.style.display = "none";
  }, 500); // Match this with your CSS transition time
});

// Advanced splash screen with progress updates
document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash-screen");
  const progressBar = document.querySelector(".splash-loader-bar");
  const mainContent = document.getElementById("main-content");

  // Simulate loading progress (replace with actual loading logic)
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      transitionToMainContent();
    }
    progressBar.style.width = progress + "%";
  }, 200);

  function transitionToMainContent() {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  }

  // Fallback in case loading stalls
  setTimeout(transitionToMainContent, 5000);
});

// Minimum display time for branding
const minDisplayTime = 2000; // 2 seconds
const startTime = Date.now();

window.addEventListener("load", function () {
  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, minDisplayTime - elapsed);

  setTimeout(() => {
    document.getElementById("splash-screen").classList.add("fade-out");
    document.getElementById("main-content").style.display = "block";

    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
    }, 500);
  }, remaining);
});
