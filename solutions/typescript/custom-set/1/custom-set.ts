export class CustomSet {
  private elements: number[];

  constructor(initial: number[] = []) {
    this.elements = [];
    for (const item of initial) {
      if (!this.contains(item)) {
        this.elements.push(item);
      }
    }
  }

  public empty(): boolean {
    return this.elements.length === 0;
  }

  public contains(element: number): boolean {
    return this.elements.includes(element);
  }

  public add(element: number): CustomSet {
    if (!this.contains(element)) {
      this.elements.push(element);
    }
    return this;
  }

  public subset(other: CustomSet): boolean {
    return this.elements.every((item) => other.contains(item));
  }

  public disjoint(other: CustomSet): boolean {
    return this.elements.every((item) => !other.contains(item));
  }

  public eql(other: CustomSet): boolean {
    return (
      this.elements.length === other.elements.length &&
      this.subset(other)
    );
  }

  public union(other: CustomSet): CustomSet {
    return new CustomSet([...this.elements, ...other.elements]);
  }

  public intersection(other: CustomSet): CustomSet {
    const common = this.elements.filter((item) => other.contains(item));
    return new CustomSet(common);
  }

  public difference(other: CustomSet): CustomSet {
    const diff = this.elements.filter((item) => !other.contains(item));
    return new CustomSet(diff);
  }
}