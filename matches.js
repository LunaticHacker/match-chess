let horizontalmatches = new Set();
let verticalmatches = new Set();
function findMatch() {
  horizontalmatches.clear();
  verticalmatches.clear();
  let hmatchcount = 1;
  let color_to_match = grid[0][0].cj;
  let piece_to_match = grid[0][0].ci;
  for (let i = 0; i < cols; i++) {
    hmatchcount = 1;
    color_to_match = grid[0][i].ci;
    piece_to_match = grid[0][i].cj;
    for (let j = 0; j < rows; j++) {
      if (
        color_to_match &&
        grid[j][i].cj == color_to_match &&
        grid[j][i].ci == piece_to_match &&
        j + i != 0
      ) {
        hmatchcount += 1;
      } else {
        color_to_match = grid[j][i].cj;
        piece_to_match = grid[j][i].ci;
        hmatchcount = 1;
      }
      if (hmatchcount >= 3) {
        let end = j + 1 - hmatchcount;

        for (let k = j; k >= end; k--) {
          horizontalmatches.add(`${k}${i}`);
        }
        if (hmatchcount % 3 >= 2) {
          horizontalmatches.delete(`${end}${i}`);
          grid[end][i].ci = 4 * 128;
        }
      }
    }
  }

  let vmatchcount = 1;
  color_to_match = grid[0][0].cj;
  piece_to_match = grid[0][0].ci;
  for (let i = 0; i < cols; i++) {
    vmatchcount = 1;
    color_to_match = grid[i][0].ci;
    piece_to_match = grid[i][0].cj;
    for (let j = 0; j < rows; j++) {
      if (
        color_to_match &&
        grid[i][j].cj == color_to_match &&
        grid[i][j].ci == piece_to_match &&
        j + i != 0
      ) {
        vmatchcount += 1;
      } else {
        color_to_match = grid[i][j].cj;
        piece_to_match = grid[i][j].ci;
        vmatchcount = 1;
      }
      if (vmatchcount >= 3) {
        let end = j + 1 - vmatchcount;
        for (let k = j; k >= end; k--) {
          verticalmatches.add(`${i}${k}`);
        }
        if (vmatchcount % 3 >= 2) {
          verticalmatches.delete(`${i}${end}`);
          grid[i][end].ci = 4 * 128;
        }
      }
    }
  }

  for (let item of horizontalmatches) {
    grid[item[0]][item[1]].nullify();
  }
  for (let item of verticalmatches) {
    grid[item[0]][item[1]].nullify();
  }
}
