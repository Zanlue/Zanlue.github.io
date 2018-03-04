$(function(){
	$.getJSON("https://zanlue.github.io/scripts/boxes.json", function(json) {
		var boxes = document.getElementById("boxes-wrap");
		var items = json.items;
		console.log(json);
		
		for(var i = 0; i < items.length; i++) { 
			var node = document.createElement("div");
			
			if (items[i].color == (" " || null)) { items[i].color = "#e6e6e6" }; // Default BG Color
			
			node.setAttribute("class", "box-node");
			node.setAttribute("id", items[i].id);
			
			if (parseInt($(document.body).width()) < 701) {
				node.setAttribute("style", "background: " + items[i].color + "; border: 18px solid " + items[i].color + ";");
			}
			else {
				node.setAttribute("style", "background: " + items[i].color + "; border: 18px solid " + items[i].color + ";" + "width: " + (Math.random()*11+20) + "%;");
			}
			
			/*node.innerHTML = '<div class="box-header" style=>' + items[i].title + '</div>' + items[i].text;*/
			if (jQuery.isEmptyObject(items[i].image)) { // Parsing with Images
				node.innerHTML = '<div class="box-header" style=>' + items[i].title + '</div>' + items[i].text;
			}
			else {
				node.innerHTML = '<div style="height: 150px; margin:0 auto; margin:10px 10px 10px 10px;"><img src=' + items[i].image + ' style="width:auto; max-height:100%;"></div><div class="box-header" style=>' + items[i].title + '</div>' + items[i].text;
			};
			boxes.appendChild(node);
			if (parseInt($(document.body).width()) > 700) { (document.querySelector('footer')).parentNode.appendChild(document.querySelector('footer')); }
		}
	});
});
