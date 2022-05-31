var box 
function setup() {
  createCanvas(1200,800);
 box = createSprite(500, 500, 77, 77);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x +3
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x -3
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box. y +3
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y -3
  }  
drawSprites()
}




