//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let rectangleCount = 0;

  const corners = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '+') {
        corners.push([r, c]);
      }
    }
  }

  for (let i = 0; i < corners.length; i++) {
    for (let j = i + 1; j < corners.length; j++) {
      const [r1, c1] = corners[i];
      const [r2, c2] = corners[j];

      if (r1 < r2 && c1 < c2) {

        if (grid[r1][c2] === '+' && grid[r2][c1] === '+') {

          if (isRectangle(grid, r1, r2, c1, c2)) {
            rectangleCount++;
          }
        }
      }
    }
  }

  return rectangleCount;
}

function isRectangle(grid, r1, r2, c1, c2) {
  for (let c = c1 + 1; c < c2; c++) {
    if (!['-','+'].includes(grid[r1][c]) || !['-','+'].includes(grid[r2][c])) {
      return false;
    }
  }

  for (let r = r1 + 1; r < r2; r++) {
    if (!['|','+'].includes(grid[r][c1]) || !['|','+'].includes(grid[r][c2])) {
      return false;
    }
  }

  return true;
}