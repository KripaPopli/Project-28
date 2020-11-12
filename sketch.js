
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5;
var boy, boyImage;
var stone1;
var tree1;

function preload()
{
	boyImage = loadImage("Plucking+mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,800,20);

	mango1 = new Mango(550,200,20);
	mango2 = new Mango(650,250,20);
	mango3 = new Mango(550,220,20);
	mango5 = new Mango(650,200,20);
	mango5 = new Mango(550,120,20);

	stone1 = new Stone(200,300,50,50);

	tree1 = new Tree(600,200,100,700);

	launcher = new Chain(boy.body, {x:400, y:300});

	boy = createSprite(200,500,75,200);
	boy.addImage("Boy", boyImage);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone1.display();
  
  tree1.display();

  detectCollision(stone1.mango1);
  detectCollision(stone1.mango2);
  detectCollision(stone1.mango3);
  detectCollision(stone1.mango4);
  detectCollision(stone1.mango5);

  drawSprites();
 
}

function detectCollision(lstone, lmango){

mangoBodyPosition = lmangoBodyPosition
stoneBodyPosition = lstoneBodyPosition

var distance = dist(stoneBopdyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, stoneBodyPosition.y)
if(distance <= lmango.r + lstone.r)
{
	Matter.body.setStatic(lmango.body, false);
}


}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone1.fly();
}

function keypressed(){
if(keycode === 32){
Matter.Body.setPosition(stone1.body, {x:235, y:420})
launcher.attach(stone1, body);


}


}