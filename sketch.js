const   Engine= Matter.Engine;
const   World=Matter.World;
const   Bodies=Matter.Bodies;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,ground;
var ball;
var rope;

function setup(){
    createCanvas(4000,900)
    engine=Engine.create()
    world=engine.world;
    ground=new Ground()

  box1 = new Box(800, 100, 60, 60);
  box2 = new Box(800, 100, 60, 60);
  box3 = new Box(800, 100, 60, 60);
  box4 = new Box(800, 100, 60, 60);
  box5 = new Box(800, 100, 60, 60);
  box6 = new Box(800, 100, 60, 60);
  box7 = new Box(700, 100, 60, 60);
  box8 = new Box(700, 100, 60, 60);
  box9 = new Box(700, 100, 60, 60);
  box10 = new Box(700, 100,60, 60);

    }

    function draw(){
        background("blue");
      ground.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ball.display();
  box1.display();   

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}