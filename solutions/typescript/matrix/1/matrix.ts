export class Matrix {
  private matrixRows: number[][];

  constructor(matrixString: string) {
    this.matrixRows = matrixString
      .split('\n')
      .map((row) => row.split(' ').map((num) => Number(num)));
  }

  get rows(): number[][] {
    return this.matrixRows;
  }

  get columns(): number[][] {
    return this.matrixRows[0].map((_, colIndex) =>
      this.matrixRows.map((row) => row[colIndex])
    );
  }
}