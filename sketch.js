let current = null;
let busy = false;
let w = 64;
let cols = 8;
let rows = 8;
let chessImage;
function preload() {
  chessImage = loadImage("chess.png");
}

function setup() {
  let board = createCanvas(cols * w, cols * w);
  board.mouseClicked(clicked);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * w, j * w, w, i, j);
    }
  }
  magic();
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
      grid[i][j].animate();
    }
  }
  if (current) {
    noFill();
    stroke(255, 0, 0);
    rect(current.x, current.y, w, w);
  }
}
