export const largestProduct = (digits: string, span: number): number => {
  if (span < 0) {
    throw new Error('Span must not be negative');
  }

  if (span > digits.length) {
    throw new Error('Span must not exceed string length');
  }

  if (/[^0-9]/.test(digits)) {
    throw new Error('Digits input must only contain digits');
  }

  if (span === 0) {
    return 1;
  }

  let maxProduct = 0;

  for (let i = 0; i <= digits.length - span; i++) {
    const series = digits.slice(i, i + span);

    let product = 1;
    for (const char of series) {
      product *= Number(char);
    }

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};