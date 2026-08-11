export class Triangle {
  private sides: [number, number, number];

  constructor(...sides: number[]) {
    this.sides = sides as [number, number, number];
  }

  private get isValid(): boolean {
    const [a, b, c] = this.sides;
    const allPositive = a > 0 && b > 0 && c > 0;
    const satisfiesInequality = a + b >= c && b + c >= a && a + c >= b;
    return allPositive && satisfiesInequality;
  }

  get isEquilateral(): boolean {
    const [a, b, c] = this.sides;
    return this.isValid && a === b && b === c;
  }

  get isIsosceles(): boolean {
    const [a, b, c] = this.sides;
    return this.isValid && (a === b || b === c || a === c);
  }

  get isScalene(): boolean {
    const [a, b, c] = this.sides;
    return this.isValid && a !== b && b !== c && a !== c;
  }
}