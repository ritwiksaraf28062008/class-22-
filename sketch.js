const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }



var ball_options = {
    restitution : 1
}

    ball = Bodies.circle(400,200,20,ball_options);
    World.add(world,ball);
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}