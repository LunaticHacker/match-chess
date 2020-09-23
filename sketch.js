let current = null;
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
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
  if (current) {
    noFill();
    stroke(255, 255, 0);
    rect(current.x, current.y, w, w);
  }
}
