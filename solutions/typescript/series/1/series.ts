export class Series {
  private series: string;

  constructor(series: string) {
    if (!series) {
      throw new Error('series cannot be empty');
    }
    this.series = series;
  }

  public slices(sliceLength: number): number[][] {
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }

    if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    const result: number[][] = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const slice = this.series
        .slice(i, i + sliceLength)
        .split('')
        .map((digit) => parseInt(digit, 10));

      result.push(slice);
    }

    return result;
  }
}