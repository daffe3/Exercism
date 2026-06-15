//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numStr = String(number);
  const numberOfDigits = numStr.length;

  const power = BigInt(numberOfDigits);
  
  let sum = 0n;

  for (const char of numStr) {
    const digit = BigInt(char);
    sum += digit ** power;
  }

  return sum === BigInt(number);
};