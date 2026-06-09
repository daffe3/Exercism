//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(plaintext) {
    this.plaintext = plaintext;
  }

  get ciphertext() {

    const normalized = this.plaintext.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (normalized.length === 0) {
      return '';
    }

    const c = Math.ceil(Math.sqrt(normalized.length));
    const r = Math.round(Math.sqrt(normalized.length));

    const rows = [];
    for (let i = 0; i < normalized.length; i += c) {
      let row = normalized.slice(i, i + c);
      
      if (row.length < c) {
        row = row.padEnd(c, ' ');
      }
      rows.push(row);
    }

    const chunks = [];
    for (let col = 0; col < c; col++) {
      let chunk = '';
      for (let row = 0; row < rows.length; row++) {
        chunk += rows[row][col];
      }
      chunks.push(chunk);
    }

    return chunks.join(' ');
  }
}