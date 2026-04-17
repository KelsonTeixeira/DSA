
export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapfyUp(this.length);
    this.length++;
  }

  delete(): number {
    if(this.length === 0) return -1;
    const out = this.data[0];
    if(this.length === 1) {
      this.data = [];
      this.length = 0;
      return out;
    }
    this.length--;
    this.data[0] = this.data[this.length];
    this.heapfyDown(0);
    return out;
  }

  private heapfyDown(index: number):void {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if(index >= this.length) return;
    if(leftIndex >= this.length) return;

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const currValue = this.data[index];

    if(leftValue > rightValue && currValue > rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = currValue;
      this.heapfyDown(rightIndex);
    } else if (rightValue > leftValue && currValue > leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = currValue;
      this.heapfyDown(leftIndex);
    }
  }

  private heapfyUp(index: number): void {
    if(index === 0) return;
    const parent = this.parent(index);
    if(this.data[parent] > this.data[index]) {
      const temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
      this.heapfyUp(parent);
    }
  }

  private parent(index: number): number {
    return Math.floor((index -1) / 2);
  }

  private leftChild(index: number): number {
    return (index * 2) + 1;
  }

  private rightChild(index: number): number {
    return (index * 2) + 2;
  }
}