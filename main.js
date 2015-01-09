console.log(document.getElementById("content"));

var heroWrapper = document.getElementById("hero-wrapper");
heroWrapper.style.height = window.innerHeight + "px";

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