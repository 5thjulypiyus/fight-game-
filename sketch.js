var player1,player2,player1Img,plyer2Img;

function preload(){
 player1Img=loadImage("player1.png");
 player2Img=loadImage("player2.png");
}



function setup(){
  
  createCanvas(1200,1200);
  
player1=createSprite(100,180,30,100);
player1.addImage(player1Img);
player2=createSprite(400,180,30,100);
player2.addImage(player2Img);

}

function draw() {
  background("black");
 
  drawSprites();
}





































































































































