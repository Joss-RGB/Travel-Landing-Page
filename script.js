// Typing Effect
const typingText = document.getElementById("typing-text");
const text = "Discover the world with us";
let index = 0;

function typing() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typing, 100);
  }
}
typing();

// Modal Logic
const modal = document.getElementById("modal");
const btn = document.getElementById("offer-btn");
const close = document.getElementById("close");

btn.addEventListener("click", () => (modal.style.display = "flex"));
close.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Screen Control with Scroll
let currentScreen = 0;
const screens = document.querySelectorAll(".screen");
screens[currentScreen].classList.add("active");

let scrollAccumulator = 0;
const threshold = 150;
let isScrolling = false;

window.addEventListener("wheel", (e) => {
  if (isScrolling) return; // debounce
  scrollAccumulator += e.deltaY;

  if (scrollAccumulator > threshold && currentScreen < screens.length - 1) {
    changeScreen(currentScreen + 1);
  } else if (scrollAccumulator < -threshold && currentScreen > 0) {
    changeScreen(currentScreen - 1);
  }
});

function changeScreen(nextIndex) {
  screens[currentScreen].classList.remove("active");
  currentScreen = nextIndex;
  screens[currentScreen].classList.add("active");
  scrollAccumulator = 0;
  isScrolling = true;
  setTimeout(() => (isScrolling = false), 800); // prevent rapid switching
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("input").value;
  if (email) {
    localStorage.setItem("newsletterEmail", email);
    alert("Thanks for subscribing, " + email + "!");
    form.reset();
  } else {
    alert("Please enter a valid email.");
  }
});
