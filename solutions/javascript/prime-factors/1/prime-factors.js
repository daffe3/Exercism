//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {
  const factors = [];
  let divisor = 2;

  while (number > 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
};