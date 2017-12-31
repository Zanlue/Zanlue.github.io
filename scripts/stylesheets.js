function adjustStyle(width) {
  width = parseInt(width);
  if (width < 701) {
    $("#size-stylesheet").attr("href", "./mobile.css");
  }
  else {
     $("#size-stylesheet").attr("href", "./main.css"); 
	 $(document.getElementsByClassName("menu-container")).show();
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});