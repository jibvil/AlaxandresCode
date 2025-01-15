// Maps and Text Files
// .split()     spread syntax
// Alaxandre C.
// 12/19/2024

let grid, img, rows, cols, colorMap, textFile;

function preload(){
  img = loadStrings("assets/colorImage.txt");
  textFile = loadStrings("assets/info.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//  processText();

  //determine the # of rows/cols
  rows = img.length; cols = img[0].length;

  //create and populate the 2D array (grid)
  grid = [];
  for(let i = 0 ; i<rows; i++ ){
    grid.push([...img[i]]);
  }

  //create a map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p", color(150, 150, 255)]
  ]);
}

function draw() {
  renderGrid();
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}

function renderGrid(){
  //calculate rectangle size
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  //visit each 2D array spot, and visualize
  for(let x = 0; x<cols; x++){
    for(let y = 0; y<rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}
//function processText(){
//  print("SPLIT INTO WORDS");
//  let splitWords = textFile[0].split();
//  print(splitWords);

//  print("SPLIT INTO CHARACTERS");
//  let splitChars = textFile[1].split("")
//  print(splitChars);

//  print("SPREAD INTO CHARACTERS");
//  let spreadChars = [...textFile[2]];
//  print(spreadChars);