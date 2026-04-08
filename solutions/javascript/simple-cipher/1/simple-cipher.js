//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {

  constructor(key) {
    this._key = key || this.generateRandomKey();
  }

  generateRandomKey() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomKey = '';
    for (let i = 0; i < 100; i++) {
      randomKey += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return randomKey;
  }

  get key() {
    return this._key;
  }

  encode(plaintext) {
    return plaintext
      .split('')
      .map((char, index) => {
        const p = char.charCodeAt(0) - 97; // 97 is 'a'
        const k = this._key.charCodeAt(index % this._key.length) - 97;
        return String.fromCharCode(((p + k) % 26) + 97);
      })
      .join('');
  }

  decode(ciphertext) {
    return ciphertext
      .split('')
      .map((char, index) => {
        const c = char.charCodeAt(0) - 97;
        const k = this._key.charCodeAt(index % this._key.length) - 97;
        return String.fromCharCode(((c - k + 26) % 26) + 97);
      })
      .join('');
  }
}
