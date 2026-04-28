//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if (this.series.length === 0) throw new Error('series cannot be empty');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length');

    const result = [];
    
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const substring = this.series.slice(i, i + sliceLength);

      const numberArray = Array.from(substring, Number);
      result.push(numberArray);
    }

    return result;
  }
}