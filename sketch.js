var fixedRect, movingRect;
var fixedRect2, movingRect2;
var gameObject; 
var box;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2 = createSprite(200,100,50,80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;

  movingRect2 = createSprite(800,100,50,80);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;

  gameObject = createSprite(600,500,50,30)
  gameObject.shapeColor="purple";
  gameObject.debug=true;

  box = createSprite(300,300,20,50);
  box.shapeColor="blue";
  box.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,box)){
    movingRect.shapeColor = "red";
    box.shapeColor = "white";
    
  }
  else{
    movingRect.shapeColor = "green";
    box.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true
}
else {
  return false
}

}
