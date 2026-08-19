const ALLERGEN_MAP: Record<string, number> = {
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
  private score: number;

  constructor(allergenIndex: number) {
    this.score = allergenIndex;
  }

  public list(): string[] {
    return Object.keys(ALLERGEN_MAP).filter((allergen) =>
      this.allergicTo(allergen)
    );
  }

  public allergicTo(allergen: string): boolean {
    const allergenValue = ALLERGEN_MAP[allergen];
    if (!allergenValue) {
      return false;
    }
    return (this.score & allergenValue) !== 0;
  }
}