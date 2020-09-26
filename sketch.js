var fixedRect, movingRect;

var gameObject1;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100, 200, 80, 30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(255,255,255); 
  console.log(fixedRect.x - movingRect.x)
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isColliding(movingRect, gameObject1)){
    gameObject1.shapeColor = "green";
  }
  else{
    gameObject1.shapeColor = "yellow";
  }

  if(isColliding(fixedRect, movingRect)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }

  
 
  
  drawSprites();
}

