export function nth(n: number): number {
  if (n <= 0) {
    throw new Error('Prime is not possible');
  }

  const primes: number[] = [2];
  let candidate = 3;

  while (primes.length < n) {
    if (isPrime(candidate, primes)) {
      primes.push(candidate);
    }
    candidate += 2; 
  }

  return primes[primes.length - 1];
}

function isPrime(num: number, knownPrimes: number[]): boolean {
  const limit = Math.sqrt(num);

  for (const prime of knownPrimes) {
    if (prime > limit) {
      break;
    }
    if (num % prime === 0) {
      return false;
    }
  }

  return true;
}