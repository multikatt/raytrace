let rays = [];
let walls = [];

let topViewConfig = { width: 400, height: 400 };
let bottomViewConfig = { width: 400, height: 200 };

let player;

function setup() {
  createCanvas(topViewConfig.width, topViewConfig.height + bottomViewConfig.height);
  //frameRate(15);

  for (let i = 0; i < 5; i++) {
    walls.push(new Wall(random(0, topViewConfig.width), random(0, topViewConfig.height), random(0, topViewConfig.width), random(0, topViewConfig.height)));
  }

  walls.push(new Wall(0, 0, topViewConfig.width, 0));
  walls.push(new Wall(0, 0, 0, topViewConfig.height));
  walls.push(new Wall(0, topViewConfig.height, topViewConfig.width, topViewConfig.height));
  walls.push(new Wall(topViewConfig.width, 0, topViewConfig.width, topViewConfig.height));

  player = new Player(200, 200, radians(0), walls);

  fpview = new FPView(walls, player, { pos: { x: 0, y: topViewConfig.height + 1 }, size: bottomViewConfig });
}

let newWall = null;

function draw() {
  background(0);
  //r = new Ray(100, 200, radians(a));
  player.draw();
  stroke(100);
  strokeWeight(5);
  for (let w of walls) {
    w.draw();
  }

  fpview.draw();

  if (keyIsDown(87)) {
    //w
    player.move("f");
  }
  if (keyIsDown(83)) {
    //s
    player.move("b");
  }
  if (keyIsDown(81)) {
    //q
    player.move("l");
  }
  if (keyIsDown(69)) {
    //e
    player.move("r");
  }
  if (keyIsDown(65)) {
    //a
    player.rotate(-1);
  }
  if (keyIsDown(68)) {
    //d
    player.rotate(1);
  }

  if (mouseIsPressed) {
    if (newWall === null) {
      newWall = new Wall(mouseX, mouseY, 0, 0);
    }
    newWall.end = createVector(mouseX, mouseY);
    newWall.draw();
  }

  if (mouseIsPressed === false) {
    if (newWall !== null) {
      walls.push(newWall);
      newWall = null;
    }
  }
}
