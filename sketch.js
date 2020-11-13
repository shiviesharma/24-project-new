const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,  dustbin1;
var ground;

function preload()
{
	
}

function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(50,500,40,40);
	dustbin1 = new Dustbin(30,400,80,80);
	ground = new Ground(400,600,800,700);
                               
	Engine.run(engine);
               
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbin1.display();
  ground.display();
  keyPressed();
  drawSprites();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.Body, paperObject.Body.position,{x:85,y:-85})
	}
}

