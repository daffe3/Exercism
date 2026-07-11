//
// This is only a SKELETON file for the 'State of Tic Tac Toe' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gamestate = (board) => {
  const flatBoard = board.join('');
  const xCount = (flatBoard.match(/X/g) || []).length;
  const oCount = (flatBoard.match(/O/g) || []).length;

  if (oCount > xCount) {
    throw new Error('Wrong turn order: O started');
  }
  if (xCount > oCount + 1) {
    throw new Error('Wrong turn order: X went twice');
  }

  const winLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  let xWin = false;
  let oWin = false;

  for (const [a, b, c] of winLines) {
    if (flatBoard[a] !== ' ' && flatBoard[a] === flatBoard[b] && flatBoard[a] === flatBoard[c]) {
      if (flatBoard[a] === 'X') xWin = true;
      if (flatBoard[a] === 'O') oWin = true;
    }
  }

  if (xWin && oWin) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }
  if (xWin && xCount !== oCount + 1) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }
  if (oWin && xCount !== oCount) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }

  if (xWin || oWin) {
    return 'win';
  }
  if (!flatBoard.includes(' ')) {
    return 'draw';
  }

  return 'ongoing';
};