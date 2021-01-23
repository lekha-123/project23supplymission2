var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redleft,redleftbody,redright,redrightbody,redbottom,redbottombody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	var boxposition =width/2-100
	var boxy=610

	
	 redleft=createSprite(boxposition,boxy,20,100);
	redleft.shapeColor=color(255,0,0);
	 redleftbody=Bodies.rectangle(boxposition, boxy, 20, 100 , {isStatic:true} );
	 World.add(world, redleftbody);

	 redbottom=createSprite(boxposition+60,boxy+40,100,20);
	redbottom.shapeColor=color(255,0,0);
	 redbottombody=Bodies.rectangle(boxposition+60, boxy+40, 100, 20 , {isStatic:true} );
	 World.add(world, redbottombody);

	 redright =createSprite(boxposition+120,boxy,20,100);
	redright.shapeColor=color(255,0,0);
	 redrightbody=Bodies.rectangle(boxposition+120, boxy, 20, 100 , {isStatic:true} );
	 World.add(world, redrightbody);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

	
  
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)
    
  }
  if (keyCode === RIGHT_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	helicopterSprite.x=helicopterSprite.x+20;    
    translation={x:+20,y:0}
    Matter.Body.translate(packageBody, translation)
    
  }
  if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



