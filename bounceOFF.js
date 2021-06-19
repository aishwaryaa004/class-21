var  movingRect;


var box;

function setup() {
  createCanvas(1200,800);
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
  box = createSprite(400,600,20,50);
  box.shapeColor="blue";
  box.debug=true;
   
  movingRect.velocityY=2
  box.velocityY=-2

}

function draw() {
  background(0,0,0);  
 
  if(isTouching(movingRect,box)){

    movingRect.shapeColor = "red";
    box.shapeColor = "purple";
    
  }
  else{
    movingRect.shapeColor = "green";
    box.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1,object2){

  if ( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);

    return true
}
else {
  return false
}

}
