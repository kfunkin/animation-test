let intro = document.querySelector("#intro-screen");
let scene1 = document.querySelector("#scene1");
let tomsk = document.querySelector("#tomsk-ext");
let bigstripes = document.querySelector("#big-stripes");
let tomskblktxt = document.querySelector("#tomsk-blk-txt");
let tomskpnktxt = document.querySelector("#tomsk-pnk-txt");
let audio = document.querySelector("#groove");



intro.addEventListener("click", function()  {
  window.scrollTo({
    top: document.querySelector('#scene1').offsetTop,
    behavior: "smooth"
  })
  audio.play();
  tomsk.style.animation = "tomsk-ext-anim 3s ease-in";
  tomsk.style.animationFillMode = "forwards";
  bigstripes.style.animation = "big-stripes-anim 3s ease-in";
  bigstripes.style.animationFillMode = "forwards";
  tomskblktxt.style.animationDelay = "2s";
  tomskblktxt.style.animation = "tomsk-blk-anim 2s ease-in";
  tomskblktxt.style.animationFillMode = "forwards";
  tomskpnktxt.style.animation = "tomsk-pnk-anim 2s ease-in";
  tomskpnktxt.style.animationFillMode = "forwards";
});

let scene2 = document.querySelector("#scene2");
let blueCircle = document.querySelector("#blue-circle");


scene1.addEventListener("click", function() {
  window.scrollTo({
    top: document.querySelector('#scene2').offsetTop,
    behavior: "smooth"
  })
  blueCircle.style.animation = "blue-circle-anim 2s linear infinite";
});

let scene3 = document.querySelector("#scene3");

scene2.addEventListener("click", function() {
  window.scrollTo({
    top: document.querySelector('#scene3').offsetTop,
    behavior: "smooth"

  })
});
