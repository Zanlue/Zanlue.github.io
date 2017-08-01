var slideIndex = 1;
var originalIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n, originalIndex);
}

function showDivs(n, o) { // n = "New Slide", o = "Original Slide"
    var i;
    var x = document.getElementsByClassName("projectinfo-container");
	var title = document.getElementsByClassName("projectinfo-title");
	var text = document.getElementsByClassName("projectinfo-content");
	var img = document.getElementsByClassName("projectinfo-img");
	
    if (n > x.length) {slideIndex = 1} // If we're at the end of the array and going right, jump to the beginning of the array
    if (n < 1) {slideIndex = x.length} ; // If we're at the start of the array and going left, jump to the end of the array
	
    for (i = 0; i < x.length; i++) { // For whatever is visible
		$(x[i]).fadeOut("medium");
		if (n > o) { // If our new value is larger than the original, we're going right (Swipe Left)
			$(img[i]).hide("slide", {direction: "left"}, 500);
		}
		else if (n <= o) { // Otherwise, we're going left (Swipe Right)
			$(img[i]).hide("slide", {direction: "right"}, 500);
		};
    }
	
	// Next page of content
	$(x[slideIndex-1]).fadeIn("medium")
	if (n > o) { // If our new value is larger than the original, we're going right (Swipe Left) 
		$(img[slideIndex-1]).show("slide", {direction: "right"}, 500);
	}
	else if (n <= o) { // Otherwise, we're going left (Swipe Right)
		$(img[slideIndex-1]).show("slide", {direction: "left"}, 500);
	};
	originalIndex = slideIndex; // Our new slide is now the original/current one that we're viewing
}