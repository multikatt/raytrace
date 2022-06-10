class FPView {
  constructor(w, p, drawarea) {
    this.walls = w;
    this.player = p;
    this.drawarea = drawarea;
  }

  draw() {
    push();
    fill("red");

    strokeWeight(4);
    rectMode(CENTER);
    //translate(this.drawarea.pos.x, this.drawarea.pos.y);

    for (let i = 0; i < this.player.rays.length; i++) {
      let x = map(i, 0, this.player.rays.length, 0, this.drawarea.size.width);

      let aa = abs(this.player.rays.length / 2 - (i / 1));
      //let dist = this.player.rays[i].closest.pdist;

      let bentHit = createVector(this.player.pos.x + (sin(radians(i)) * 75), this.player.pos.y + (cos(radians(i)) * 75));
      let distWH = p5.Vector.sub(this.player.rays[i].closest, bentHit);
      let dist = p5.Vector.sub(this.player.rays[i].closest, distWH).mag();
      if (i == 4) {
        print(bentHit);
      }
      circle(bentHit.x, bentHit.y, 1);


      let y = map(dist, 0, 400, 0, this.drawarea.size.height);
      stroke(map(dist, 0, 400, 255, 0));
      rect(x, this.drawarea.size.height / 2, 1, y);


    }

    pop();
  }
}