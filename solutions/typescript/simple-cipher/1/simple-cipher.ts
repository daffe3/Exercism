export class SimpleCipher {
  public readonly key: string;

  constructor(key?: string) {
    if (key !== undefined) {
      this.key = key;
    } else {
      this.key = this.generateRandomKey();
    }
  }

  private generateRandomKey(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 100; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }
    return result;
  }

  public encode(plainText: string): string {
    let result = '';
    for (let i = 0; i < plainText.length; i++) {
      const charCode = plainText.charCodeAt(i) - 97; 
      const keyShift = this.key.charCodeAt(i % this.key.length) - 97;
      
      const newCharCode = ((charCode + keyShift) % 26) + 97;
      result += String.fromCharCode(newCharCode);
    }
    return result;
  }

  public decode(cipherText: string): string {
    let result = '';
    for (let i = 0; i < cipherText.length; i++) {
      const charCode = cipherText.charCodeAt(i) - 97;
      const keyShift = this.key.charCodeAt(i % this.key.length) - 97;
    
      const newCharCode = ((charCode - keyShift + 26) % 26) + 97;
      result += String.fromCharCode(newCharCode);
    }
    return result;
  }
}