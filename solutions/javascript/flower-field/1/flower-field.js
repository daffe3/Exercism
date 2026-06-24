//
// This is only a SKELETON file for the 'Flower Field' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  if (input.length === 0) return [];
  if (input[0].length === 0) return [''];

  const rows = input.length;
  const cols = input[0].length;

  const board = input.map(row => row.split(''));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === ' ') {
        let flowerCount = 0;

        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
              if (board[nr][nc] === '*') {
                flowerCount++;
              }
            }
          }
        }

        if (flowerCount > 0) {
          board[r][c] = String(flowerCount);
        }
      }
    }
  }

  return board.map(row => row.join(''));
};