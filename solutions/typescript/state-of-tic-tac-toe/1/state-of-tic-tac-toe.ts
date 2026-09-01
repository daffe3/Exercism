type GameState = 'ongoing' | 'draw' | 'win';

export const gamestate = (board: string[]): GameState => {
  let xCount = 0;
  let oCount = 0;

  for (const row of board) {
    for (const char of row) {
      if (char === 'X') xCount++;
      if (char === 'O') oCount++;
    }
  }

  if (oCount > xCount) {
    throw new Error('Wrong turn order: O started');
  }

  if (xCount > oCount + 1) {
    throw new Error('Wrong turn order: X went twice');
  }

  const xWins = checkWin(board, 'X');
  const oWins = checkWin(board, 'O');

  if (xWins && oWins) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }

  if (xWins && xCount !== oCount + 1) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }

  if (oWins && xCount !== oCount) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }

  if (xWins || oWins) {
    return 'win';
  }

  if (xCount + oCount === 9) {
    return 'draw';
  }

  return 'ongoing';
};

function checkWin(board: string[], player: 'X' | 'O'): boolean {
  const winPatterns = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  return winPatterns.some((pattern) =>
    pattern.every(([r, c]) => board[r][c] === player)
  );
}