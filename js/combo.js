function queen(i, j, ci, cj) {
  if (grid[ci][cj].ci != 4 * 128) return undefined;
  if (i == ci && j > cj) {
    for (let s = cj; s <= j; s++) {
      activateCombo(i, s);
    }
  } else if (i == ci && j < cj) {
    for (let s = j; s <= cj; s++) {
      activateCombo(i, s);
    }
  } else if (j == cj && i > ci) {
    for (let s = ci; s <= i; s++) {
      activateCombo(s, j);
    }
  } else if (j == cj && i < ci) {
    for (let s = i; s <= ci; s++) {
      activateCombo(s, j);
    }
  } else if (j - cj == i - ci) {
    if (j - cj > 0) {
      for (let s = cj, q = ci; s <= j; s++, q++) {
        activateCombo(q, s);
      }
    } else {
      for (let s = cj, q = ci; s >= j; s--, q--) {
        activateCombo(q, s);
      }
    }
  } else if (j - cj == (i - ci) * -1) {
    if (j - cj < 0) {
      for (let s = cj, q = ci; s >= j; s--, q++) {
        activateCombo(q, s);
      }
    } else {
      for (let s = cj, q = ci; s <= j; s++, q--) {
        activateCombo(q, s);
      }
    }
  }
  return true;
}

function knight(_, ci, cj, i, j) {
  if (grid[ci][cj].ci != 128) return undefined;
  grid[ci][cj].nullify();
  let color_to_destroy = grid[i][j].cj;
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y].cj == color_to_destroy) activateCombo(x, y);
    }
  }
  return true;
}
function activateCombo(x, y) {
  grid[x][y].nullify();
  score += 10;
}
