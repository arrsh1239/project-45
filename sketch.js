var player
var player_running
var background
function preload(){
    player_running = loadAnimation("game2 (1).png","game3.png","game4.png","game5.png","game6.png")
    backgroundImage = loadImage("Game Background-3.png")
  }
function setup() {
  createCanvas(800,400);
  ground = createSprite(400,200,800,400)
  ground.addImage(backgroundImage)
  ground.x = ground.width /2;
  ground.velocityX = -2
  ground.scale = 1.6

  player = createSprite(200,300,50,50)
  player.addAnimation("game1-removebg (1)png", player_running)
  
}
function draw() {
  background("black");
  if (ground.x < 0){
    ground.x = ground.width/2;
  }  
  drawSprites();
}