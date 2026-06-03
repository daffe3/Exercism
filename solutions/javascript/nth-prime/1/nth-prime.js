//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const boundary = Math.sqrt(num);
  for (let i = 3; i <= boundary; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const prime = (n) => {
  if (n <= 0) {
    throw new Error('there is no zeroth prime');
  }

  let count = 0;   
  let current = 1; 

  while (count < n) {
    current++;
    if (isPrime(current)) {
      count++;
    }
  }

  return current;
};