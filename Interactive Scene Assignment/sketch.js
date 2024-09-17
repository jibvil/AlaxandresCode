// Interactive Scene
// Alaxandre Chalifour
// 9/16/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// makes the fly follow the cursor
let flyX = mouseX;   let flyY = mouseY;

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background("Green");
  // Making the fly
  fill("Black");
  rect(mouseX, mouseY, 10, 5, 90, 90);
  // Background crap
  
  fill("Gray");
  rect(300, 250, 150, 200,);

}
