class Block {
constructor(x,y,width,height) {
  var options = {
      restitution : 0.8
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("yellow");
  rect(0,0, this.width, this.height);
  pop();
}
};