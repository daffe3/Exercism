export class Triangle {
  public rows: number[][];

  constructor(count: number) {
    this.rows = this.generateRows(count);
  }

  public get lastRow(): number[] {
    return this.rows[this.rows.length - 1] || [];
  }

  private generateRows(count: number): number[][] {
    const result: number[][] = [];

    for (let r = 0; r < count; r++) {
      const row: number[] = new Array(r + 1).fill(1);

      for (let c = 1; c < r; c++) {

        row[c] = result[r - 1][c - 1] + result[r - 1][c];
      }

      result.push(row);
    }

    return result;
  }
}