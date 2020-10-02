function clicked() {
  if (busy) return;
  let i = floor(mouseX / w);
  let j = floor(mouseY / w);
  function swap() {
    let temp = { ...current };
    current.startTime = Date.now();
    grid[i][j].startTime = Date.now();
    current.tx = grid[i][j].x;
    current.ty = grid[i][j].y;
    grid[i][j].tx = temp.x;
    grid[i][j].ty = temp.y;
    current.ci = grid[i][j].ci;
    current.cj = grid[i][j].cj;
    grid[i][j].ci = temp.ci;
    grid[i][j].cj = temp.cj;
  }
  if (current == null) {
    current = grid[i][j];
  } else {
    let diffi = abs(i - current.i);
    let diffj = abs(j - current.j);
    let sdiffj = j - current.j;
    if (diffi + diffj == 0) {
      current = null;
      return;
    }
    if (current.ci / 128 == 3) {
      //Rook
      if ([0, 1].includes(diffi) && [0, 1].includes(diffj) && diffi != diffj) {
        swap();
        magic();
      }
    } else if (current.ci / 128 == 2) {
      //Bishop
      if ([0, 1].includes(diffi) && [0, 1].includes(diffj) && diffi === diffj) {
        swap();
        magic();
      }
    } else if (current.ci / 128 == 0) {
      //Pawn
      if ([0, 1].includes(diffi) && [0, 1].includes(diffj) && sdiffj === -1) {
        swap();
        magic();
      }
    } else if (current.ci / 128 == 4) {
      //Queen
      if (current.i == i || current.j == j || diffi == diffj) {
        console.log(current.i, current.j);
        magic(i, j, current.i, current.j);
      }
    }

    current = null;
  }
}

async function magic(i, j, ci, cj) {
  let q = false;
  do {
    if (i != undefined) q = queen(i, j, ci, cj);
    busy = true;
    findMatch();
    await shift();
    await fillgrid();
  } while (verticalmatches.size > 0 || horizontalmatches.size > 0 || q);
  busy = false;
}
