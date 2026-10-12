export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  
  if (!Number.isInteger(inputBase) || inputBase < 2) {
    throw new Error('Wrong input base');
  }

  if (!Number.isInteger(outputBase) || outputBase < 2) {
    throw new Error('Wrong output base');
  }

  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0)) {
    throw new Error('Input has wrong format');
  }

  let decimalValue = 0;
  for (const digit of digits) {
    if (!Number.isInteger(digit) || digit < 0 || digit >= inputBase) {
      throw new Error('Input has wrong format');
    }
    decimalValue = decimalValue * inputBase + digit;
  }

  if (decimalValue === 0) {
    return [0];
  }

  const outputDigits: number[] = [];
  let current = decimalValue;

  while (current > 0) {
    outputDigits.unshift(current % outputBase);
    current = Math.floor(current / outputBase);
  }

  return outputDigits;
}