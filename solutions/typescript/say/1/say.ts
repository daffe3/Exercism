const ONES: string[] = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

const TENS: string[] = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const SCALES: string[] = ['', 'thousand', 'million', 'billion'];

export function sayInEnglish(num: number): string {
  if (num < 0 || num > 999_999_999_999) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  if (num === 0) {
    return 'zero';
  }

  const chunks: number[] = [];
  let temp = num;

  while (temp > 0) {
    chunks.push(temp % 1000);
    temp = Math.floor(temp / 1000);
  }

  const parts: string[] = [];

  for (let i = chunks.length - 1; i >= 0; i--) {
    const chunk = chunks[i];

    if (chunk > 0) {
      const chunkText = convertThreeDigits(chunk);
      const scale = SCALES[i];

      parts.push(scale ? `${chunkText} ${scale}` : chunkText);
    }
  }

  return parts.join(' ');
}

function convertThreeDigits(num: number): string {
  const parts: string[] = [];

  const hundred = Math.floor(num / 100);
  const remainder = num % 100;

  if (hundred > 0) {
    parts.push(`${ONES[hundred]} hundred`);
  }

  if (remainder > 0) {
    if (remainder < 20) {
      parts.push(ONES[remainder]);
    } else {
      const ten = Math.floor(remainder / 10);
      const one = remainder % 10;
      parts.push(one > 0 ? `${TENS[ten]}-${ONES[one]}` : TENS[ten]);
    }
  }

  return parts.join(' ');
}