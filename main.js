
//BUTTONS!////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let playSectionOne = document.querySelector("#section1BtnBck");
let toSectionTwo = document.querySelector("#section1BtnFwd");
let backToSectionOne = document.querySelector("#section2BtnBck");
let toSectionThree = document.querySelector("#section2BtnFwd");
let backToSectionTwo = document.querySelector("#section3BtnBck");
let toSectionFour = document.querySelector("#section3BtnFwd");



//DECLARE TIMELINES HERE*******************************************************************************************

var sceneOneTL = new TimelineMax({
  //functions in here!
  paused: false
});

var sceneTwoTL = new TimelineMax({
	paused: true
});

var sceneThreeTL = new TimelineMax({
  paused: true
});


//DECLARE AUDIO HERE!///////////////////////////////////////////////////////////////////////////////////////

var thisTime = new Howl({
  src: ["assets/this-time.mp3"]
});

var funkComrades = new Howl({
  src: ["assets/FunkComrades.mp3"]
});




//SECTION1 GSAP TIMELINE... LET'S SEE HOW IT COMPARES TO CSS...


Draggable.create("#section1BtnFwd", {
	type:"y",
	//bounds: document.getElementById("#tomsk"),
	/*onClick:function() {
		console.log("clicked");
	},
	onDragEnd:function() {
		console.log("drag ended");
	}*/
});


sceneOneTL.to("#tomsk", 8, {x: -800, ease: Back.easeOut.config(1.7)})
          .to("#big-stripes", 10, {x: -100, ease: Back.easeOut}, "-=5")
          .to("#tomsk-txt", 5, {opacity:"1", ease: Back.easeOut}, "-=10")
          .to("#tomsk", 10, {scale: 3, ease: ExpoScaleEase.config(1, 3)}, "-=10")
          .to("#tomsk-txt", 3, {opacity:"0", ease: Back.easeOut}, "-=3")
          .to("#tomsk", 5, {opacity:"0", ease: Back.easeOut}, "-=3")
          .to("#big-stripes", 8, {opacity:"0", ease: Back.easeOut}, "-=3")
          .to("#section1BtnFwd", 5, {opacity:"1"}, "-=7")
					.to("#logo-1", 3, {opacity: "1", }, "-=8");



thisTime.play();

/*playSectionOne.addEventListener('click', function(){
  sceneOneTL.play();
  thisTime.play();
});*/

toSectionTwo.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTwo').offsetTop,
    behavior: "smooth"
  });
  thisTime.stop();
  sceneOneTL.stop();
	sceneTwoTL.restart();
});


//SECTION2 !!///////////////////////////////////////////////////////////////////////////////////////////////
backToSectionOne.addEventListener('click', function(){
  window.scrollTo({
    top: document.querySelector('#sectionOne').offsetTop,
    behavior: "smooth"
  });
  sceneOneTL.restart();
  thisTime.play();
	sceneTwoTL.stop();

});



sceneTwoTL.to("#alexei-head", 0.5, {rotation: "-=20"})
					.to("#alexei-d2", 1, {opacity: 1})
					.to("#blue-circle", 1, {opacity: 0.5})
					.to("#section2BtnBck", 1, {opacity: 1})
          .to("#section2BtnFwd", 1, {opacity: 1});
					//.to("#yaroslav-body", 1, )
					//animate yaroslav hiding behind button


toSectionThree.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionThree').offsetTop,
    behavior: "smooth"
  });
  sceneTwoTL.stop();
  funkComrades.play();
});

//SECTION3//////////////////////////////////////////////////////////////////////////////////////////////////////
backToSectionTwo.addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#sectionTwo').offsetTop,
    behavior: "smooth"
  });
  sceneTwoTL.restart();
  sceneThreeTL.stop();
  funkComrades.stop();
});

//USE MUDDYFUNK GROOVE WITH BEN FOR FUNK COMRADES!

//sceneThreeTL.to({});


toSectionFour.addEventListener('click', function(){
  window.scrollTo({
    top: document.querySelector('#sectionFour').offsetTop,
    behavior: "smooth"
  });
  sceneThreeTL.stop();
});
