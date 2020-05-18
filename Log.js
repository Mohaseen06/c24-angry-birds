class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':1,
          'friction': 1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("yellow")
      fill("white");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  