//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DIGITS = {
  [' _ ' + '| |' + '|_|' + '   ']: '0',
  ['   ' + '  |' + '  |' + '   ']: '1',
  [' _ ' + ' _|' + '|_ ' + '   ']: '2',
  [' _ ' + ' _|' + ' _|' + '   ']: '3',
  ['   ' + '|_|' + '  |' + '   ']: '4',
  [' _ ' + '|_ ' + ' _|' + '   ']: '5',
  [' _ ' + '|_ ' + '|_|' + '   ']: '6',
  [' _ ' + '  |' + '  |' + '   ']: '7',
  [' _ ' + '|_|' + '|_|' + '   ']: '8',
  [' _ ' + '|_|' + ' _|' + '   ']: '9'
};

export const convert = (input) => {
  const lines = input.split('\n');

  if (lines.length % 4 !== 0) {
    throw new Error('Number of input lines must be a multiple of four.');
  }
  if (lines.some(line => line.length % 3 !== 0)) {
    throw new Error('Number of input columns must be a multiple of three.');
  }

  const result = [];

  for (let row = 0; row < lines.length; row += 4) {
    const rowGroup = lines.slice(row, row + 4);
    let convertedRow = '';

    const lineLength = rowGroup[0].length;
    for (let col = 0; col < lineLength; col += 3) {

      const digitPattern = 
        rowGroup[0].slice(col, col + 3) +
        rowGroup[1].slice(col, col + 3) +
        rowGroup[2].slice(col, col + 3) +
        rowGroup[3].slice(col, col + 3);

      convertedRow += DIGITS[digitPattern] || '?';
    }
    
    result.push(convertedRow);
  }

  return result.join(',');
};