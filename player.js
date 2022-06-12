class Player {
  constructor(x, y, a, walls) {
    this.pos = createVector(x, y);
    this.angle = p5.Vector.fromAngle(a);
    this.aangle = 0;
    this.walls = walls;

    this.rays = [];
    for (let i = 45; i < 135; i += 1) {
      this.rays.push(new Ray(this.pos.x, this.pos.y, radians(i)));
    }
  }

  move(dir) {
    if (dir == "f") {
      this.pos.add(
        createVector(sin(this.angle.heading()), cos(this.angle.heading()))
      );
    }
    if (dir == "b") {
      this.pos.sub(
        createVector(sin(this.angle.heading()), cos(this.angle.heading()))
      );
    }
    if (dir == "l") {
      this.pos.sub(
        createVector(
          sin(this.angle.heading() - radians(90)),
          cos(this.angle.heading() - radians(90))
        )
      );
    }
    if (dir == "r") {
      this.pos.add(
        createVector(
          sin(this.angle.heading() - radians(90)),
          cos(this.angle.heading() - radians(90))
        )
      );
    }
  }

  rotate(angle) {
    for (let r of this.rays) {
      r.angle.rotate(radians(angle));
    }
    this.angle.rotate(radians(-angle));
  }

  draw() {
    push();
    rotate(this.angle);

    for (let r of this.rays) {
      let closest = Infinity;
      let minDist = Infinity;
      for (let w of this.walls) {
        r.pos.set(this.pos.x, this.pos.y);
        const pp = r.checkCol(w);
        if (pp) {
          const temp = createVector(pp.x, pp.y);
          if (p5.Vector.dist(r.pos, temp) < minDist) {
            minDist = p5.Vector.dist(r.pos, temp);
            closest = temp;
          }
        }
      }
      r.closest = closest;
      r.closest.pdist = minDist;
      r.draw();
    }
    pop();
  }
}
