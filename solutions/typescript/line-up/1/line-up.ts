export function format(name: unknown, number: unknown): string {
  const num = Number(number);
 
  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;
  
  let suffix = 'th';

  if (lastTwoDigits !== 11 && lastTwoDigits !== 12 && lastTwoDigits !== 13) {
    if (lastDigit === 1) {
      suffix = 'st';
    } else if (lastDigit === 2) {
      suffix = 'nd';
    } else if (lastDigit === 3) {
      suffix = 'rd';
    }
  }

  return `${name}, you are the ${num}${suffix} customer we serve today. Thank you!`;
}