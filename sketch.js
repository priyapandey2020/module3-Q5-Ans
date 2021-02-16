var box1, box2;

function setup() {
  createCanvas(400,400);
  box1 = createSprite(200, 200, 50, 80);
  box1.shapeColor = "green";
  box1.debug = true;
  box2 = createSprite(200,200,80,30);
  box2.shapeColor = "green";
  box2.debug = true;
}

function draw() {
  background(0,0,0);  
  box2.x = World.mouseX;
  box2.y = World.mouseY;

  if (box2.x - box1.x === box1.width/2 + box2.width/2) {
    box2.shapeColor = "red";
    box1.shapeColor = "red";
  }
  else {
    box2.shapeColor = "green";
    box1.shapeColor = "green";
  }
  drawSprites();
}
