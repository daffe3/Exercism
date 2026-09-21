export class Bowling {
  private rolls: number[] = [];

  public roll(pins: number): void {
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }
    if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    if (this.isGameComplete()) {
      throw new Error('Cannot roll after game is over');
    }

    this.validateRoll(pins);

    this.rolls.push(pins);
  }

  public score(): number {
    if (!this.isGameComplete()) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        totalScore += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else {
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10;
  }

  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  private isGameComplete(): boolean {
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (rollIndex >= this.rolls.length) {
        return false;
      }

      if (frame === 9) {
        if (this.isStrike(rollIndex)) {
          return this.rolls.length === rollIndex + 3;
        }
        if (rollIndex + 1 < this.rolls.length && this.isSpare(rollIndex)) {
          return this.rolls.length === rollIndex + 3;
        }
        return this.rolls.length === rollIndex + 2;
      }

      if (this.isStrike(rollIndex)) {
        rollIndex += 1;
      } else {
        rollIndex += 2;
      }
    }

    return true;
  }

  private validateRoll(pins: number): void {
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (rollIndex === this.rolls.length) {
        return;
      }

      if (rollIndex === this.rolls.length - 1) {
        if (frame === 9) {
          const firstInFrame = this.rolls[rollIndex];
          if (firstInFrame < 10 && firstInFrame + pins > 10) {
            throw new Error('Pin count exceeds pins on the lane');
          }
        } else if (!this.isStrike(rollIndex)) {
          if (this.rolls[rollIndex] + pins > 10) {
            throw new Error('Pin count exceeds pins on the lane');
          }
        }
        return;
      }

      if (rollIndex === this.rolls.length - 2 && frame === 9) {
        const first = this.rolls[rollIndex];
        const second = this.rolls[rollIndex + 1];

        if (first === 10 && second < 10 && second + pins > 10) {
          throw new Error('Pin count exceeds pins on the lane');
        }
        return;
      }

      if (frame < 9 && this.isStrike(rollIndex)) {
        rollIndex += 1;
      } else {
        rollIndex += 2;
      }
    }
  }
}