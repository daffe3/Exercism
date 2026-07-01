//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board;
    this.rows = board.length;
    this.cols = board[0] ? board[0].length : 0;
  }

getTerritory(x, y) {
    if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
      return { error: 'Invalid coordinate' };
    }
    if (this.board[y][x] !== ' ') {
      return { owner: 'NONE', territory: [] };
    }

    const territory = [];
    const queue = [[x, y]];
    const visited = new Set([`${x},${y}`]);
    const borders = new Set();

    const directions = [
      [0, -1], [0, 1], [-1, 0], [1, 0]
    ];

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      territory.push([cx, cy]);

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx >= 0 && nx < this.cols && ny >= 0 && ny < this.rows) {
          const cell = this.board[ny][nx];

          if (cell === ' ') {
            const key = `${nx},${ny}`;
            if (!visited.has(key)) {
              visited.add(key);
              queue.push([nx, ny]);
            }
          } else {
            borders.add(cell);
          }
        }
      }
    }

    let owner = 'NONE';
    if (borders.has('B') && !borders.has('W')) {
      owner = 'BLACK';
    } else if (borders.has('W') && !borders.has('B')) {
      owner = 'WHITE';
    }

    territory.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    return { owner, territory };
  }

  getTerritories() {
    const result = {
      territoryBlack: [],
      territoryWhite: [],
      territoryNone: []
    };

    const globalVisited = new Set();

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x] === ' ' && !globalVisited.has(`${x},${y}`)) {
          const { owner, territory } = this.getTerritory(x, y);

          for (const [tx, ty] of territory) {
            globalVisited.add(`${tx},${ty}`);
          }

          if (owner === 'BLACK') {
            result.territoryBlack.push(...territory);
          } else if (owner === 'WHITE') {
            result.territoryWhite.push(...territory);
          } else {
            result.territoryNone.push(...territory);
          }
        }
      }
    }

    const sortCoords = (arr) => arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    sortCoords(result.territoryBlack);
    sortCoords(result.territoryWhite);
    sortCoords(result.territoryNone);

    return result;
  }
}