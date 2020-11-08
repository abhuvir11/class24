const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,600,50,50);
    box2 = new Box(1100,600,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(1000,600);
    log1 = new log(1000,500,PI/2,250);
    box3 = new Box(900,500,50,50);
    bird1 = new bird(50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    bird1.display();
}