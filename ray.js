class Ray {
  constructor(x, y, a) {
    this.pos = createVector(x, y);
    this.angle = p5.Vector.fromAngle(a).mult(10);
  }

  draw() {

    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.angle.x, this.angle.y);
    pop();
  }

  checkCol(wall) {
    const x1 = wall.start.x;
    const y1 = wall.start.y;
    const x2 = wall.end.x;
    const y2 = wall.end.y;
    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.angle.copy().mult(1000).x;
    const y4 = this.pos.y + this.angle.copy().mult(1000).y;
    // const x4 = this.pos.x + this.angle.x;
    // const y4 = this.pos.y + this.angle.y;

    const dem = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    //const dem = (wall.start.x - wall.end.x) * (-this.angle.y) - (wall.start.y - wall.end.y) * (-this.angle.x);
    if (dem == 0) {
      return false;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / dem;
    const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / dem;
    // const t = ((wall.start.x - this.pos.y) * (-this.angle.y) - (wall.start.y - (this.pos.y + this.angle.y)) * (-this.angle.x)) / dem;
    // const u = ((wall.start.x - this.pos.y) * (wall.start.y - wall.end.y) - (wall.start.y - (this.pos.y + this.angle.y)) * (wall.start.x - wall.end.x)) / dem;

    if (t >= 0 && t <= 1) {
      //console.log(t);
    }
    if (u >= 0 && u <= 1) {
      // console.log(u);
    }

    if ((u >= 0 && u <= 1) && (t >= 0 && t <= 1)) {
      const p = createVector(x1 + t*(x2 - x1), y1 + t * (y2 -y1));
      return p;
    }
  }
}