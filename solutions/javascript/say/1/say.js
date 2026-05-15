//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999_999_999_999) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  if (n === 0) return 'zero';

  const smallNumbers = {
    0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
  };

  const tens = {
    2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
  };

  const chunks = [
    { label: 'billion', value: 1_000_000_000 },
    { label: 'million', value: 1_000_000 },
    { label: 'thousand', value: 1_000 },
    { label: '', value: 1 }
  ];

  const helper = (num) => {
    let result = '';

    if (num >= 100) {
      result += smallNumbers[Math.floor(num / 100)] + ' hundred ';
      num %= 100;
    }

    if (num >= 20) {
      result += tens[Math.floor(num / 10)];
      const unit = num % 10;
      if (unit > 0) {
        result += '-' + smallNumbers[unit];
      }
    } else if (num > 0) {
      result += smallNumbers[num];
    }

    return result.trim();
  };

  let finalResult = '';

  for (const { label, value } of chunks) {
    const currentChunk = Math.floor(n / value);
    if (currentChunk > 0) {
      finalResult += `${helper(currentChunk)} ${label} `;
    }
    n %= value;
  }

  return finalResult.trim();
};