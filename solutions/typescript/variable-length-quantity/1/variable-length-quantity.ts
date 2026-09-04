const BIT_MASK_7 = 0x7f; 
const CONTINUATION_BIT = 0x80; 

export function encode(numbers: number[]): number[] {
  const result: number[] = [];

  for (const num of numbers) {
    let n = num >>> 0;
    const bytes: number[] = [];

    do {
      let byte = n & BIT_MASK_7;
      if (bytes.length > 0) {
        byte |= CONTINUATION_BIT;
      }
      bytes.unshift(byte); 
      n = n >>> 7;
    } while (n > 0);

    result.push(...bytes);
  }

  return result;
}

export function decode(bytes: number[]): number[] {
  const numbers: number[] = [];
  let current = 0;
  let hasContinuation = false;

  for (const byte of bytes) {
    current = ((current << 7) | (byte & BIT_MASK_7)) >>> 0;

    if ((byte & CONTINUATION_BIT) !== 0) {
      hasContinuation = true;
    } else {
      numbers.push(current);
      current = 0;
      hasContinuation = false;
    }
  }

  if (hasContinuation) {
    throw new Error('Incomplete sequence');
  }

  return numbers;
}