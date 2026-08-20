export function classify(n: number): 'perfect' | 'abundant' | 'deficient' {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  if (n === 1) {
    return 'deficient';
  }

  let aliquotSum = 1;
  const limit = Math.sqrt(n);

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      aliquotSum += i;
      const pairedFactor = n / i;
      if (pairedFactor !== i) {
        aliquotSum += pairedFactor;
      }
    }
  }

  if (aliquotSum === n) {
    return 'perfect';
  }

  if (aliquotSum > n) {
    return 'abundant';
  }

  return 'deficient';
}