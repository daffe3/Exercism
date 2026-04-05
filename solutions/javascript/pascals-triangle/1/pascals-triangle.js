//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count) => {
  const triangle = [];

  for (let i = 0; i < count; i++) {

    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      const prevRow = triangle[i - 1];
      row[j] = prevRow[j - 1] + prevRow[j];
    }

    triangle.push(row);
  }

  return triangle;
};