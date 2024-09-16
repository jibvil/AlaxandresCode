// Coordinate Systems
// Alaxandre Chalifour
// 9/11/2024
// Looking how coordinates work in p5.js



function setup() {
  print("Setup runs once, at the start.");
  createCanvas(500, 400);
}

function draw() {
  //runs over and over (targetting 60fps)
  background(220);
  drawCircles();

  //draw some circles
  circle(0,0,50);
  fill(204);
}

function drawCircles(){
  // draw some circles
  fill(255, 0, 0);
  circle(0, 0, 50);

  fill(255, 0, 0);
  circle()
}
