/* =========================
   CONTACT BUTTON
========================= */

function goContact(){

  document
  .getElementById("contact")
  .scrollIntoView({
    behavior:"smooth"
  });

}

/* =========================
   IMAGE SLIDER
========================= */

const slides =
document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

  slides[index]
  .classList.remove("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index]
  .classList.add("active");

},3000);

/* =========================
   SNOW EFFECT
========================= */

const snowContainer =
document.querySelector(".snow-container");

function createSnow(){

  const snow =
  document.createElement("div");

  snow.className = "snowflake";

  snow.innerHTML = "❄";

  /* RANDOM POSITION */
  snow.style.left =
  Math.random() * 100 + "vw";

  /* RANDOM SIZE */
  snow.style.fontSize =
  Math.random() * 15 + 15 + "px";

  /* RANDOM SPEED */
  snow.style.animationDuration =
  Math.random() * 5 + 8 + "s";

  snowContainer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  },15000);

}

/* LOTS OF SNOW */
setInterval(createSnow,170);
