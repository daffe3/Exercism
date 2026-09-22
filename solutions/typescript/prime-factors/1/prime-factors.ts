export function calculatePrimeFactors(number: number): number[] {
  const factors: number[] = [];
  let divisor = 2;
  let remaining = number;

  while (remaining > 1) {
    while (remaining % divisor === 0) {
      factors.push(divisor);
      remaining /= divisor;
    }
    divisor++;
  }

  return factors;
}