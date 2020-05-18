const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var pig1;
var log1,log2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    bird1 = new Bird(100,100);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new pig(810,320);
    log1 = new Log(810,280,300,PI/2);

    box3 = new Box(700,260,70,70);
    box4 = new Box(920,260,70,70);
    pig2 = new pig(810,240);
    log2 = new Log(810,200,300,PI/2);

    box5 = new Box(810,180,70,70);
    log3 = new Log(760,160,110,PI/7);
    log4 = new Log(870,160,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();
}