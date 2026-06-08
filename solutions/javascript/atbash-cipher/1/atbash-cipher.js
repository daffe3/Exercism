//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (phrase) => {
  const cleanPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
  const result = [];

  for (const char of cleanPhrase) {
    if (char >= '0' && char <= '9') {
      result.push(char);
    } else {
      const mirroredCode = 122 - (char.charCodeAt(0) - 97);
      result.push(String.fromCharCode(mirroredCode));
    }
  }

  const grouped = [];
  for (let i = 0; i < result.length; i += 5) {
    grouped.push(result.slice(i, i + 5).join(''));
  }

  return grouped.join(' ');
};

export const decode = (phrase) => {
  const cleanPhrase = phrase.replace(/\s+/g, '');
  const result = [];

  for (const char of cleanPhrase) {
    if (char >= '0' && char <= '9') {
      result.push(char);
    } else {

      const mirroredCode = 122 - (char.charCodeAt(0) - 97);
      result.push(String.fromCharCode(mirroredCode));
    }
  }

  return result.join('');
};