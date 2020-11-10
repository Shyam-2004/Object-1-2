var fixedRect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
if (isTouching(fixedRect,movingrect)){
  
  fixedRect.shapeColor = "red";
  movingrect.shapeColor = "red";

}
else{
 
  fixedRect.shapeColor = "green";
  movingrect.shapeColor = "green";
}
  
  drawSprites();
}
