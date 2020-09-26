var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 30, 80);
  movingRect = createSprite(400, 600, 80, 30);

  fixedRect.velocityY = 3;
  movingRect.velocityY = -3;
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(255,255,255); 
  console.log(fixedRect.x - movingRect.x)
  
 
  bounceOff(fixedRect,movingRect);
 

  drawSprites();
}
