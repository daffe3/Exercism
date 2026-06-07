const M = 26; 

const gcd = (x, y) => {
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const getMMI = (a) => {
  a = ((a % M) + M) % M;
  for (let x = 1; x < M; x++) {
    if ((a * x) % M === 1) {
      return x;
    }
  }
  return -1;
};

export const encode = (phrase, key) => {
  const { a, b } = key;

  if (gcd(a, M) !== 1) {
    throw new Error('a and m must be coprime.');
  }

  const ciphertext = [];

  const cleanPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const char of cleanPhrase) {
    if (char >= '0' && char <= '9') {
      ciphertext.push(char);
    } else {
      const x = char.charCodeAt(0) - 97; 
      const encryptedX = (a * x + b) % M;
      ciphertext.push(String.fromCharCode(encryptedX + 97));
    }
  }

  const grouped = [];
  for (let i = 0; i < ciphertext.length; i += 5) {
    grouped.push(ciphertext.slice(i, i + 5).join(''));
  }

  return grouped.join(' ');
};

export const decode = (phrase, key) => {
  const { a, b } = key;

  if (gcd(a, M) !== 1) {
    throw new Error('a and m must be coprime.');
  }

  const aInverse = getMMI(a);
  const plaintext = [];

  const cleanPhrase = phrase.replace(/\s+/g, '');

  for (const char of cleanPhrase) {
    if (char >= '0' && char <= '9') {
      plaintext.push(char);
    } else {
      const y = char.charCodeAt(0) - 97;

      const decryptedY = (aInverse * (y - b)) % M;
      const positiveDecryptedY = (decryptedY + M) % M;
      
      plaintext.push(String.fromCharCode(positiveDecryptedY + 97));
    }
  }

  return plaintext.join('');
};