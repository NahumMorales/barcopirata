class Bala{
constructor(x,y) {
var cannonball={
isStatic:true    
} 
this.r=40;
this.body=Bodies.circle(x,y,this.r,cannonball);
this.image=loadImage("assets/cannonball.png");
this.Trayectory=[]
World.add(world,this.body)   
} 
shoot(){
var velocity=p5.Vector.fromAngle(cannon.angle);
velocity.mult(20);
Matter.Body.setStatic(this.body,false);
Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
}

display(){
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
    if(this.body.velocity.x>0&&this.body.position.x>300){
    var position=[this.body.position.x,this.body.position.y]  
    this.Trayectory.push(position)
    }
    for(var I=0; I<this.Trayectory.length;I++){
    image(this.image,this.Trayectory[I][0],this.Trayectory[I][1],5,5)    
    }
}
}