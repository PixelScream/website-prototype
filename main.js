console.log(document.getElementById("content"));

var heroWrapper = document.getElementById("hero-wrapper");
heroWrapper.style.height = (window.innerHeight - 20) + "px";

var slowSpeed = 3;
var normalSpeed = 1;
var fastSpeed = 0.3;






function LoadContent(i){
	var d = document.getElementById("content");
	//d.classList.add("filled");
	//heroWrapper.style.height = (window.innerHeight * 0.6) + "px";
	TweenLite.to(heroWrapper, fastSpeed, {height:(window.innerHeight * 0.6) + "px", ease:Power2.easeOut});
	TweenLite.to(d, slowSpeed, {className:"+=filled", ease:Power2.easeOut});
	//TweenLite.to(d, 3, {className:"+=filled"});
	TweenLite.to(window, fastSpeed,{scrollTo:{y:0, ease:Power2.easeOut}});

}

var menuState = false;
function MenuToggle(state){
	if ( state != null ) {
		menuState = state;
	} else {
		menuState = !menuState;
	}
	console.log(menuState);
}

window.onscroll = function(){
	console.log("Scrolling");
	if(heroWrapper.offsetHeight < document.body.scrollTop) {
		console.log("below the fold");
		MenuToggle(true);
		document.getElementById("menu-btn").style.visibility = "hidden";
	} else {
		document.getElementById("menu-btn").style.visibility = "";
	}
}

var heroLinks = document.getElementsByClassName("hero-link");

for (var i = heroLinks.length - 1; i >= 0; i--) {
	heroLinks[i].onmouseover = function() {
		console.log(this.parentNode);
		//TweenLite.to(this.parentNode, fastSpeed, {className:"+=over", ease:Power2.easeOut});
		this.parentNode.classList.add("over");
	}
	heroLinks[i].onmouseout = function() {
		console.log("mousing out");
		//TweenLite.to(this.parentNode, fastSpeed, {className:"-=over", ease:Power2.easeOut});
		this.parentNode.classList.remove("over");
	}
};


/*
var vid = document.getElementById("bgvid");
vid.muted = true;

document.onmousemove = function () {
	console.log("mouse move , " + window.innerWidth + " , " + event.clientX + " , " + vid.duration + " | " + (event.clientX / window.innerWidth) + " = " + (vid.duration * (event.clientX / window.innerWidth)));
	vid.currentTime = vid.duration * (event.clientX / window.innerWidth);
}
*/

var hero = document.getElementById("hero-slider");
var count = 11;
var imageList = [];

function PreloadImages(){
	for (var i = count - 1; i >= 0; i--) {
		var img = "vid/rv_logo" + i + ".jpg"
		imageList.push(img);
		new Image().src = img;
	}
}

document.onmousemove = function () {
	//console.log("mouse move , " + window.innerWidth + " , " + event.clientX + " , " + vid.duration + " | " + (event.clientX / window.innerWidth) + " = " + (vid.duration * (event.clientX / window.innerWidth)));
	var frame = Math.floor( count * (event.clientX / window.innerWidth));
	hero.src = "vid/rv_logo" + frame + ".jpg";
}