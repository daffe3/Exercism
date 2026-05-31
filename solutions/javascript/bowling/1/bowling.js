//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.rolls = [];
    this.currentFramePins = 0;
    this.frameIndex = 1;
    this.isFirstRollInFrame = true;
  }

  roll(pins) {
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }
    if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    if (this.isGameOver()) {
      throw new Error('Cannot roll after game is over');
    }

    if (this.frameIndex < 10) {
      if (this.isFirstRollInFrame) {
        if (pins === 10) {
          this.frameIndex++;
        } else {
          this.currentFramePins = pins;
          this.isFirstRollInFrame = false;
        }
      } else {
        if (this.currentFramePins + pins > 10) {
          throw new Error('Pin count exceeds pins on the lane');
        }
        this.currentFramePins = 0;
        this.isFirstRollInFrame = true;
        this.frameIndex++;
      }
    } else {
      this.validateFrameTen(pins);
    }

    this.rolls.push(pins);
  }

  score() {
    if (!this.isGameOver()) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    let totalScore = 0;
    let rollPointer = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollPointer)) {
        totalScore += 10 + this.rolls[rollPointer + 1] + this.rolls[rollPointer + 2];
        rollPointer += 1;
      } else if (this.isSpare(rollPointer)) {
        totalScore += 10 + this.rolls[rollPointer + 2];
        rollPointer += 2;
      } else {
        totalScore += this.rolls[rollPointer] + this.rolls[rollPointer + 1];
        rollPointer += 2;
      }
    }

    return totalScore;
  }

  isStrike(rollPointer) {
    return this.rolls[rollPointer] === 10;
  }

  isSpare(rollPointer) {
    return this.rolls[rollPointer] + this.rolls[rollPointer + 1] === 10;
  }

  isGameOver() {
    let rollPointer = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (rollPointer >= this.rolls.length) return false;

      if (this.rolls[rollPointer] === 10) {
        if (frame === 9) return this.rolls.length === rollPointer + 3;
        rollPointer += 1;
      } else {
        if (rollPointer + 1 >= this.rolls.length) return false;
        if (this.rolls[rollPointer] + this.rolls[rollPointer + 1] === 10) {
          if (frame === 9) return this.rolls.length === rollPointer + 3;
        } else {
          if (frame === 9) return this.rolls.length === rollPointer + 2;
        }
        rollPointer += 2;
      }
    }
    return true;
  }

  validateFrameTen(pins) {
    const frameTenRolls = this.rolls.slice(this.getFrameTenStartPointer());
    
    if (frameTenRolls.length === 1) {
      const firstRoll = frameTenRolls[0];
      if (firstRoll < 10 && firstRoll + pins > 10) {
        throw new Error('Pin count exceeds pins on the lane');
      }
    } else if (frameTenRolls.length === 2) {
      const firstRoll = frameTenRolls[0];
      const secondRoll = frameTenRolls[1];
      if (firstRoll === 10 && secondRoll < 10 && secondRoll + pins > 10) {
        throw new Error('Pin count exceeds pins on the lane');
      }
    }
  }

  getFrameTenStartPointer() {
    let pointer = 0;
    for (let frame = 0; frame < 9; frame++) {
      if (this.rolls[pointer] === 10) {
        pointer += 1;
      } else {
        pointer += 2;
      }
    }
    return pointer;
  }
}