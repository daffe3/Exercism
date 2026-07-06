//
// This is only a SKELETON file for the 'Eliud's Eggs' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue) => {
  let count = 0;
  let n = displayValue;

  while (n > 0) {
    n = n & (n - 1);
    count++;
  }

  return count;
};