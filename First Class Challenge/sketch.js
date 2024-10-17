// Objects Demo 2
// Alaxandre C.
// 10/17/2024
//


let points = [];
const SEGMENT_REACH = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
   // points[i].move();
    points[i].connectPoints(points);
    points[i].display();
  }
}

function mouseClicked() {
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = 20;
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.OFFSET = 0.1;
    this.MAX_SPEED = 5;
  }

  display() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.s, this.s);
  }

  connectPoints(pointArray) {
    stroke(this.c);
    for (let i = 0; i < pointArray.length; i++) {
      if (this !== pointArray[i]) {
        if (dist(this.x, this.y, pointArray[i].getX(), pointArray[i].getY()) < SEGMENT_REACH) {
          line(this.x, this.y, pointArray[i].getX(), pointArray[i].getY());
        }
      }
    }
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  move() {
    let xSpeed = map(noise(this.noiseX), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    let ySpeed = map(noise(this.noiseY), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.OFFSET;
    this.noiseY += this.OFFSET;

    //
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= width;
    }

  }
}