//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this._value = value;
    this.dependents = new Set();
  }

  get value() {
    return this._value;
  }

  setValue(value) {
    if (this._value === value) return;

    this._value = value;

    const affectedCells = new Set();
    const gatherDependents = (cell) => {
      for (const dep of cell.dependents) {
        if (!affectedCells.has(dep)) {
          affectedCells.add(dep);
          dep.storeOldValue();
          gatherDependents(dep);
        }
      }
    };
    gatherDependents(this);

    let stable = false;
    while (!stable) {
      stable = true;
      for (const cell of affectedCells) {
        if (cell.updateValue()) {
          stable = false;
        }
      }
    }

    for (const cell of affectedCells) {
      cell.triggerCallbacksIfChanged();
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.dependents = new Set();
    this.callbacks = new Set();
    
    this._value = this.compute();
    this._oldValue = undefined;

    for (const inputCell of this.inputCells) {
      inputCell.dependents.add(this);
    }
  }

  get value() {
    return this._value;
  }

  compute() {
    return this.fn(this.inputCells);
  }

  storeOldValue() {
    if (this._oldValue === undefined) {
      this._oldValue = this._value;
    }
  }

  updateValue() {
    const newValue = this.compute();
    if (this._value !== newValue) {
      this._value = newValue;
      return true;
    }
    return false;
  }

  triggerCallbacksIfChanged() {
    if (this._oldValue !== undefined && this._value !== this._oldValue) {
      for (const callbackCell of this.callbacks) {
        callbackCell.fire(this);
      }
    }
    this._oldValue = undefined;
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = []; 
  }

  fire(cell) {
    this.values.push(this.fn(cell));
  }
}