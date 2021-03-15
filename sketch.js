var balloon,balloon1;
var backgroundImage, background;
function preload(){

   balloon=loadImage("HotAirBalloon.jpg");
   backgroundImage=loadImage("backGroundImage.jpg");

}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
 balloon1 = createSprite(400, 200, 50, 50);
 balloon1.addImage(balloon);
 balloon1.scale=0.1;
}

function draw() {
  background(backgroundImage); 
  
  if(keyDown(LEFT_ARROW)){
    (-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    (1,0);
}
else if(keyDown(UP_ARROW)){
    (0,-1);
}
else if(keyDown(DOWN_ARROW)){
    (0,+1);
}

  drawSprites();
}

