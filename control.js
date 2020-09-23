function clicked() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / w);
  function swap() {
    let temp = { ci: current.ci, cj: current.cj, i: current.i, j: current.j };
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
      if ([0, 1].includes(diffi) && [0, 1].includes(diffj) && diffi != diffj) {
        swap();
        magic();
      }
    } else if (current.ci / 128 == 2) {
      if ([0, 1].includes(diffi) && [0, 1].includes(diffj) && diffi === diffj) {
        swap();
        magic();
      }
    } else if (current.ci / 128 == 0) {
      if ([0, 1].includes(diffi) && [0, 1].includes(diffj) && sdiffj === -1) {
        swap();
        magic();
      }
    }

    current = null;
  }
}

function magic() {
  do {
    console.log("M");
    findMatch();
    shift();
    fillgrid();
  } while (verticalmatches.size > 0 || horizontalmatches.size > 0);
}
