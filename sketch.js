var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	bg = createSprite(400,375)
	bg.addImage(bgImg)
	bg.scale = 0.5
	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 15 , {restitution:0.5, isStatic:false});
	//image (starImg , 650,30)
	World.add(world, starBody);
	star.x = starBody.position.x
	star.y = starBody.position.y

	Engine.run(engine);

}


function draw() {
  background(0);
Engine.update(engine)

keyPressed()
  drawSprites();

}



function keyPressed() {
	if(keyDown("RIGHT_ARROW")){
		fairy.x = fairy.x + 9
		//fairy.velocityX = 2
	}
	if(keyDown("LEFT_ARROW")){
		fairy.x = fairy.x - 9
		//fairy.velocityX = -2
	}
	if (keyCode === DOWN_ARROW){
	
	Matter.Body.setStatic(starBody, false);
	star.velocityY = 5
	//fairy.velocityX = 0
	}
	if(star.y>470){
		
		star.velocityY = 0
		Matter.Body.setStatic(starBody, true);
	}
	
}

