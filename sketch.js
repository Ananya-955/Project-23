var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
var world, engine; 

function preload(){
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//box1= new Box(800,790,200,20);
	//box2= new Box(800,790,200,20);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(400,650,200,20), {isStatic:true};
	box1.shapeColor="red";
	
	box2=createSprite(300,600,20,100), {isStatic:true};
	box2. shapeColor="red";

	box3=createSprite(500,600,20,100), {isStatic:true};
	box3. shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//fill("red");
	//box1= Bodies.rectangle(400,650,200,20, {isStatic:true});
	//World.add(world, box1);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //box1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



