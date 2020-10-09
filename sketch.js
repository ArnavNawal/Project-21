var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  bullet = createSprite(20,200,30,10);
  bullet.shapeColor=(240,240,240)
  
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80);
  
}

function draw() {
  background(150,150,150);
  bullet.velocityX=speed
  hasCollided(bullet,wall);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    
   if(damage>10){
     wall.shapeColor = "red";
   }
   if(damage<10){
     wall.shapeColor = "green";
   }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lwall.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  } 
  else{
    return false;
  }
}