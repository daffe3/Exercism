export class Anagram {
  private targetLower: string;
  private sortedTarget: string;

  constructor(input: string) {
    this.targetLower = input.toLowerCase();
    this.sortedTarget = this.sortLetters(this.targetLower);
  }

  public matches(...potentials: (string | string[])[]): string[] {
    const candidates = potentials.flat() as string[];

    return candidates.filter((candidate) => {
      const candidateLower = candidate.toLowerCase();

      if (this.targetLower === candidateLower) {
        return false;
      }

      return this.sortedTarget === this.sortLetters(candidateLower);
    });
  }

  private sortLetters(str: string): string {
    return str.split('').sort().join('');
  }
}