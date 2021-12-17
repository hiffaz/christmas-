
// STEP 1: Create a blueprint for gift and create mulitple gifts using it
// STEP 2: Create a blueprint for stars and create multiple stars using it

var star;
var gift;
// Make sure to add stars and gifts to the edges of the tree. Use images in assets folder

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world

function preload() {
  bgImg = loadImage("bg.jpeg")
}

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;

  tree = createImg("tree.png");
  tree.position(-50, -20)
  tree.size(700, 700)
  Star1 = new Star(100, 200, 60, 60);
  Star2 = new Star(350, 400, 60, 60);
  Star3 = new Star(400, 200, 60, 60);
  star4 = new Star(400, 500, 60, 60);
  star5 = new Star(200, 600, 60, 60);
  star6 = new Star(50, 200, 60, 60);
  star7 = new Star(600, 300, 60, 60);
  gift1 = new Gift (400, 600, 80, 80);
  gift2 = new Gift (50,50,70,70);
  gift3 = new Gift (30,100,90,70)
  gift4 = new Gift (600,200,90,90)
  gift5 = new Gift (600,400,100,85)
  star10 =  new Star (700,300,70,70)
}


function draw() {
  background(bgImg);
  Engine.update(engine);
  Star1.display()
  Star1.display()
  Star2.display()
  Star3.display()
  star4.display()
  star5.display()
  gift1.display()
  star6.display()
  star7.display()
  gift2.display()
  gift3.display()
  gift4.display()
  gift5.display()
  star10.display()
}

