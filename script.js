/* =========================
   CONTACT BUTTON
========================= */

function goContact() {
  document
  .getElementById("contact")
  ?.scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   IMAGE SLIDER
========================= */

const slides =
document.querySelectorAll(".slide");

if(slides.length){

let index = 0;

setInterval(()=>{

slides[index]
.classList.remove("active");

index =
(index+1)
%slides.length;

slides[index]
.classList.add("active");

},3000);

}

/* =========================
   SNOW EFFECT
========================= */

const snowContainer =
document.querySelector(
".snow-container"
);

function createSnow(){

if(!snowContainer) return;

const snow =
document.createElement("div");

snow.className =
"snowflake";

snow.innerHTML =
"❄";

snow.style.left =
Math.random()*100+"vw";

snow.style.fontSize =
Math.random()*15+15+"px";

snow.style.animationDuration =
Math.random()*8+12+"s";

snowContainer
.appendChild(snow);

setTimeout(
()=>snow.remove(),
15000
);

}

setInterval(
createSnow,
250
);

/* =========================
   MUSIC PLAYER
========================= */

const player =
document.getElementById(
"musicPlayer"
);

const source =
document.getElementById(
"musicSource"
);

const cover =
document.getElementById(
"musicCover"
);

const title =
document.getElementById(
"musicTitle"
);

const artist =
document.getElementById(
"musicArtist"
);

/* 6 SONGS */

const songs=[

[
"music1.mp3",
"រាល់សូរតំណក់ទឹកភ្លៀង",
"Artist: Mann Doss",
"cover1.jpg"
],

[
"music2.mp3",
"សេកុង",
"Artist: Mann Doss",
"cover2.jpg"
],

[
"music3.mp3",
"YOUNG GOAT - បង់បោយ",
"Artist: Young Goat",
"cover3.jpg"
],

[
"music4.mp3",
"NIGHT THINKER",
"Artist: Mann Vannda",
"cover4.jpg"
],

[
"music5.mp3",
"Way You Are",
"Artist: Jady | Jenna Norodom",
"cover5.jpg"
],

[
"music6.mp3",
"LOVE SICK BLUE",
"Artist: Mann Vannda",
"cover6.jpg"
]

];

let current=0;

/* CHANGE SONG */

function changeSong(
src,
songTitle,
songArtist,
songCover
){

source.src =
src;

player.load();

cover.src =
songCover;

title.innerText =
songTitle;

artist.innerText =
songArtist;

/* LOCK SCREEN */

if(
"mediaSession"
in navigator
){

navigator
.mediaSession
.metadata =

new MediaMetadata({

title:
songTitle,

artist:
songArtist,

album:
"X'zen Official",

artwork:[

{
src:
songCover,

sizes:
"512x512",

type:
"image/jpeg"
}

]

});

}

/* PLAY */

player.play();

current =
songs.findIndex(
s =>
s[0]===src
);

}

/* NEXT */

navigator
.mediaSession
?.setActionHandler(
"nexttrack",
()=>{

current=
(current+1)
%songs.length;

changeSong(
...songs[current]
);

}
);

/* PREVIOUS */

navigator
.mediaSession
?.setActionHandler(
"previoustrack",
()=>{

current=
(
current-1+
songs.length
)
%songs.length;

changeSong(
...songs[current]
);

}
);

/* PLAY */

navigator
.mediaSession
?.setActionHandler(
"play",
()=>player.play()
);

/* PAUSE */

navigator
.mediaSession
?.setActionHandler(
"pause",
()=>player.pause()
);

/* DEFAULT INFO */

title.innerText =
"ជ្រើសរើសចម្រៀង 🎵";

artist.innerText =
"Artist: Unknown";

cover.src =
"Unknown.jpg";

/* AUTO NEXT SONG */

player.addEventListener(
"ended",
()=>{

current=
(current+1)
%songs.length;

changeSong(
...songs[current]
);

}
);

/* PAUSE WHEN LEAVE PAGE */

document.addEventListener(
"visibilitychange",
()=>{

if(
document.hidden
){

player.pause();

}

}
);