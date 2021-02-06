const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;
var engine,world;
var ground,hero,image;
function setup(){
createCanvas(3000,800)

engine=Engine.create();
world=engine.world;

ground = new Ground(500,600,1100,20);
//ground2 = new Ground(-50,250,100,20);
box = new Box(700,100,70,70);
box2 = new Box(700,100,70,70);
box3 = new Box(700,100,70,70);
box4 = new Box(700,100,70,70);
box5 = new Box(700,100,70,70);
box6 = new Box(700,100,70,70);
//
box7 = new Box(500,100,70,70);
box8 = new Box(500,100,70,70);
box9 = new Box(500,100,70,70);
box10 = new Box(500,100,70,70);
box11 = new Box(500,100,70,70);
box12 = new Box(500,100,70,70);
//
box13 = new Box(600,100,70,70);
box14 = new Box(600,100,70,70);
box15 = new Box(600,100,70,70);
box16 = new Box(600,100,70,70);
box17 = new Box(600,100,70,70);
box18 = new Box(600,100,70,70);
box19 = new Box(600,100,70,70);
hero = new Ball(200,200,250,200,PI/4);
monster=new Monster(1000,400,200,PI/4);
rope =new Rope(hero.body,{x:300,y:20}) 


}
function preload(){
 bimage = loadImage("images/GamingBackground.png");
}
function draw(){
background(bimage);
Engine.update(engine);
ground.display();
//ground2.display();
box.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
monster.display();
hero.display();
//rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}