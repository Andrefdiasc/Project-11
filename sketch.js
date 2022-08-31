var ship, ship_moving
var sea, sea_animation
function preload(){
  sea_animation = loadAnimation("sea.png");
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-2.png", "ship-1.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
    sea = createSprite(600, 200, 50, 50);
  ship = createSprite(100, 250, 50, 50);
  sea.addAnimation("animating",sea_animation);
  ship.addAnimation("moving", ship_moving);
  sea.scale = 0.5;
  ship.scale = 0.25;
  sea.velocityX = -2;
}

function draw() {
  background("blue");
    drawSprites();

 
}
