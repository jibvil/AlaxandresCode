// Balloon Tree Assignment
// Alaxandre C.
// 11/13/2024

let scale = 15;
let seed;
let depth;

function setup() {
  createCanvas(500, 500);
  seed = random(255);
}

function draw() {
  background(255);
  drawTree(width/2, height*.9, 90, 6);
  randomSeed(seed);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //make the line skinnier the higher the depth is
  strokeWeight(depth-0.5);
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawLeaf(x2,y2,scale){
  //add a leaf to the end of each line
  strokeWeight(1);
  fill(random(255),random(255),random(255));
  circle(x2, y2, scale);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth
    
    drawLine(x1, y1, x2, y2, depth);

    let sway = map(mouseX, 0, width, 15, 50);

    //for a 3-branch tree:
    drawTree(x2, y2, angle-sway, depth-1);
    drawTree(x2, y2, angle+sway, depth-1);
    drawTree(x2, y2, angle, depth-1);

    //for leaves to only spawn on a depth less than 5:
    if (depth < 5){
      drawLeaf(x2, y2, random(scale*3-depth*5));
    }
  }
}

function keyPressed(){
  if(keyCode === 90){
    depth -= 1;
  }

  else if(keyCode === 88){
    depth += 1;
  }
}