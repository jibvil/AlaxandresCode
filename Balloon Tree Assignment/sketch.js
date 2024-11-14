// Balloon Tree Assignment
// Alaxandre C.
// 11/13/2024

let scale = 15;
let seed;

function setup() {
  createCanvas(500, 500);
  background(255);
  
}

function draw() {
  drawTree(width/2, height*.9, 90, 6);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth-1);
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

    //for a 3-branch tree:
    drawTree(x2, y2, angle-18, depth-1);
    drawTree(x2, y2, angle+18, depth-1);
    drawTree(x2, y2, angle+0, depth-1);

    //for leaves to only spawn on a depth less than 5:
    if (depth < 5){
      drawLeaf(x2, y2, random(scale*3-depth*5));
    } 

    
  }
}
