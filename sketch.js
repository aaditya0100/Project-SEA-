var shipImg;
var ship;
var sea;
var seaImage;
function preload(){
shipImg = loadAnimation("ship1.png","ship2.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImage)
sea.scale=0.3
   ship = createSprite(70,270,20,20)
   ship.addAnimation("ship",shipImg)
ship.scale=2 
}

function draw() {
  background("blue");
 if(sea.x<0){
   sea.x=width/8
 }
sea.velocityX=-4;

drawSprites();
}