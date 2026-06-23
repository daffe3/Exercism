//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @param {number[]} digits
 * @param {number} inputBase
 * @param {number} outputBase
 * @returns {number[]}
 */
export const convert = (digits, inputBase, outputBase) => {
  if (inputBase === undefined || inputBase < 2 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }
  if (outputBase === undefined || outputBase < 2 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }

  if (!digits || digits.length === 0) {
    throw new Error('Input has wrong format');
  }

  if (digits.length > 1 && digits[0] === 0) {
    throw new Error('Input has wrong format');
  }

  let decimalValue = 0;
  
  for (const digit of digits) {
    if (digit < 0 || digit >= inputBase) {
      throw new Error('Input has wrong format');
    }
    decimalValue = decimalValue * inputBase + digit;
  }

  if (decimalValue === 0) {
    return [0];
  }

  const result = [];
  let remaining = decimalValue;

  while (remaining > 0) {
    result.unshift(remaining % outputBase); 
    remaining = Math.floor(remaining / outputBase); 
  }

  return result;
};