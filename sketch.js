let rays = [];
let walls = [];
let a = 0;

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 360; i += 1) {
    rays.push(new Ray(143, 330, radians(i)));
  }

  for (let i = 0; i < 5; i++) {
    walls.push(new Wall(random(0, width), random(0, height), random(0, width), random(0, height)));
  }

  walls.push(new Wall(0, 0, width, 0));
  walls.push(new Wall(0, 0, 0, height));
  walls.push(new Wall(0, height, width, height));
  walls.push(new Wall(width, 0, width, height));
}

function draw() {
  background(0);
  //r = new Ray(100, 200, radians(a));
  push();
  stroke(255, 200, 119, 10);
  strokeCap(SQUARE);
  strokeWeight(15);
  for (r of rays) {
    let closest = Infinity;
    let minDist = Infinity;
    for (w of walls) {
      r.pos.set(mouseX, mouseY);
      //r.draw();
      //
      const pp = r.checkCol(w);
      if (pp) {
        const temp = createVector(pp.x, pp.y);
        if (p5.Vector.dist(r.pos, temp) < minDist) {
          minDist = p5.Vector.dist(r.pos, temp);
          closest = temp;
          //print(closest);
        }
      }
    }
    line(mouseX, mouseY, closest.x, closest.y);
  }
  pop();
  stroke(100);
  strokeWeight(5);
  for (w of walls) {

    w.draw();
  }
}