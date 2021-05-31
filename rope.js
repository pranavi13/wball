class Rope {
    constructor(bodyA, bodyB) {
      var options = {
        bodyA: bodyA,
        pointB: bodyB,
        stiffness: 1.2,
        length: 250,
      };
  
      this.bodyB = bodyB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var bodyA = this.rope.bodyA.position;
        var bodyB = this.bodyB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
  
        pop();
      }
    }
  }
  