//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black = [0, 3],
    white = [7, 3],
  } = {}) {
    const [blackRow, blackColumn] = black;
    const [whiteRow, whiteColumn] = white;

    if (
      blackRow < 0 || blackRow > 7 || blackColumn < 0 || blackColumn > 7 ||
      whiteRow < 0 || whiteRow > 7 || whiteColumn < 0 || whiteColumn > 7
    ) {
      throw new Error('Queen must be placed on the board');
    }

    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot share the same space');
    }

    this.black = black;
    this.white = white;
  }

  toString() {
    const board = [];
    const [blackRow, blackColumn] = this.black;
    const [whiteRow, whiteColumn] = this.white;

    for (let r = 0; r < 8; r++) {
      const row = [];
      for (let c = 0; c < 8; c++) {
        if (r === blackRow && c === blackColumn) {
          row.push('B');
        } else if (r === whiteRow && c === whiteColumn) {
          row.push('W');
        } else {
          row.push('_');
        }
      }
      board.push(row.join(' '));
    }

    return board.join('\n');
  }

  get canAttack() {
    const [blackRow, blackColumn] = this.black;
    const [whiteRow, whiteColumn] = this.white;

    if (blackRow === whiteRow) return true;
    if (blackColumn === whiteColumn) return true;

    const rowDiff = Math.abs(blackRow - whiteRow);
    const colDiff = Math.abs(blackColumn - whiteColumn);
    if (rowDiff === colDiff) return true;

    return false;
  }
}