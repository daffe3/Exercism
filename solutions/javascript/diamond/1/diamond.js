//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const startCode = 'A'.charCodeAt(0);
  const targetCode = letter.charCodeAt(0);
  const n = targetCode - startCode;
  const size = 2 * n + 1;
  
  const result = [];

  for (let i = 0; i < size; i++) {
    const distanceFromA = i <= n ? i : size - 1 - i;
    const currentChar = String.fromCharCode(startCode + distanceFromA);
  
    let row = Array(size).fill(' ');

    const leftPos = n - distanceFromA;
    const rightPos = n + distanceFromA;
    
    row[leftPos] = currentChar;
    row[rightPos] = currentChar;
    
    result.push(row.join(''));
  }

  return result;
};