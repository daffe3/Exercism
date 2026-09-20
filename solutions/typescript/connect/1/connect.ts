type Player = 'X' | 'O';

interface Point {
  r: number;
  c: number;
}

export class Board {
  private grid: string[][];
  private rows: number;
  private cols: number;

  constructor(board: string[]) {
    this.grid = board.map((row) => row.trim().split(/\s+/));
    this.rows = this.grid.length;
    this.cols = this.grid[0]?.length || 0;
  }

  public winner(): string {
    if (this.checkWinner('X')) {
      return 'X';
    }
    if (this.checkWinner('O')) {
      return 'O';
    }
    return '';
  }

  private checkWinner(player: Player): boolean {
    const queue: Point[] = [];
    const visited = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(false)
    );

    if (player === 'X') {
      for (let r = 0; r < this.rows; r++) {
        if (this.grid[r][0] === 'X') {
          queue.push({ r, c: 0 });
          visited[r][0] = true;
        }
      }
    } else {
      for (let c = 0; c < this.cols; c++) {
        if (this.grid[0][c] === 'O') {
          queue.push({ r: 0, c });
          visited[0][c] = true;
        }
      }
    }

    const directions: Array<[number, number]> = [
      [-1, 0],  
      [-1, 1], 
      [0, -1],  
      [0, 1],   
      [1, -1], 
      [1, 0],   
    ];

    while (queue.length > 0) {
      const { r, c } = queue.shift()!;

      if (player === 'X' && c === this.cols - 1) {
        return true;
      }
      if (player === 'O' && r === this.rows - 1) {
        return true;
      }

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < this.rows &&
          nc >= 0 &&
          nc < this.cols &&
          !visited[nr][nc] &&
          this.grid[nr][nc] === player
        ) {
          visited[nr][nc] = true;
          queue.push({ r: nr, c: nc });
        }
      }
    }

    return false;
  }
}