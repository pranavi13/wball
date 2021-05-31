class Ground{
constructor(){
    var ground_options={
        isStatic:true
    }
    this.ground= Bodies.rectangle(500,760,600,30,ground_options);
      this.height = height;this.width = width;
      this.height = height;
    World.add(world,this.ground);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(this.ground.pos.x,this.ground.pos.y,1500,20);
}
}