var slowSpeed = 3;
var normalSpeed = 1;
var fastSpeed = 0.3;
var contentLoaded = false;

var heroWrapper = document.getElementById("hero-wrapper");
heroWrapper.style.height = window.innerHeight + "px";


function LoadContent(i){
	var d = document.getElementById("content-wrapper");
	//d.classList.add("filled");
	//heroWrapper.style.height = (window.innerHeight * 0.6) + "px";
	TweenLite.to(document.getElementById("slide-wrapper"), fastSpeed, {opacity:0, ease:Power2.easeOut});
	TweenLite.to(heroWrapper, fastSpeed, {height:(window.innerHeight * 0.6) + "px", ease:Power2.easeOut, onComplete: LoadVideo});
	TweenLite.to(d, slowSpeed, {className:"+=filled", ease:Power2.easeOut});
	TweenLite.to(window, fastSpeed,{scrollTo:{y:0, ease:Power2.easeOut}});
	
	contentLoaded = true;
}

function LoadVideo() {
	var vidWrapper = document.getElementById("vid-wrapper");
	//document.getElementById("vid-wrapper").classList.remove("invisible");
	TweenLite.to(vidWrapper, slowSpeed, {className:"-=invisible", delay:1 ,ease:Power2.easeOut});
}

var menuState = false;

function MenuToggle(state){
	if ( state != null ) {
		menuState = state;
	} else {
		menuState = !menuState;
	}

	if (menuState) {
		document.getElementById("nav-wrapper").classList.add("down");
	} else {
		document.getElementById("nav-wrapper").classList.remove("down");
	}

	console.log("menu toggled, " + menuState);
}

window.onscroll = function(){
	console.log("Scrolling");
	if(heroWrapper.offsetHeight < document.body.scrollTop) {
		console.log("below the fold");
		MenuToggle(true);
		document.getElementById("menu-btn").style.visibility = "hidden";
		
	} else {
		document.getElementById("menu-btn").style.visibility = "";
		MenuToggle(false);
	}
}

if (contentLoaded = false) {
	window.onresize = function () {
		heroWrapper.style.height = window.innerHeight + "px";
	}
};


var hero = document.getElementById("hero-slider");
var count = 83;
var imageList = [];

function PreloadImages(){
	for (var i = count - 1; i >= 0; i--) {
		var img = "vid/A_rv_logo" + i + ".jpg"
		imageList.push(img);
		new Image().src = img;
	}
}

document.onmousemove = function () {
	//console.log("mouse move , " + window.innerWidth + " , " + event.clientX + " , " + vid.duration + " | " + (event.clientX / window.innerWidth) + " = " + (vid.duration * (event.clientX / window.innerWidth)));
	var width = window.innerWidth;
	var mouseHor = ((event.clientX - (0.25 * width) / (window.innerWidth - (0.25))));
	var mouseHor = event.clientX / window.innerWidth
	var frame = Math.floor( count * mouseHor);
	hero.src = "vid/A_rv_logo" + frame + ".jpg";
}
