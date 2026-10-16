export function annotate(field: string[]): string[] {
  if (field.length === 0) {
    return [];
  }

  if (field.length === 1 && field[0] === '') {
    return [''];
  }

  const rows = field.length;
  const cols = field[0].length;
  const result: string[] = [];

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  for (let r = 0; r < rows; r++) {
    let newRow = '';
    for (let c = 0; c < cols; c++) {
      if (field[r][c] === '*') {
        newRow += '*';
      } else {
        let count = 0;
        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            if (field[nr][nc] === '*') {
              count++;
            }
          }
        }
        newRow += count > 0 ? count.toString() : ' ';
      }
    }
    result.push(newRow);
  }

  return result;
}