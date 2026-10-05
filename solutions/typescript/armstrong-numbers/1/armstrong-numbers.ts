export function isArmstrongNumber(number: number | bigint): boolean {
  const digits = String(number).split('');
  const numDigits = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + BigInt(digit) ** BigInt(numDigits);
  }, BigInt(0));

  return sum === BigInt(number);
}