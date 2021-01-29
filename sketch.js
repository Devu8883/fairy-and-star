const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var fairy,star,background,thefairy,fairy_options,background1;



function preload()
{
fairy = loadImage("fairy.png");
star = loadImage("star.png");
background = loadImage("starnight.png");
fairy1 = loadIamge("fairy1.png")
}

function setup() {
  createCanvas(1200, 1200);
  var canvas = createCanvas(500, 500);
  canvas.addImage("night",background);
  engine = Engine.create();
  world = engine.world;
  thefairy = createSprite()
}


function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 200, 20);
  drawSprites();
}
