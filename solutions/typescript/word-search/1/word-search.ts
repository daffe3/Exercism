interface Point {
  row: number;
  col: number;
}

interface SearchResult {
  start?: [number, number];
  end?: [number, number];
}

interface Results {
  [key: string]: SearchResult | undefined;
}

export class WordSearch {
  private grid: string[];
  private rows: number;
  private cols: number;

  constructor(grid: string[]) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0]?.length || 0;
  }

  public find(words: string[]): Results {
    const results: Results = {};

    const directions: Array<[number, number]> = [
      [0, 1], 
      [0, -1], 
      [1, 0],   
      [-1, 0],  
      [1, 1],   
      [1, -1],  
      [-1, 1], 
      [-1, -1], 
    ];

    for (const word of words) {
      let found = false;

      for (let r = 0; r < this.rows && !found; r++) {
        for (let c = 0; c < this.cols && !found; c++) {
          if (this.grid[r][c] !== word[0]) continue;

          for (const [dr, dc] of directions) {
            if (this.searchWord(word, r, c, dr, dc)) {
              const endRow = r + dr * (word.length - 1);
              const endCol = c + dc * (word.length - 1);

              results[word] = {
                start: [r + 1, c + 1],
                end: [endRow + 1, endCol + 1],
              };

              found = true;
              break;
            }
          }
        }
      }

      if (!found) {
        results[word] = undefined;
      }
    }

    return results;
  }

  private searchWord(
    word: string,
    startRow: number,
    startCol: number,
    dr: number,
    dc: number
  ): boolean {
    for (let i = 0; i < word.length; i++) {
      const r = startRow + dr * i;
      const c = startCol + dc * i;

      if (
        r < 0 ||
        r >= this.rows ||
        c < 0 ||
        c >= this.cols ||
        this.grid[r][c] !== word[i]
      ) {
        return false;
      }
    }

    return true;
  }
}