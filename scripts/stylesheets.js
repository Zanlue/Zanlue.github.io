function adjustStyle(width) {
  width = parseInt(width);
  if (width < 701 || !CSS.supports("grid-area: auto")) {
    $("#size-stylesheet").attr("href", "./mobile.css");
  }
  else {
    $("#size-stylesheet").attr("href", "./main.css");
	  $(document.getElementsByClassName("menu-container")).show();
	  $(document.getElementsByClassName("projectinfo-img")).show();
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});
