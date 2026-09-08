export function isValid(isbn: unknown): boolean {
  if (typeof isbn !== 'string') {
    return false;
  }

  const cleaned = isbn.replace(/-/g, '');

  if (cleaned.length !== 10) {
    return false;
  }

  if (!/^\d{9}[\dX]$/.test(cleaned)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const char = cleaned[i];
    const value = char === 'X' ? 10 : Number(char);
    const weight = 10 - i;
    sum += value * weight;
  }

  return sum % 11 === 0;
}