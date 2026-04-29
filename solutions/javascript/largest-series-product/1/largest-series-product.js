//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const largestProduct = (digits, span) => {
  if (span < 0) {
    throw new Error('span must not be negative');
  }

  if (span > digits.length) {
    throw new Error('span must not exceed string length');
  }
  
  if (/\D/.test(digits)) {
    throw new Error('digits input must only contain digits');
  }
  
  if (span === 0) {
    return 1;
  }

  let maxProduct = 0;

  for (let i = 0; i <= digits.length - span; i++) {
    const series = digits.slice(i, i + span);
    
    const currentProduct = series
      .split('')
      .reduce((product, char) => product * Number(char), 1);

    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }

  return maxProduct;
};