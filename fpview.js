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
    translate(this.drawarea.pos.x, this.drawarea.pos.y);
    
    for(let i=0; i < this.player.rays.length; i++) {
      let x = map(i, 0, this.player.rays.length, 0, this.drawarea.size.width);
      
      let dist = this.player.rays[i].closest.pdist;
      let y = map(dist, 0, 400, this.drawarea.size.height, 0);
      stroke(map(dist,0, 400, 255, 0));
      rect(x, this.drawarea.size.height/2, 1, y);
      
      if (i == 10) {
      }
    }

    pop();
  }
}