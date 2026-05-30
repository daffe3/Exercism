//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor(boardStrings) {
    this.grid = boardStrings.map(row => row.replace(/\s+/g, '').split(''));
    this.rows = this.grid.length;
    this.cols = this.rows > 0 ? this.grid[0].length : 0;
  }

  winner() {
    if (this.checkWinO()) return 'O';

    if (this.checkWinX()) return 'X';

    return '';
  }

  getNeighbors(r, c) {
    const directions = [
      [0, -1],  
      [0, 1],  
      [-1, 0],  
      [-1, 1],  
      [1, -1],  
      [1, 0]    
    ];

    return directions
      .map(([dr, dc]) => [r + dr, c + dc])
      .filter(([nr, nc]) => nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols);
  }

  checkWinO() {
    const queue = [];
    const visited = new Set();

    for (let c = 0; c < this.cols; c++) {
      if (this.grid[0][c] === 'O') {
        queue.push([0, c]);
        visited.add(`0,${c}`);
      }
    }

    while (queue.length > 0) {
      const [r, c] = queue.shift();

      if (r === this.rows - 1) return true;

      for (const [nr, nc] of this.getNeighbors(r, c)) {
        if (this.grid[nr][nc] === 'O' && !visited.has(`${nr},${nc}`)) {
          visited.add(`${nr},${nc}`);
          queue.push([nr, nc]);
        }
      }
    }

    return false;
  }

  checkWinX() {
    const queue = [];
    const visited = new Set();

    for (let r = 0; r < this.rows; r++) {
      if (this.grid[r][0] === 'X') {
        queue.push([r, 0]);
        visited.add(`${r},0`);
      }
    }

    while (queue.length > 0) {
      const [r, c] = queue.shift();

      if (c === this.cols - 1) return true;

      for (const [nr, nc] of this.getNeighbors(r, c)) {
        if (this.grid[nr][nc] === 'X' && !visited.has(`${nr},${nc}`)) {
          visited.add(`${nr},${nc}`);
          queue.push([nr, nc]);
        }
      }
    }

    return false;
  }
}