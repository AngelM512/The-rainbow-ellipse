var x = 0;
var start = 300;
var speed = 3;
function setup() {
	createCanvas(600, 400);

}
// function draw is a while loop
function draw() {
	background(0);
	stroke(255);
	strokeWeight(5);
	noFill();



	if (start > 300){
		fill(150,100,50); // color pink
		if (start > width){
			speed = speed - 3
		}
	}
	if (start < 299) {
		fill(89,12,44); // color camo green
		 if (start == 0) {
		 	speed = speed + 3
		}
	}
	ellipse(start,200,120,120); // circle starting point 300px
	start = start + speed;

}
