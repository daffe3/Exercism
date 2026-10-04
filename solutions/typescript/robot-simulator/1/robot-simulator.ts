export class InvalidInputError extends Error {
  constructor(message?: string) {
    super(message || 'Invalid Input');
    this.name = 'InvalidInputError';
  }
}

type Direction = 'north' | 'east' | 'south' | 'west';
type Coordinates = [number, number];

const DIRECTIONS: Direction[] = ['north', 'east', 'south', 'west'];

export class Robot {
  private _x: number = 0;
  private _y: number = 0;
  private _bearing: Direction = 'north';

  get bearing(): Direction {
    return this._bearing;
  }

  get coordinates(): Coordinates {
    return [this._x, this._y];
  }

  public place({ x, y, direction }: { x: number; y: number; direction: string }): void {
    if (!DIRECTIONS.includes(direction as Direction)) {
      throw new InvalidInputError('Invalid robot bearing');
    }

    this._x = x;
    this._y = y;
    this._bearing = direction as Direction;
  }

  public evaluate(instructions: string): void {
    for (const char of instructions) {
      switch (char) {
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'A':
          this.advance();
          break;
        default:
          throw new InvalidInputError('Invalid instruction');
      }
    }
  }

  private turnRight(): void {
    const currentIndex = DIRECTIONS.indexOf(this._bearing);
    this._bearing = DIRECTIONS[(currentIndex + 1) % 4];
  }

  private turnLeft(): void {
    const currentIndex = DIRECTIONS.indexOf(this._bearing);
    this._bearing = DIRECTIONS[(currentIndex + 3) % 4];
  }

  private advance(): void {
    switch (this._bearing) {
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
}
