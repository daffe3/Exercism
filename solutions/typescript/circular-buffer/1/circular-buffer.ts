export class BufferFullError extends Error {
  constructor() {
    super('Buffer is full');
    this.name = 'BufferFullError';
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super('Buffer is empty');
    this.name = 'BufferEmptyError';
  }
}

export default class CircularBuffer<T> {
  private buffer: T[];
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.buffer = [];
  }

  public read(): T {
    if (this.buffer.length === 0) {
      throw new BufferEmptyError();
    }
    return this.buffer.shift()!;
  }

  public write(value: T): void {
    if (this.buffer.length === this.capacity) {
      throw new BufferFullError();
    }
    this.buffer.push(value);
  }

  public forceWrite(value: T): void {
    if (this.buffer.length === this.capacity) {
      this.buffer.shift();
    }
    this.buffer.push(value);
  }

  public clear(): void {
    this.buffer = [];
  }
}
