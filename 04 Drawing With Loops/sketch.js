// Drawing with loops
//Alaxandre C
// 9/19/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  myBackground();
  myForeground();
}

function myBackground(){
  
  let rectHeight = 1;
  noStroke();
  //y:
  for(let y = 0; y < height; y += rectHeight){
    let value = map(y,0,width,0,255);
    fill(0,value,value);
    rect(0, y, width, rectHeight);
  }
}

function myForeground(){

  for (let x = 0 ; x < mouseX; x = x + 40){
  fill(0);
  circle(x, height/2, 40);
  fill(255);
  text(x, x,height/2);
  }

  //draw some stars
  randomSeed(2);
  let starCount = 0;
  fill(255, 0, 0);
  while(starCount < 100){
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 25);
    starCount++;
  }
}