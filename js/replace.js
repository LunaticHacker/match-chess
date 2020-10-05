function shift() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < cols; i++) {
        let done = false;
        for (let j = rows - 1; j >= 0; j--) {
          if (done) break;
          if (grid[i][j].empty) {
            let current = j;
            let lowest = j;
            while (current > 0) {
              done = true;
              if (!grid[i][current - 1].empty) {
                grid[i][lowest].ci = grid[i][current - 1].ci;
                grid[i][lowest].cj = grid[i][current - 1].cj;
                grid[i][lowest].empty = false;
                grid[i][current - 1].empty = true;
                lowest--;
              }
              current--;
            }
          }
        }
      }
      return resolve();
    }, 200);
  });
}

function fillgrid() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j].empty) {
            grid[i][j] = new Cell(i * w, j * w, w, i, j);
          }
        }
      }
      return resolve();
    }, 500);
  });
}
