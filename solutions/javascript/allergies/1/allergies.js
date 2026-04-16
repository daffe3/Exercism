//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGENS = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    return Object.keys(ALLERGENS).filter((item) => this.allergicTo(item));
  }

  allergicTo(item) {
    const itemValue = ALLERGENS[item];
    return (this.score & itemValue) === itemValue;
  }
}