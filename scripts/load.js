jQuery(window).on('load', function() {
	var diamond = document.getElementsByClassName("diamond");
	var loadscreen = document.getElementById("loadscreen-container");
	
	$(diamond).css({ animation: "grow 7s ease-in forwards" });
	$(loadscreen).delay(700).fadeOut("medium");
});