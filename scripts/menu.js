function toggleMenu(x) {
	var buttonOpen = document.getElementsByClassName("nav-button");
	var buttonClose = document.getElementsByClassName("nav-close");
	var button = document.getElementsByClassName("button-wrap");
	var menu = document.getElementsByClassName("menu-container");
	
	if (x == 'open') {
		$(button[0]).hide("slide", {direction: "down"}, 200);
		$(menu).show("slide", {direction: "down"}, 800, function(){ $(button[1]).show("slide", {direction: "down"}, 200)}).delay(500);
	}
	else if (x == 'close') {
		$(button[1]).hide("slide", {direction: "down"}, 200);
		$(menu).hide("slide", {direction: "up"}, 800, function(){ $(button[0]).show("slide", {direction: "down"}, 200)}).delay(500);
	};
}
