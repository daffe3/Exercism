//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(o) {
    return new ComplexNumber(this.real + o.real, this.imag + o.imag);
  }

  sub(o) {
    return new ComplexNumber(this.real - o.real, this.imag - o.imag);
  }

  mul(o) {
    const a = this.real;
    const b = this.imag;
    const c = o.real;
    const d = o.imag;
    return new ComplexNumber(a * c - b * d, b * c + a * d);
  }

  div(o) {
    const a = this.real;
    const b = this.imag;
    const c = o.real;
    const d = o.imag;
    
    const divisor = c ** 2 + d ** 2;
    
    return new ComplexNumber(
      (a * c + b * d) / divisor,
      (b * c - a * d) / divisor
    );
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp() {
    const eA = Math.exp(this.real);
    return new ComplexNumber(
      eA * Math.cos(this.imag),
      eA * Math.sin(this.imag)
    );
  }
}