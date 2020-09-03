class Cell {
  constructor(x, y, w, i, j) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.i = i;
    this.j = j;
    this.columns = [0, 2, 3];
    this.rows = [4, 5, 8];
    this.ci = floor(random(this.columns)) * 128;
    this.cj = floor(random(this.rows)) * 128;
    this.empty = false;
  }
  show() {
    stroke(30);
    fill(0);
    rect(this.x, this.y, this.w, this.w);
    if (!this.empty) {
      image(
        chessImage,
        this.x,
        this.y,
        this.w,
        this.w,
        this.ci,
        this.cj,
        128,
        128
      );
    }
  }

  nullify() {
    this.empty = true;
    this.ci = null;
    this.cj = null;
  }
}
