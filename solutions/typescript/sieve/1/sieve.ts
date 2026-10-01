export function primes(limit: number): number[] {
  if (limit < 2) {
    return [];
  }

  const isPrime = new Array<boolean>(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let candidate = 2; candidate * candidate <= limit; candidate++) {
    if (isPrime[candidate]) {
      for (let multiple = candidate * candidate; multiple <= limit; multiple += candidate) {
        isPrime[multiple] = false;
      }
    }
  }

  const result: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }

  return result;
}