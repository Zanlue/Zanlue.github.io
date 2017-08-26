var button = document.getElementsByClassName("button-wrap");
var menu = document.getElementsByClassName("menu-container");
var nav = document.getElementsByClassName("nav-container");
var buttonOpen = document.getElementsByClassName("nav-button");
var buttonClose = document.getElementsByClassName("nav-close");
	
function toggleMenu(x) {
	if (x == 'open') {
		$(button[0]).hide("slide", {direction: "down"}, 200);
		$(menu).show("slide", {direction: "down"}, 800, function(){ $(button[1]).show("slide", {direction: "down"}, 200)}).delay(500);
		$(nav).css("overflow-y", "scroll");
		$(nav).css("pointer-events", "auto");
	}
	else if (x == 'close') {
		$(button[1]).hide("slide", {direction: "down"}, 200);
		$(menu).hide("slide", {direction: "up"}, 800, function(){ $(button[0]).show("slide", {direction: "down"}, 200)}).delay(500);
		$(nav).css("overflow-y", "hidden");
		$(nav).css("pointer-events", "none");
	};
}

$(function(){
    var lastScrollTop = 0, delta = 80;
	var window = document.getElementsByTagName("body");
	
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
    });
});
