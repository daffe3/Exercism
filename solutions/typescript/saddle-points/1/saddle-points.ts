export interface Position {
  row: number;
  column: number;
}

export function saddlePoints(matrix: number[][]): Position[] {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const rowMax = matrix.map((row) => Math.max(...row));

  const colMin: number[] = [];
  for (let c = 0; c < numCols; c++) {
    let min = Infinity;
    for (let r = 0; r < numRows; r++) {
      if (matrix[r][c] < min) {
        min = matrix[r][c];
      }
    }
    colMin.push(min);
  }

  const result: Position[] = [];

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      const val = matrix[r][c];
      if (val === rowMax[r] && val === colMin[c]) {
        result.push({ row: r + 1, column: c + 1 });
      }
    }
  }

  return result;
}