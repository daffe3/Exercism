type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export class Triplet {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }

  static where({ minFactor = 1, maxFactor, sum }: Options): Triplet[] {
    return triplets({ minFactor, maxFactor, sum });
  }
}

export function triplets({ minFactor = 1, maxFactor, sum }: Options): Triplet[] {
  const result: Triplet[] = [];
  const max = maxFactor ?? Math.floor(sum / 2);

  for (let a = minFactor; a <= Math.floor(sum / 3); a++) {
    for (let b = a + 1; b <= Math.floor(sum / 2); b++) {
      const c = sum - a - b;

      if (c <= b) break;
      if (c > max) continue;

      if (a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}