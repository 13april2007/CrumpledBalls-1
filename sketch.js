
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObject, paperObject, dustbinObjet;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(width/2,670,width,20)
paperObject = new Paper(100,450,20);
dustbinObjet = new Dustbin(1200,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObject.display();
  paperObject.display();
  dustbinObjet.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85,y : -85});
	}
}


