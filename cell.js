class Cell {
  constructor(x, y, w, i, j) {
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.tx = x;
    this.ty = y;
    this.startTime = Infinity;
    this.w = w;
    this.i = i;
    this.j = j;
    this.columns = [0, 2, 3];
    this.rows = [6, 5, 8];
    this.ci = floor(random(this.columns)) * 128;
    this.cj = floor(random(this.rows)) * 128;
    this.empty = false;
  }
  show() {
    noFill();
    stroke(255);
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

  animate() {
    if (Date.now() - this.startTime > 100) {
      this.x = this.ox;
      this.y = this.oy;
    } else {
      this.x = lerp(this.x, this.tx, 0.1);
      this.y = lerp(this.y, this.ty, 0.1);
    }
  }

  nullify() {
    this.empty = true;
    this.ci = null;
    this.cj = null;
  }
}
