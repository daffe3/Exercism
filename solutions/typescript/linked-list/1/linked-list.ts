class Node<T> {
  public value: T;
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<TElement> {
  private head: Node<TElement> | null = null;
  private tail: Node<TElement> | null = null;
  private size: number = 0;

  public push(element: TElement): void {
    const newNode = new Node(element);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  public pop(): TElement | undefined {
    if (!this.tail) {
      return undefined;
    }

    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    }

    this.size--;
    return removedNode.value;
  }

  public unshift(element: TElement): void {
    const newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  public shift(): TElement | undefined {
    if (!this.head) {
      return undefined;
    }

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      if (this.head) {
        this.head.prev = null;
      }
    }

    this.size--;
    return removedNode.value;
  }

  public delete(element: TElement): void {
    let current = this.head;

    while (current) {
      if (current.value === element) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        this.size--;
        break; 
      }

      current = current.next;
    }
  }

  public count(): number {
    return this.size;
  }
}
