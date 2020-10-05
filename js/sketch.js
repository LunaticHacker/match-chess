let current = null;
let busy = false;
let moves = 20;
let score = 0;
let w = 64;
let cols = 8;
let rows = 8;
let chessImage;
let moveCounter;
let scoreCounter;
let statsDiv;
let restartButton;
function preload() {
  chessImage = loadImage("chess.png");
}

async function setup() {
  removeElements();
  moves = 20;
  let board = createCanvas(cols * w, cols * w);
  moveCounter = createP(`Moves Left: ${moves}`);
  scoreCounter = createP(`Score : ${score}`);
  restartButton = createButton("Restart");
  restartButton.addClass("rainbow-button");
  restartButton.mouseClicked(setup);
  statsDiv = createDiv();
  statsDiv.child(moveCounter);
  statsDiv.child(scoreCounter);
  statsDiv.child(restartButton);

  statsDiv.position(width * 2, height / 2);
  board.mouseClicked(clicked);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * w, j * w, w, i, j);
    }
  }
  await magic();
  score = 0;
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
  moveCounter.html(`Moves Left: ${moves}`);
  scoreCounter.html(`Score: ${score}`);
}
