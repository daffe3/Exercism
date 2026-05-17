//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(numerator, denominator) {
    this.num = numerator;
    this.den = denominator;
    this.reduce();
  }

  add(other) {
    const num = this.num * other.den + other.num * this.den;
    const den = this.den * other.den;
    return new Rational(num, den);
  }

  sub(other) {
    const num = this.num * other.den - other.num * this.den;
    const den = this.den * other.den;
    return new Rational(num, den);
  }

  mul(other) {
    const num = this.num * other.num;
    const den = this.den * other.den;
    return new Rational(num, den);
  }

  div(other) {
    const num = this.num * other.den;
    const den = this.den * other.num;
    return new Rational(num, den);
  }

  abs() {
    return new Rational(Math.abs(this.num), Math.abs(this.den));
  }

  exprational(n) {
    if (n >= 0) {
      return new Rational(Math.pow(this.num, n), Math.pow(this.den, n));
    } else {
      const m = Math.abs(n);
      return new Rational(Math.pow(this.den, m), Math.pow(this.num, m));
    }
  }

  expreal(x) {
    const power = Math.pow(x, this.num);
    const result = Math.pow(power, 1 / this.den);

    return Math.abs(Math.round(result) - result) < 1e-9 ? Math.round(result) : result;
  }

  reduce() {
    if (this.den === 0) {
      throw new Error('Denominator cannot be zero');
    }

    const gcdValue = this.gcd(Math.abs(this.num), Math.abs(this.den));
    
    this.num /= gcdValue;
    this.den /= gcdValue;

    if (this.den < 0) {
      this.num = -this.num;
      this.den = -this.den;
    }

    return this;
  }

  gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}
