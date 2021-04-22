const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;
var drops=[];
var rand;
var maxDrops = 100;
var bestmanImage;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
    if(frameCount % 150 === 0 ){
        for(var i=0; i<maxDrops; i++){
          drops.push(new Drop(random(0,400), random(0,400)));
        }
        
        }
      
    
}


    function draw(){
        background(0);
          Engine.update(engine);
        
        umbrella.display();
        spawnThunder();
        for(var i = 0; i<maxDrops; i++){
          drops[i].showDrop();
          drops[i].updateY()
        }
        bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
        bat.addAnimation("moving_bat",batAnimation);
        bat.visible = false;
        if(frameCount % 100 === 0){
           bat.visible = true;
            bat.velocityX = Math.round(random(-4,4));
            bat.velocityY = Math.round(random(-4,4));
            bat.scale=0.4;
           
          
        }

        drawSprites();
    }
    function spawnThunder(){
        if(frameCount%80===0){
            thunderCreatedFrame=frameCount;
            thunder = createSprite(random(10,370), random(10,30), 10,10);
            switch(rand){
             case 1: thunder.addImage(thunderImage1);
              break;
              case 2:thunder.addImage(thunderImage2);
             break;
            
              case 3: thunder.addImage(thunderImage3);
              break;
            
              case 4: thunder.addImage(thunderImage4);
             default :  break;
            }
            thunder.scale = random(0.3,0.6);
            }
            if(thunderCreatedFrame + 10 ===frameCount && thunder){
              thunder.destroy();
            }
            }
    
    
    

        