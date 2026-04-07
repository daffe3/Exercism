//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*Implementing List Ops is a challenge in manual array manipulation. Since we are forbidden from using Array.prototype methods (like .map, .filter, or even .push), we must rely on the spread operator [...] and basic loops to build and deconstruct our lists.

The Implementation
We will store our items in a property (e.g., this.values) and iterate through them manually for every operation. 

JavaScript*/
// @ts-check

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(otherList) {
    this.values = [...this.values, ...otherList.values];
    return this;
  }

  concat(listOfLists) {
    for (const list of listOfLists.values) {
      this.append(list);
    }
    return this;
  }

  filter(predicate) {
    let result = [];
    for (const item of this.values) {
      if (predicate(item)) {
        result = [...result, item];
      }
    }
    return new List(result);
  }

  map(callback) {
    let result = [];
    for (const item of this.values) {
      result = [...result, callback(item)];
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (const _ of this.values) {
      count++;
    }
    return count;
  }

  foldl(callback, accumulator) {
    for (const item of this.values) {
      accumulator = callback(accumulator, item);
    }
    return accumulator;
  }

  foldr(callback, accumulator) {
    for (let i = this.length() - 1; i >= 0; i--) {
      accumulator = callback(accumulator, this.values[i]);
    }
    return accumulator;
  }

  reverse() {
    let result = [];
    for (const item of this.values) {
      result = [item, ...result];
    }
    return new List(result);
  }
}
