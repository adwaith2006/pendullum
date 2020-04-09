const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,holder;


function setup() {
  
  createCanvas(800,400);
  engine= Engine.create();
    world = engine.world;
  ball=new Ball(400,400,20,20);
  holder=new Holder(400,100,200,10);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  strokeWeight(4);
  ball.display();
  holder.display();
  drawSprites();
  
}
