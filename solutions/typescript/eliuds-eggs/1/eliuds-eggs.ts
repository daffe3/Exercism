export const eggCount = (displayValue: number): number => {
  let count = 0;
  let current = displayValue;

  while (current > 0) {
    count += current & 1;
    current = current >>> 1;
  }

  return count;
};