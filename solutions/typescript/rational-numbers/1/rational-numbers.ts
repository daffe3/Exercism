export class Rational {
  public numerator: number;
  public denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error('Denominator cannot be zero');
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.reduce();
  }

  private gcd(a: number, b: number): number {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  public reduce(): Rational {
    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }

    const divisor = this.gcd(this.numerator, this.denominator);
    this.numerator /= divisor;
    this.denominator /= divisor;

    return this;
  }

  public add(other: Rational): Rational {
    const num = this.numerator * other.denominator + other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  public sub(other: Rational): Rational {
    const num = this.numerator * other.denominator - other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  public mul(other: Rational): Rational {
    const num = this.numerator * other.numerator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  public div(other: Rational): Rational {
    const num = this.numerator * other.denominator;
    const den = other.numerator * this.denominator;
    return new Rational(num, den);
  }

  public abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  public exprational(n: number): Rational {
    if (n >= 0) {
      return new Rational(this.numerator ** n, this.denominator ** n);
    } else {
      const m = Math.abs(n);
      return new Rational(this.denominator ** m, this.numerator ** m);
    }
  }

  public expreal(x: number): number {
    return x ** (this.numerator / this.denominator);
  }
}