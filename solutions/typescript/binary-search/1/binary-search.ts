export function find(haystack: unknown, needle: unknown): number | never {
  const array = haystack as number[];
  const target = needle as number;

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];

    if (midValue === target) {
      return mid; 
    }

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1; 
    }
  }

  throw new Error('Value not in array');
}