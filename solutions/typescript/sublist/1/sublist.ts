export class List {
  private items: number[];

  constructor(...items: number[]) {
    this.items = items;
  }

  public compare(other: List): 'equal' | 'sublist' | 'superlist' | 'unequal' {
    const a = this.items;
    const b = other.items;

    if (a.length === b.length && this.isSublist(a, b)) {
      return 'equal';
    }

    if (a.length < b.length && this.isSublist(a, b)) {
      return 'sublist';
    }

    if (a.length > b.length && this.isSublist(b, a)) {
      return 'superlist';
    }

    return 'unequal';
  }

  private isSublist(sub: number[], superList: number[]): boolean {
    if (sub.length === 0) {
      return true;
    }

    if (sub.length > superList.length) {
      return false;
    }

    for (let i = 0; i <= superList.length - sub.length; i++) {
      let match = true;
      for (let j = 0; j < sub.length; j++) {
        if (superList[i + j] !== sub[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return true;
      }
    }

    return false;
  }
}