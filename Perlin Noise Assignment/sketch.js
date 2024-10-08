// Perlin Noise Project
// Your Name
// Date
let noiseVar = 0;
let rectWidth = 5;
let rectHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  resetNoiseVars();
  generateTerrain();
}

function generateTerrain() {

  let localNoiseVar = noiseVar;

    //draw a staircase using loops
    randomSeed(2);
    for(let x = 0; x < width; x += rectWidth){
      //20...rectangle spacing / rectWidth
      fill(200,200,200);
      rectHeight = noise(localNoiseVar);
      rectHeight = map(rectHeight, 0, 1, 0, height);
      rect(x, height, rectWidth, -rectHeight);
      localNoiseVar += 0.01;
    }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW && rectWidth > 1){
    rectWidth -= 1;

  }
  if(keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
}

function resetNoiseVars() {
  //sets a bunch of variables back
  noiseVar += 0.01;
}