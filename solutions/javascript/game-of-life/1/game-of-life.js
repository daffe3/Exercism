//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix) {
    this.currentGrid = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0] ? matrix[0].length : 0;
  }

  countAliveNeighbors(r, c) {
    let aliveCount = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        const neighborRow = r + i;
        const neighborCol = c + j;

        if (
          neighborRow >= 0 && neighborRow < this.rows &&
          neighborCol >= 0 && neighborCol < this.cols
        ) {
          aliveCount += this.currentGrid[neighborRow][neighborCol];
        }
      }
    }

    return aliveCount;
  }

  tick() {
    if (this.rows === 0 || this.cols === 0) return;

    const nextGrid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const aliveNeighbors = this.countAliveNeighbors(r, c);
        const isAlive = this.currentGrid[r][c] === 1;

        if (isAlive) {
          nextGrid[r][c] = (aliveNeighbors === 2 || aliveNeighbors === 3) ? 1 : 0;
        } else {
          nextGrid[r][c] = (aliveNeighbors === 3) ? 1 : 0;
        }
      }
    }

    this.currentGrid = nextGrid;
  }

  state() {
    return this.currentGrid;
  }
}