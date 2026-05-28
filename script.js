function goContact(){

  document
  .getElementById("contact")
  .scrollIntoView({
    behavior:"smooth"
  });

}

/* SLIDER */

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

  slides.forEach(slide =>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

setInterval(()=>{

  current++;

  if(current >= slides.length){
    current = 0;
  }

  showSlide(current);

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
  Math.random() * 20 + 10 + "px";

  snow.style.animationDuration =
  Math.random() * 3 + 2 + "s";

  snowContainer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  },5000);

}

setInterval(createSnow,100);
