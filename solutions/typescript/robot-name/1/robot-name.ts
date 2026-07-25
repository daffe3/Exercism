export class Robot {
  private robotName: string = '';
  private static usedNames: Set<string> = new Set();

  constructor() {
    this.resetName();
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private static generateUniqueName(): string {
    if (Robot.usedNames.size >= 26 * 26 * 1000) {
      throw new Error('All available robot names have been used!');
    }

    let candidateName: string;

    do {
      candidateName = Robot.generateRandomName();
    } while (Robot.usedNames.has(candidateName));

    Robot.usedNames.add(candidateName);
    return candidateName;
  }

  private static generateRandomName(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const letter1 = letters.charAt(Math.floor(Math.random() * letters.length));
    const letter2 = letters.charAt(Math.floor(Math.random() * letters.length));

    const digits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    return `${letter1}${letter2}${digits}`;
  }
}