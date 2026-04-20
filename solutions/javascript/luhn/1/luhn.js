//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  const normalized = input.replace(/\s+/g, '');

  if (normalized.length <= 1 || !/^\d+$/.test(normalized)) {
    return false;
  }

  const digits = Array.from(normalized, Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubled = digits[i] * 2;
    if (doubled > 9) {
      doubled -= 9;
    }
    digits[i] = doubled;
  }

  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  return sum % 10 === 0;
};