// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let names = ["John", "Jane", "Joe"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names); //original
  names.push("Liam");
  print(names); //added liam

  let lastName = names.pop();
  print(lastName);
  print(names);

  let firstName = names.shift();
  print(firstName);
  print(names);

  names.push("Linda");
  names.push("Theodore");
  names.push("Marge");
  names.push("Gaylord");
  names.push("Plunkett");

  for(n of names){
    print(n);
  }
}

function draw() {
  background(220);
}
