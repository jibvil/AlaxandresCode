// Cars Cars Cars! Assignment
// Alaxandre Chalifour
// 10/25/2024


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("Green");
  drawRoad();
  drawCar();
}

function drawRoad(){
  //gotta have a place for cars to drive on y'know!

  noStroke();
  fill(30);
  rect(0, windowHeight/3, windowWidth, windowHeight/3);

  //lines for the cars to stay between

  strokeWeight(4);
  stroke(255, 255, 255);
  line(0, windowHeight/3 + 20, windowWidth, windowHeight/3 + 20);
  line(0, windowHeight/3 * 2 - 20, windowWidth, windowHeight/3 * 2 - 20);
  stroke("Yellow");
  drawingContext.setLineDash([20, 20]);
  line(0, windowHeight/2, windowWidth, windowHeight/2);
}

class Cars {
  constructor(x, y, type, color, direction, xSpeed) {
    this.x = x;
    this.y = y;

  }
}

function drawCar(){
  noStroke();
  rect(40, 40, 40 ,40);
}