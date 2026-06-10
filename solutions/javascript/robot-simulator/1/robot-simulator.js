//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DIRECTIONS = ['north', 'east', 'south', 'west'];

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this._x = 0;
    this._y = 0;
    this._directionIndex = 0;
  }

  get bearing() {
    return DIRECTIONS[this._directionIndex];
  }

  get coordinates() {
    return [this._x, this._y];
  }

  place({ x, y, direction }) {
    if (!DIRECTIONS.includes(direction)) {
      throw new InvalidInputError('Invalid robot bearing');
    }

    this._x = x;
    this._y = y;
    this._directionIndex = DIRECTIONS.indexOf(direction);
  }

  turnRight() {
    this._directionIndex = (this._directionIndex + 1) % 4;
  }

  turnLeft() {

    this._directionIndex = (this._directionIndex + 3) % 4;
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this._y += 1;
        break;
      case 'east':
        this._x += 1;
        break;
      case 'south':
        this._y -= 1;
        break;
      case 'west':
        this._x -= 1;
        break;
    }
  }

  evaluate(instructions) {
    if (/[^RLa]/.test(instructions) && /[^RLA]/.test(instructions)) {
    }

    for (const char of instructions) {
      if (char === 'R') {
        this.turnRight();
      } else if (char === 'L') {
        this.turnLeft();
      } else if (char === 'A') {
        this.advance();
      } else {
        throw new InvalidInputError('Invalid instruction');
      }
    }
  }
}
