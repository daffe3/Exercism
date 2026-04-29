//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input.length === 0) return [];

  const maxColumnLength = Math.max(...input.map(row => row.length));
  const result = [];

  for (let col = 0; col < maxColumnLength; col++) {
    let transposedRow = '';

    for (let row = 0; row < input.length; row++) {
      const char = input[row][col];

      if (char !== undefined) {
        transposedRow += char;
      } else {
        const hasCharacterLater = input.slice(row).some(r => r[col] !== undefined);
        
        if (hasCharacterLater) {
          transposedRow += ' ';
        }
      }
    }
    result.push(transposedRow);
  }

  return result;
};