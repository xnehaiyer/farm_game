var player,playerImg;
var ground,groundImg,invisibleGround;
var cowImage, dogImage, pigImage,obstacleGroup;
var gameState = "play";
var wheatImage;


function preload(){
  playerImg = loadAnimation("player1.png","player2.png","player3.png","player4.png");
  groundImg = loadImage("background_image.png");
  cowImage = loadImage("cow_image.png");
  dogImage = loadAnimation("dog_animation.png","dog_animation (1).png","dog_animation (2).png","dog_animation (3).png","dog_animation (4).png","dog_animation (5).png");
  pigImage = loadAnimation("pig_animation.png","pig_animation (1).png","pig_animation (2).png");
  wheatImage = loadImage("wheat_image.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  ground = createSprite(50,displayHeight/2,displayWidth,displayHeight);
  ground.addImage(groundImg);
  ground.scale = 3;
  ground.x = ground.width/2;
  ground.velocityX = -3;

  invisibleGround= createSprite(displayWidth/2,displayHeight-70,displayWidth, 10);
  invisibleGround.x = invisibleGround.width/2;
  invisibleGround.velocityX = -3;
  invisibleGround.visible = false;
  

  player = createSprite(50,displayHeight-200,50,50);
  player.addAnimation("running",playerImg);   
  player.scale = 0.5;

  obstacleGroup = new Group();
}

function draw() {
  background(255);  

  //if (gameState = "play"){}
  if(invisibleGround.x<0){
    invisibleGround.x = invisibleGround.width/2;
  }
  if(ground.x<100){
    ground.x = ground.width/2;
  }
  

  if(keyDown("SPACE")){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.5;

  player.collide(invisibleGround);
  /*if(obstacleGroup.isTouching(player)){
    obstacleGroup.destroyEach();
    obstacleGroup.setVelocityXEach(0);
  }*/

  spawnWheat();
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%300 == 0){
  var Obstacle = createSprite(displayWidth/2,displayHeight-120,50,50);
  Obstacle.velocityX = -3;
  Obstacle.scale = 0.6;
  var rand = Math.round(random(1,2));
  if(rand == 1){
    Obstacle.addAnimation("dog_running",dogImage);
  }
  else if(rand == 2){
    Obstacle.addAnimation("pig_running",pigImage);
  }
  obstacleGroup.add(Obstacle);
  }
}
function spawnWheat(){
  if(frameCount%210==0){
    var Wheat = createSprite(displayWidth/2,displayHeight-120,50,50);
    Wheat.addImage(wheatImage);
    Wheat.velocityX = -2;
    Wheat.scale = 0.2;
  }
}