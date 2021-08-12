/*


write your own story

*/

var theif, theif_running,;
var background, backgroundImage;
var obstacle 
var coin1, coin2, coin3,coin4,coin5,coin6;
var score;

function preload(){
  
  theif_running = loadAnimation("Theif 1.png","Theif 2.png","Theif 3.png","Theif 4.png","Theif 5.png","Theif 6.png");
  backgroundImage = loadImage("city background.jpg")
  
  coin1 = loadImage("coin (1).png");
  coin2 = loadImage("coin (2).png");
  coin3 = loadImage("coin (3).png");
  coin4 = loadImage("coin (4).png");
  coin5 = loadImage("coin (5).png");
  coin6 = loadImage("coin (6).png");

}



function setup() {
  createCanvas(600,200);

  theif = createSprite(50,180,20,50,);
  theif.addAnimation("Theif_running")
  theif.scale = 0.8;

  background = createSprite(200,180,400,20);
  background = createSprite("city background",backgroundImage);
  background.x = background.width /2;
  background.velocityX = -4; 
 
}

function draw() {
  background("lightblue");
  
 
  
  drawSprites();

}

