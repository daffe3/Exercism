export class DiffieHellman {
  private p: number;
  private g: number;

  constructor(p: number, g: number) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('p and g must be prime numbers');
    }
    if (p <= 0 || g <= 0) {
      throw new Error('p and g must be positive numbers');
    }
    this.p = p;
    this.g = g;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Private key must be greater than 1 and less than p');
    }

    return this.modPow(this.g, privateKey, this.p);
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return this.modPow(theirPublicKey, myPrivateKey, this.p);
  }

  private modPow(base: number, exponent: number, modulus: number): number {
    let result = 1;
    let b = base % modulus;
    let e = exponent;

    while (e > 0) {
      if (e % 2 === 1) {
        result = (result * b) % modulus;
      }
      e = Math.floor(e / 2);
      b = (b * b) % modulus;
    }

    return result;
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }
}