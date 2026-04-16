import BinaryNode from "../types/BinaryNode"

export default function breadthFirstSearch(root: BinaryNode<number>, needle: number): boolean {
  const queue: (BinaryNode<number> | null)[] = [root];
  while (queue.length) {
    const curr = queue.shift() as BinaryNode<number> | undefined | null;

    // search
    if(curr?.value === needle) return true;
    
    if(curr?.left) queue.push(curr.left);
    if(curr?.right) queue.push(curr.right);
  }
  return false;
}