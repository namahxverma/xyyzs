class Paper {
  constructor(x, y, width, height) {
    var option = {
      restitution: 0.2,
    };
    this.body = Bodies.rectangle(x, y, width, height, option);
    this.width = width;
    this.height = height;
    this.x = mouseX;
    this.body.y = mouseY;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    rectMode(CENTER);
    fill("pink");
    rect(pos.x, pos.y, this.width, this.height);
  }
}
