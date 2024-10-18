// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = shipImage;
    this.bullets = [];
  }

  update() {
    if(keyIsDown(RIGHT_ARROW)){
      this.x += 2;
    }

    if(keyIsDown(LEFT_ARROW)){
      this.x -= 2;
    }

    if(keyIsDown(DOWN_ARROW)){
      this.y += 2;
    }

    if(keyIsDown(UP_ARROW)){
      this.y -= 2;
    }

    this.bullets = this.bullets.filter(b => (b.update(), b.isOnScreen()));
  }

  display() {
    image(shipImage, this.x, this.y);
    for(b in bullets){
      b.display();
    }
  }

  handleKeyPress() {
    if(keyCode === 32){
      this.bullets.push(new Bullet(this.x, this.y, 0, 15, bulletImage));
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, bulletImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = bulletImage;
  }

  update() {
    this.y = this.dy;
  }

  display(){
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
    return this.y > 0;
  }
}

