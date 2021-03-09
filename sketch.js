const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dust1;
var dust2;
var dust3;
var gd;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(50, 50, 10, 20);
  dust1 = new dustbin(600, 620, 20, 200);
  gd = new ground(400, 690, 800, 20);
  dust2 = new dustbin(490, 670, 200, 20);
  dust3 = new dustbin(400, 600, 20, 160);
  //Create the Bodies Here.

  Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER);

  paper.display();
  dust1.display();
  gd.display();
  dust2.display();
  dust3.display();
  drawSprites();
}
