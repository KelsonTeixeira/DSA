type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>
};

export default class LinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
    const node = {value: item} as Node<T>;
    this.length++;
    if(!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if(idx > this.length) throw new Error('not allowed');
    if(idx === this.length) {
      this.append(item);
      return;
    }
    if(idx === 0) {
      this.prepend(item);
      return;
    }
    const node = { value: item } as Node<T>;

    const curr = this.getAt(idx);
    if(!curr) throw new Error('not allowed');
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if(node.prev) node.prev.next = node;
    this.length++;
  }

  append(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if(!this.tail) {
      this.head = this.tail = node;
      return;
    }
    
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    if(!this.head) return undefined;
    let curr = this.head;
    for(let i = 0; i < this.length; i++) {
      if(curr.value === item) {
        if(curr.prev) {
          curr.prev.next = curr.next;
        } else {
          this.head = curr.next;
        }
        if(curr.next) {
          curr.next.prev = curr.prev;
        } else {
          this.tail = curr.prev;
        }
        curr.prev = curr.next = undefined;
        this.length--;
        return curr.value;
      }
      curr = curr.next as Node<T>;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    const node = this.getAt(idx);
    if(node) return node.value;
    return undefined;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);

    if(!node) return undefined;
    this.length--;
    if(this.length === 0) {
      const out = node.value;
      this.head = this.tail = undefined;
      return out;
    }

    if(node.prev) node.prev.next = node.next;
    if(node.next) node.next.prev = node.prev;
    if(node === this.head) this.head = node.next;
    if(node === this.tail) this.tail = node.prev;
    node.prev = node.next = undefined;
    return node.value;
  }

  getAt(idx: number): Node<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i <= idx; i++) {
      if(i === idx) return curr as Node<T>;
      curr = curr.next;
    }
    return undefined;
  }
}