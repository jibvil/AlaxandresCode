//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let cheater = 0;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 255, 0, 0, 0],
[255, 255, 255, 0, 0]];

function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomize();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  winCondition();            //make win text appear
}

function mousePressed() {
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (keyIsPressed && keyCode === SHIFT) {
    flip(currentCol, currentRow);  //cheating
  }

  else {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }
}

function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) gridData[row][col] = 255
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function randomize(){
  //randomizes the starting color of every rectangle
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      gridData[y][x] = random([0, 255]);
    }
  }
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winCondition() {
<<<<<<< HEAD
  // makes text appear based on if every square matches one color
  let score = 0;
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if(gridData[y][x] === 255){
        score++;
      }
      else{
        score--;
      }
    }
  }
  if(score === -20){ //if all squares are white
    textSize(20);
    fill(255);
    text("You win!", width/2, height/2);
  }
  else if(score === 20){ //if all squares are black
    textSize(20);
    fill(0);
    text("You win!", width/2, height/2);
  }
=======
  if(gridData === gridData[0])
    text("You win!", width/2, height/2);
  
  else if(gridData === gridData[255])
    text("You win!"); 
>>>>>>> 7c58dfa85ca0af64154ca64b01c34d969eccc45d
}