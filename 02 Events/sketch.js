// Events (Mouse/Keyboard)
// Alaxandre Chalifour
// 9/12/2024

//Global Variable Scope
let tSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // if(mouseIsPressed) tSize = random(20, 80)
  let position = mouseX + ", " + mouseY;
  print(position);
  textSize(tSize);
  text(position, mouseX - 50, mouseY);
}

function mousePressed(){
  tSize = random(20, 200);
}