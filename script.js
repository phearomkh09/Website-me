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
  Math.random() * 8 + 12 + "s";

  snowContainer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  },15000);

}

/* LOTS OF SNOW */
setInterval(createSnow,250);

/* CHANGE SONG */

function changeSong(
song,
title,
artist,
cover
){

  const player =
  document.getElementById(
  "musicPlayer"
  );

  const source =
  document.getElementById(
  "musicSource"
  );

  const musicTitle =
  document.getElementById(
  "musicTitle"
  );

  const musicArtist =
  document.getElementById(
  "musicArtist"
  );

  const musicCover =
  document.getElementById(
  "musicCover"
  );

  /* CHANGE SONG */
  source.src = song;

  /* CHANGE TITLE */
  musicTitle.innerHTML =
  title;

  /* CHANGE ARTIST */
  musicArtist.innerHTML =
  artist;

  /* CHANGE COVER */
  musicCover.src = cover;

  /* RELOAD */
  player.load();

  /* PLAY */
  player.play();

}
