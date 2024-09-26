// State Variable Partner Challenge
// Alaxandre & Jayden
// 9/26/2024

let direction = 0 
let sX = 40;
let sY = 40;
let speed = 6;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  squareS();
  
}


function squareS() {
  

  
  fill(50,50,50);
  rect(sX, sY, 80, 80);


  if(direction === 0){
    sX += speed;
    if(sX >= width-40){
      direction = 1
    }
  }
  if(direction === 1){
    sY += speed;
    if(sY >= height-40){
      direction = 2
    }
  }
  if(direction === 2){
    sX -= speed;
    if(sX < 40){
      direction = 3
    }
  }
  if(direction === 3){
    sY -= speed;
    if(sY < 40){
      direction = 0;
    }
  }

}

function keyPressed() {
  if (key = "w"){
    speed += 3;
    if (speed > 30){
      speed = 30;
    }
  }
  else if (key = "s"){
    speed -= 2;
    if (speed = 1){
      speed = 1;
    }
  }
}