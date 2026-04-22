//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 1, maxFactor, sum }) {
  const results = [];
  for (let a = minFactor; a < sum / 3; a++) {
    for (let b = a + 1; b < sum / 2; b++) {
      const c = sum - a - b;
  
      if (a * a + b * b === c * c) {
        if (!maxFactor || (c <= maxFactor)) {
          results.push(new Triplet(a, b, c));
        }
      }
    }
  }
  return results;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}