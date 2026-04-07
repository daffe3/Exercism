// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const usedNames = new Set();

export class Robot {
  constructor() {
    this._name = null;
  }

  get name() {
    if (!this._name) {
      this._name = this.generateUniqueName();
    }
    return this._name;
  }

  reset() {
    this._name = null;
  }

  generateUniqueName() {
    let newName;

    do {
      newName = this.generateRandomName();
    } while (usedNames.has(newName));

    usedNames.add(newName);
    return newName;
  }

  generateRandomName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';

    let name = '';
    for (let i = 0; i < 2; i++) {
      name += letters[Math.floor(Math.random() * letters.length)];
    }
    for (let i = 0; i < 3; i++) {
      name += digits[Math.floor(Math.random() * digits.length)];
    }
    
    return name;
  }
}

Robot.releaseNames = () => {
  usedNames.clear();
};