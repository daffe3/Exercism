export class List<T = unknown> {
  private items: { [index: number]: T };
  private _length: number;

  constructor(items: { [index: number]: T } = {}, length: number = 0) {
    this.items = items;
    this._length = length;
  }

  public static create<T>(...values: T[]): List<T> {
    const list = new List<T>();
    let i = 0;
    for (const val of values) {
      list.items[i] = val;
      i++;
    }
    list._length = i;
    return list;
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let i = 0; i < this._length; i++) {
      yield this.items[i];
    }
  }

  public forEach(fn: (item: T) => void): void {
    for (let i = 0; i < this._length; i++) {
      fn(this.items[i]);
    }
  }

  public length(): number {
    return this._length;
  }

  public append(other: List<T>): List<T> {
    const newList = new List<T>();
    let count = 0;

    for (let i = 0; i < this._length; i++) {
      newList.items[count] = this.items[i];
      count++;
    }

    for (let i = 0; i < other._length; i++) {
      newList.items[count] = other.items[i];
      count++;
    }

    newList._length = count;
    return newList;
  }

  public concatenate(otherLists: List<List<T>>): List<T> {
    let result: List<T> = this.append(new List<T>());

    for (let i = 0; i < otherLists._length; i++) {
      result = result.append(otherLists.items[i]);
    }

    return result;
  }

  public filter<F extends T>(predicate: (item: T) => item is F): List<F>;
  public filter(predicate: (item: T) => boolean): List<T>;
  public filter(predicate: (item: T) => boolean): List<T> {
    const newList = new List<T>();
    let count = 0;

    for (let i = 0; i < this._length; i++) {
      const item = this.items[i];
      if (predicate(item)) {
        newList.items[count] = item;
        count++;
      }
    }

    newList._length = count;
    return newList;
  }

  public map<U>(fn: (item: T) => U): List<U> {
    const newList = new List<U>();

    for (let i = 0; i < this._length; i++) {
      newList.items[i] = fn(this.items[i]);
    }

    newList._length = this._length;
    return newList;
  }

  public foldl<U>(fn: (acc: U, item: T) => U, initial: U): U {
    let acc = initial;

    for (let i = 0; i < this._length; i++) {
      acc = fn(acc, this.items[i]);
    }

    return acc;
  }

  public foldr<U>(fn: (acc: U, item: T) => U, initial: U): U {
    let acc = initial;

    for (let i = this._length - 1; i >= 0; i--) {
      acc = fn(acc, this.items[i]);
    }

    return acc;
  }

  public reverse(): List<T> {
    const newList = new List<T>();

    for (let i = 0; i < this._length; i++) {
      newList.items[i] = this.items[this._length - 1 - i];
    }

    newList._length = this._length;
    return newList;
  }
}