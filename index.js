window.addEventListener('load', function () {
	var src = document.getElementById("images").getElementsByTagName("img"),
	img = function img (imgLocation, x, y) {
		var d = document.createElement("div");
		d. className = "frame";
		d.style.left = 50 * x + "%";
		d.style.top = 50 * y + "%";
		var img = document.createElement("img");
		img.className = "img"; 
		img.src = src[Math.floor(Math.random()*src.length)].src; //makes imgs random after clicking
		img.onmousedown = function () { //works upon mouse click
			div(this.parentNode); 
			this.parentNode.removeChild(this); //takes away image clicked on and divides it by 4
		}
		d.appendChild(img);
		imgLocation.appendChild(d);
	},
	div = function div (imgLocation) {
		img (imgLocation, 0,0); //upper left
		img (imgLocation, 1,0); //upper right
		img (imgLocation, 0,1); //lower left
		img (imgLocation, 1,1); //lower right
	};
	div(document.getElementById("screen"));
	window.ondragstart= function() {return false;}

}, false);