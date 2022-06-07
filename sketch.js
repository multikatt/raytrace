let r;
let wall;
let a=0;

function setup() {
  createCanvas(400, 400);
  r = new Ray(143, 330, radians(-45));
  w = new Wall(300, 140, 330, 305);
}

function draw() {
  background(220);
  //r = new Ray(100, 200, radians(a));
  r.pos.set(mouseX, mouseY);
  r.draw();
  w.draw();
  r.checkCol(w);
  a+=1;
}