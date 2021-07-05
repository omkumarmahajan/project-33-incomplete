var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var engine,world;

 var particles;
var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight=300;
var score =0;

var gameState = "PLAY";
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score :  "+score,20,30);

 textSize(30)
      text("500",20,530)
      text("500",100,530)
      text("500",180,530)
      text("500",260,530)
      text("100",340,530)
      text("100",420,530)
      text("100",500,530)
      text("200",580,530)
      text("200",660,530)
      text("200",740,530)


      ground.display()

        if (gameState =="END")
        {
            background(black);
            fill("red")
            textSize(100);
            text("game over ",200,400)
        }

        for (var i = 0; i < plinkos.length; i++) {
     
          plinkos[i].display();
        }






      if (particles = null)
      {
        particles.display();

        if(particles.body.position.y>700)
        {
          if(particles.body.position.x<300)
          {
            score=score+500
            particles = null;
            if(count>=5) gameState = "END";
          }

          else if(particles.body.position.x < 600 && particles.body.position.x>301)
          {
            score = score +100;
            particles=null;
            if(count >=5 ) gameState = "END";
          }

          else if(particles.body.position.x< 900 && particles.body.position.x>601)
          {
            score = score + 200;
            particles = null;
            if (count>= 5) gameState = "END";
          }

        }
      }


  Engine.update(engine);
 
   
   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
   }
 
 for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();  
    }

    
}
function mousePressed()
{
if ( gameState == "END"){

  particle = new particles (mouseX,10,10,10)  ;
}

}

