//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Triangle {
constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
    this.a = this.sides[0];
    this.b = this.sides[1];
    this.c = this.sides[2];
  }

  get isValid() {
    const hasLength = this.a > 0 && this.b > 0 && this.c > 0;
    const satisfiesInequality = this.a + this.b >= this.c;
    return hasLength && satisfiesInequality;
  }

  get isEquilateral() {
    return this.isValid && this.a === this.c;
  }

  get isIsosceles() {
    return this.isValid && (this.a === this.b || this.b === this.c);
  }

  get isScalene() {
    return this.isValid && this.a !== this.b && this.b !== this.c && this.a !== this.c;
  }
}