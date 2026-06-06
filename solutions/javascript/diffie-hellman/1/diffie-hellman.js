//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (p <= 0 || g <= 0) {
      throw new Error('Arguments must be greater than 0');
    }
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Arguments must be prime numbers');
    }

    this.p = BigInt(p);
    this.g = BigInt(g);
  }

  static getPrivateKey(p) {
    if (p <= 2) {
      throw new Error('Modulus p must be greater than 2 to have a valid private key');
    }

    const min = 2;
    const max = p - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const boundary = Math.sqrt(num);
    for (let i = 3; i <= boundary; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  getPublicKey(privateKey) {
    const priv = BigInt(privateKey);
    
    if (priv <= 1n || priv >= this.p) {
      throw new Error('Private key must be greater than 1 and less than p');
    }

    return Number(this.modularExponentiation(this.g, priv, this.p));
  }

  getSecret(theirPublicKey, myPrivateKey) {
    const theirPublic = BigInt(theirPublicKey);
    const myPrivate = BigInt(myPrivateKey);

    return Number(this.modularExponentiation(theirPublic, myPrivate, this.p));
  }

  modularExponentiation(base, exponent, modulus) {
    if (modulus === 1n) return 0n;
    
    let result = 1n;
    base = base % modulus;
    let exp = exponent;

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        result = (result * base) % modulus;
      }
      exp = exp / 2n;
      base = (base * base) % modulus;
    }
    
    return result;
  }
}