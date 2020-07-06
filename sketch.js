
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;


	

	
	ground = Bodies.rectangle(width/2, 280, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	paper = new paperObject(50,50,70);
	box1 = new Box(880,115,150,20);

	chain = new Slingshot(paper.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  paper.display();
  box1.display();
  chain.display();
  //drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	//console.log("hi");
    chain.fly();
}
