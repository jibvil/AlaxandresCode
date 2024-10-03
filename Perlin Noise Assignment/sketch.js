// Perlin Noise Project
// Your Name
// Date
let noiseVar = 10;
let rectWidth = 5;
let rectHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  generateTerrain();
}

function generateTerrain() {
    //draw a staircase using loops
    randomSeed(2);
    for(let x = 0; x < width; x += rectWidth){
      //20...rectangle spacing / rectWidth
      fill(200,200,200);
      rectHeight = noise(noiseVar);
      rectHeight = map(rectHeight, 0, 1, 0, height);
      rect(x, height, rectWidth, -rectHeight);
    }

    noiseVar += 0.01;
}

function keyPressed() {
  if(keyCode === LEFT_ARROW && rectWidth > 1){
    rectWidth -= 1;

  }
  if(keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
}