//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (numbers) => {
  let result = [];

  for (const num of numbers) {
    let n = BigInt(num);
    let bytes = [];

    if (n === 0n) {
      bytes.push(0);
    }

    while (n > 0n) {
      let byte = Number(n & 0x7Fn);

      if (bytes.length > 0) {
        byte |= 0x80;
      }
      
      bytes.unshift(byte);
      n >>= 7n;            
    }

    result.push(...bytes);
  }

  return result;
};

export const decode = (bytes) => {
  let result = [];
  let currentNum = 0n;
  let incomplete = true;

  for (const byte of bytes) {
    currentNum = (currentNum << 7n) | BigInt(byte & 0x7F);

    if ((byte & 0x80) === 0) {
      result.push(Number(currentNum));
      currentNum = 0n;
      incomplete = false;
    } else {
      incomplete = true;
    }
  }

  if (incomplete) {
    throw new Error('Incomplete sequence');
  }

  return result;
};