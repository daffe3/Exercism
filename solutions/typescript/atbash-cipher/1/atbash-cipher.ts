const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const REVERSED_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba';

function substitute(char: string): string {
  const index = ALPHABET.indexOf(char);
  return index !== -1 ? REVERSED_ALPHABET[index] : char;
}

export function encode(plainText: string): string {
  const cleaned = plainText.toLowerCase().replace(/[^a-z0-9]/g, '');

  let cipherText = '';
  for (let i = 0; i < cleaned.length; i++) {
    const substituted = substitute(cleaned[i]);
    
    if (i > 0 && i % 5 === 0) {
      cipherText += ' ';
    }
    cipherText += substituted;
  }

  return cipherText;
}

export function decode(cipherText: string): string {
  const cleaned = cipherText.replace(/\s+/g, '');

  let plainText = '';
  for (const char of cleaned) {
    plainText += substitute(char);
  }

  return plainText;
}