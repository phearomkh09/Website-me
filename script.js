/* CONTACT BUTTON */

function goContact(){

  document
  .getElementById("contact")
  .scrollIntoView({
    behavior:"smooth"
  });

}

/* IMAGE SLIDER */

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

/* SNOW EFFECT */

const snowContainer =
document.querySelector(".snow-container");

function createSnow(){

  const snow =
  document.createElement("div");

  snow.classList.add("snowflake");

  snow.innerHTML = "❄";

  snow.style.left =
  Math.random() * window.innerWidth + "px";

  snow.style.fontSize =
  Math.random() * 25 + 10 + "px";

  snow.style.animationDuration =
  Math.random() * 5 + 5 + "s";

  snowContainer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  },5000);

}

/* MORE SNOW */

setInterval(createSnow,200);
