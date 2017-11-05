var button = document.getElementsByClassName("button-wrap");
var menu = document.getElementsByClassName("menu-container");
var nav = document.getElementsByClassName("nav-container");
var buttonOpen = document.getElementsByClassName("nav-button");
var buttonClose = document.getElementsByClassName("nav-close");
var menu_state = 'closed';
	
function toggleMenu(x) {
	if (x == 'open') {
		$(button[0]).hide("slide", {direction: "down"}, 200);
		$(menu).show("slide", {direction: "down"}, 800, function(){ $(button[1]).show("slide", {direction: "down"}, 200); $(menu).css("overflow-y", "scroll"); $(menu).css("pointer-events", "auto")}).delay(500);
		menu_state = 'open';
	}
	else if (x == 'close') {
		$(button[1]).hide("slide", {direction: "down"}, 200);
		$(menu).hide("slide", {direction: "up"}, 800, function(){ $(button[0]).show("slide", {direction: "down"}, 200);$(menu).css("overflow-y", "hidden"); $(menu).css("pointer-events", "none")}).delay(500);
		menu_state = 'closed';
	};
}

$(function(){
    var lastScrollTop = 0, delta = 80;
	var window = document.getElementsByTagName("body");
	var mobile = false;
	var touching = false;
	
	/*$(window).touchmove(function(event){
		mobile = true;
		$(button[0]).hide("slide", {direction: "down"}, 200);
	});*/
	
	document.addEventListener('touchend', function(event){
		touching = false;
		
		setTimeout(function () {
			if ((menu_state == 'closed') && (touching == false)) {
				$(button[0]).show("slide", {direction: "down"}, 200);
			}
			else if ((menu_state == 'closed') && (touching == true)) {
				$(button[0]).hide("slide", {direction: "down"}, 200);
			};
		}, 3000);
	});
	
	document.addEventListener('touchstart', function(event){
		mobile = true;
		touching = true;
		
		setTimeout(function () {
			if ((menu_state == 'closed') && (touching == true)) {
				$(button[0]).hide("slide", {direction: "down"}, 200);
			}
			else if ((menu_state == 'closed') && (touching == false)) {
				$(button[0]).show("slide", {direction: "down"}, 200);
			};
		}, 3000);
	});
	
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
	   
       if((Math.abs(lastScrollTop - st) <= delta) || !($(button[1]).css("display", "none")))
          return;
       
       if (st > lastScrollTop){
			// downscroll code
			$(button[0]).hide("slide", {direction: "down"}, 200);
       } else {
			// upscroll code
			$(button[0]).show("slide", {direction: "down"}, 200)
       }
       lastScrollTop = st;
	   
	   /*if (mobile) {
			$(button[0]).show("slide", {direction: "down"}, 200).delay(3500);
	   }*/
    });
});