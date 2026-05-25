//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  find(words) {
    const result = {};

    const directions = [
      [0, 1],   
      [0, -1], 
      [1, 0],   
      [-1, 0],  
      [1, 1],  
      [1, -1],  
      [-1, 1], 
      [-1, -1]  
    ];

    for (const word of words) {
      result[word] = undefined; 

      let found = false;
      for (let r = 0; r < this.rows; r++) {
        if (found) break;
        for (let c = 0; c < this.cols; c++) {
          if (found) break;

          if (this.grid[r][c] === word[0]) {
            for (const [dr, dc] of directions) {
              if (this.searchDirection(word, r, c, dr, dc)) {
                const endR = r + dr * (word.length - 1);
                const endC = c + dc * (word.length - 1);

                result[word] = {
                  start: [r + 1, c + 1],
                  end: [endR + 1, endC + 1]
                };
                found = true;
                break;
              }
            }
          }
        }
      }
    }

    return result;
  }

  searchDirection(word, startRow, startCol, dr, dc) {
    for (let i = 1; i < word.length; i++) {
      const nextRow = startRow + dr * i;
      const nextCol = startCol + dc * i;

      if (nextRow < 0 || nextRow >= this.rows || nextCol < 0 || nextCol >= this.cols) {
        return false;
      }

      if (this.grid[nextRow][nextCol] !== word[i]) {
        return false;
      }
    }
    return true;
  }
}

export default WordSearch;