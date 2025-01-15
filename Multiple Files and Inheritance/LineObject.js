//Child Class 2
class LineObject extends AnimatedObject{
    constructor(){
        super(random(width), random(height));
    }

    move(){ //override, but build on top of the parent version
        super.move(); //adds the parent move() code
        this.x -= 5;
        if(this.x < 0) this.x = width;
    }

    display(){  //override
        if(mouseIsPressed) strokeWeight(10);
        else strokeWeight(2);

        line(this.x, this.y, this.x + 45, this.y);
    }
}