// Perlin Noise Project
// Your Name
// Date
let noiseVar = 10;
let rectHeight = 1

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
    for(let x = 0; x < width; x += 20){
      //20...rectangle spacing / rectWidth
      fill(0);
      noStroke();
      let rectHeight = random(50,500);
      rect(x, height, 20, -rectHeight);
    }
}
