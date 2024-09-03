const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[]
var boats=[]
var boatanimation=[]
var boatspriteatdata
var boatspriteship
var brokenboatanimation=[]
var brokenboatspritedata,brokenboatespriteship;
var isGameOver=false

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boatspriteatdata=loadJSON("assets/boat/boat.json");
  boatspriteship=loadImage("assets/boat/boat.png");
  brokenboatspriteship=loadImage("assets/boat/broken_boat.png");
  brokenboatspritedata=loadJSON("assets/boat/broken_boat.json");
}

function setup() {
  canvas = createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  
  var boatfriends=boatspriteatdata.frames;
  for(var I=0;I<boatfriends.length;I++){
  var pos=boatfriends[I].position;
  var img=boatspriteship.get(pos.x,pos.y,pos.w,pos.h) ;
  boatanimation.push(img) 
  }var brokenboatfriends=brokenboatspritedata.frames;
  for(var I=0;I<brokenboatfriends.length;I++){
  var pos=brokenboatfriends[I].position;
  var img= brokenboatspriteship.get(pos.x,pos.y,pos.w,pos.h) ;
  brokenboatanimation.push(img) 
  }

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  for(var I=0;I<balls.length;I++){
  showcannonballs(balls[I],I)  
  }
  ground.display();
  

  cannon.display();
  tower.display();
  showboats()
  
}

function keyReleased(){
  if(keyCode==DOWN_ARROW){
  balls[balls.length-1].shoot()  
  }
}

function keyPressed(){
 if(keyCode==DOWN_ARROW) {

  bala= new Bala(cannon.x,cannon.y);
  bala.Trayectory=[];
  Matter.Body.setAngle(bala.body,cannon.angle)
  balls.push(bala)
 }
}

function showcannonballs(bala,index){
  bala.display();
 // bala.animate()
  if(bala.body.position.x>=width ||bala.body.position.y>=height-50){
  Matter.World.remove(world,bala.body)  
  //if(!bala.isSink){
  //bala.remove(index)  
  //}
 balls.splice(index,1)
  }
}

function showboats() {
  if(boats.length>0){
  if( 
  boats.length<4 &&boats[boats.length-1].body.position.x <width-300){
  
var position=[-40,-60,-70,-20] ;
var positions=random(position);
barco=new Barco(width,height-60,170,170,positions,boatanimation);

boats.push(barco)
}
for(var I=0;I<boats.length;I++){
  Matter.Body.setVelocity(boats[I].body,{
    x:-0.9,
    y:0  
    });
    boats[I].display();
    boats[I].animate()
    var collision=Matter.SAT.collides(tower.body,boats[I].body);
    if(collision.collided && !boats[I].isBroken){
    isGameOver=true;
    gameOver () 
    }

}
  }else{
    barco=new Barco(width,height-10,170,170,-10,boatanimation);
    boats.push(barco)
  }  
  }

  function gameOver(){
    
  }