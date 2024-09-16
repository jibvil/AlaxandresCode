// Drawing Challenge
// Alaxandre Chalifour
// 9/13/2024
//

let rX = 100;   let rY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  //moving rectangle
  if(keyIsPressed && key==="a"){
    rY += 2;
    if (rY > height) rY = 0;
  }

  fill("magenta");
  rect(rX, rY, 100, 50, 10, 20, 0, 10);
}

function keyPressed(){
  //don't call this function
  //it runs automatically
  if(KeyCode === DOWN_ARROW){
    rY += 50;
  } //40 - DOWN
}