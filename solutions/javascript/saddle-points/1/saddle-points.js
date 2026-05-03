//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (grid) => {
  const result = [];
  const rows = grid.length;

  if (rows === 0 || grid[0].length === 0) {
    return result;
  }
  
  const cols = grid[0].length;

  const rowMax = grid.map((row) => Math.max(...row));

  const colMin = [];
  for (let c = 0; c < cols; c++) {
    let min = Infinity;
    for (let r = 0; r < rows; r++) {
      if (grid[r][c] < min) {
        min = grid[r][c];
      }
    }
    colMin.push(min);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const value = grid[r][c];

      if (value === rowMax[r] && value === colMin[c]) {
        result.push({ row: r + 1, column: c + 1 });
      }
    }
  }

  return result;
};