//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(element) {
    this._next = element;
  }
}

export class List {
  constructor(array = []) {
    this._head = null;
    this._length = 0;

    array.forEach(value => this.add(new Element(value)));
  }

  add(nextElement) {
    nextElement.next = this._head;
    this._head = nextElement;
    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const result = [];
    let current = this._head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  reverse() {
    return new List(this.toArray());
  }
}
