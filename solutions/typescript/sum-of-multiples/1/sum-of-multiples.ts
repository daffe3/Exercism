export function sum(items: number[], level: number): number {
  const uniqueMultiples = new Set<number>();

  for (const base of items) {
    if (base <= 0) continue; 

    for (let multiple = base; multiple < level; multiple += base) {
      uniqueMultiples.add(multiple);
    }
  }

  let totalSum = 0;
  for (const value of uniqueMultiples) {
    totalSum += value;
  }

  return totalSum;
}