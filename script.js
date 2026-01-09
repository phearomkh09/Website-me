// ================== DARK / LIGHT MODE ==================
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ================== SCROLL REVEAL ==================
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// ================== CONTACT BUTTON SMOOTH SCROLL ==================
function goContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// ================== HAMBURGER MENU ==================
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
});