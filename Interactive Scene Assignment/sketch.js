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

  // Background crap
  noStroke()
  // Trashcan
  fill("Gray");
  rect(300, 250, 150, 200);
  ellipse(375, 450, 150, 70);
  fill(150, 150, 150);
  ellipse(375, 250, 150, 70);
  fill("Gray");
  rect(390, 236, 6, 18);
  rect(355, 236, 6, 18);
  rect(355, 233, 41, 6, 90, 90);
  //garbage bag
  
  //banana peel
  fill(255, 202, 24);
  ellipse(220, 450, 35, 30);
  ellipse(190, 450, 35, 30);
  fill("green");
  ellipse(224, 443, 35, 35);
  ellipse(186, 443, 35, 35);
  fill(255, 202, 24);
  triangle(205, 446, 198, 440, 211, 440)

}
