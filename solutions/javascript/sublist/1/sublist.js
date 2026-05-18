//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(elements = []) {
    this.elements = elements;
  }

  compare(otherList) {
    const a = this.elements;
    const b = otherList.elements;

    if (a.length === b.length) {
      return this.isSublist(a, b) ? 'EQUAL' : 'UNEQUAL';
    }

    if (a.length < b.length) {
      return this.isSublist(a, b) ? 'SUBLIST' : 'UNEQUAL';
    }

    if (a.length > b.length) {
      return this.isSublist(b, a) ? 'SUPERLIST' : 'UNEQUAL';
    }

    return 'UNEQUAL';
  }

  isSublist(list1, list2) {
    if (list1.length === 0) return true;
    if (list2.length === 0) return false;

    for (let i = 0; i <= list2.length - list1.length; i++) {
      let match = true;
      
      for (let j = 0; j < list1.length; j++) {
        if (list2[i + j] !== list1[j]) {
          match = false;
          break;
        }
      }
      
      if (match) return true;
    }

    return false;
  }
}