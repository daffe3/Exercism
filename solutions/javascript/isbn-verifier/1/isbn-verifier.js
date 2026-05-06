//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const cleanIsbn = isbn.replace(/-/g, '');

  if (cleanIsbn.length !== 10) return false;

  if (!/^\d{9}[\dX]$/.test(cleanIsbn)) return false;

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const char = cleanIsbn[i];
    const value = char === 'X' ? 10 : parseInt(char, 10);
 
    sum += value * (10 - i);
  }

  return sum % 11 === 0;
};