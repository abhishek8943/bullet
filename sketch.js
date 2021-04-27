var bullet,wall;
var speed,weight;
var thickness




function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)

speed=random(223,321);
weight=random(30,52);

bullet = createSprite(50,200,50,10);
wall = createSprite(1200,200,thickness,height/2)

bullet.velocityX = speed;
bullet.shapeColor = "white"
wall.shapeColor = "black"

}

function draw() {
  background("grey");  
  


if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10){
    wall.shapeColor="green"
  }
  if(damage<10){
    wall.shapeColor="red"
  }
  }




drawSprites();


}

function hasCollided(Lbullet,Lwall){

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false;

}
