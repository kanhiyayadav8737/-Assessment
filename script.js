// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Start Button click
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  startBtn.innerHTML = `<span>Loading</span> <span class="play">⏳</span>`;
  setTimeout(() => {
    startBtn.innerHTML = `<span>Start</span> <span class="play">▶</span>`;
    alert("Start Clicked 🚀");
  }, 800);
});
