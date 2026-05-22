//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

class CircularBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = [];
  }

  read() {
    if (this.buffer.length === 0) {
      throw new BufferEmptyError();
    }
    return this.buffer.shift(); 
  }

  write(value) {
    if (value === null || value === undefined) return;
    
    if (this.buffer.length >= this.capacity) {
      throw new BufferFullError();
    }
    this.buffer.push(value);
  }

  forceWrite(value) {
    if (value === null || value === undefined) return;

    if (this.buffer.length >= this.capacity) {
      this.buffer.shift(); 
    }
    this.buffer.push(value);
  }

  clear() {
    this.buffer = [];
  }
}

export default CircularBuffer;
