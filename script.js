/* ===================================
      WAGN LOVE WEBSITE
      script.js - Part 1
=================================== */

const typing = document.getElementById("typing");
const startButton = document.getElementById("startButton");

const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");

const music = document.getElementById("bgMusic");

const slides = document.querySelectorAll(".slide");

const nextButton = document.getElementById("nextSlide");

const message =
"Sevgilim, bu sayt sənin üçündür... 💗";

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

window.onload = ()=>{

    typeWriter();

}

/* ===========================
      BUTTON
=========================== */

startButton.onclick = ()=>{

    intro.style.display="none";

    gallery.style.display="flex";

    gallery.classList.remove("hidden");

    music.play();

}

/* ===========================
      SLIDER
=========================== */

let currentSlide = 0;

nextButton.onclick = ()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

ending.style.display="flex";

gallery.style.display="none";

ending.classList.remove("hidden");

heartExplosion();

return;

}

slides[currentSlide].classList.add("active");

}

/* ===========================
      FLOATING HEARTS
=========================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💗";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=(18+Math.random()*35)+"px";

heart.style.animation="floatHeart 8s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);

/* ===========================
      STARS
=========================== */

const stars=document.getElementById("stars");

for(let i=0;i<150;i++){

let star=document.createElement("span");

star.style.position="absolute";

star.style.width="2px";

star.style.height="2px";

star.style.background="white";

star.style.borderRadius="50%";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.opacity=Math.random();

star.style.boxShadow="0 0 12px white";

stars.appendChild(star);

}

/* ===========================
   FINAL HEART EXPLOSION
=========================== */

function heartExplosion(){

for(let i=0;i<120;i++){

setTimeout(()=>{

createHeart();

},i*30);

}

}