$(function(){
	$.getJSON("https://zanlue.github.io/scripts/boxes.json", function(json) {
		var boxes = document.getElementById("boxes-wrap");
		var items = json.items;
		console.log(json);
		for(var i = 0; i < items.length; i++) {
			var node = document.createElement("div");
			node.setAttribute("class", "box-node");
			node.setAttribute("id", items[i].id);
			
			node.innerHTML = '<div class="box-header" style="background:' + items[i].color + '; border: 18px solid' + items[i].color + ';">' + items[i].title + '</div>' + items[i].text;
			boxes.appendChild(node);
		}
	});
	console.log("im out...");
});
