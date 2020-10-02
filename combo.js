function queen(i, j, ci, cj) {
  if (grid[ci][cj].ci != 4 * 128) return undefined;
  if (i == ci && j > cj) {
    for (let s = cj; s <= j; s++) {
      grid[i][s].nullify();
    }
  } else if (i == ci && j < cj) {
    for (let s = j; s <= cj; s++) {
      grid[i][s].nullify();
    }
  } else if (j == cj && i > ci) {
    for (let s = ci; s <= i; s++) {
      grid[s][j].nullify();
    }
  } else if (j == cj && i < ci) {
    for (let s = i; s <= ci; s++) {
      grid[s][j].nullify();
    }
  } else if (j - cj == i - ci) {
    if (j - cj > 0) {
      for (let s = cj, q = ci; s <= j; s++, q++) {
        grid[q][s].nullify();
      }
    } else {
      for (let s = cj, q = ci; s >= j; s--, q--) {
        grid[q][s].nullify();
      }
    }
  } else if (j - cj == (i - ci) * -1) {
    if (j - cj < 0) {
      for (let s = cj, q = ci; s >= j; s--, q++) {
        grid[q][s].nullify();
      }
    } else {
      for (let s = cj, q = ci; s <= j; s++, q--) {
        grid[q][s].nullify();
      }
    }
  }
  return true;
}
