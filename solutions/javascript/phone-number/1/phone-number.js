//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (input) => {
  if (/[a-zA-Z]/.test(input)) {
    throw new Error('Letters not permitted');
  }

  if (/[@!:]/.test(input)) {
    throw new Error('Punctuations not permitted');
  }

  let cleaned = input.replace(/\D/g, '');

  if (cleaned.length === 11) {
    if (cleaned.startsWith('1')) {
      cleaned = cleaned.substring(1);
    } else {
      throw new Error('11 digits must start with 1');
    }
  }

  if (cleaned.length < 10) {
    throw new Error('Must not be fewer than 10 digits');
  } else if (cleaned.length > 10) {
    throw new Error('Must not be greater than 11 digits');
  }

  if (cleaned[0] === '0') {
    throw new Error('Area code cannot start with zero');
  }
  if (cleaned[0] === '1') {
    throw new Error('Area code cannot start with one');
  }
  if (cleaned[3] === '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  if (cleaned[3] === '1') {
    throw new Error('Exchange code cannot start with one');
  }

  return cleaned;
};