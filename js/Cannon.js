class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    console.log(this.angle)
    // change the angle in the upward direction when the left arrow key was pressed
    if(keyIsDown(LEFT_ARROW)&& this.angle>-1.40){
    this.angle-=0.02  
    }
   //  changed the angle in the downward direction when the right arrow key was pressed

   if(keyIsDown(RIGHT_ARROW)&&this.angle<0.70){
    this.angle+=0.02  
    }
     

    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}
