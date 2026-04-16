import BinaryNode from "../types/BinaryNode";

export default class BinaryTree<T> {
  public root: BinaryNode<number> | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    if(this.root === null) {
      this.root = { value, left: null, right: null } as BinaryNode<number>;
      return;
    }
    this.insertNode(this.root, this.root, value);
  }

  private insertNode(node: BinaryNode<number> | null, parent: BinaryNode<number>, value: number): void {
    if(node === null) {
      node = { value, left: null, right: null } as BinaryNode<number>;
      if(node.value > parent.value) {
        parent.right = node;
      } else {
        parent.left = node;
      }
      return;
    }

    if(node.value < value) {
      this.insertNode(node.right, node, value);
    } else {
      this.insertNode(node.left, node, value);
    }
  }

}