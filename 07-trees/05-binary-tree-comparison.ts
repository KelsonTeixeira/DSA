import BinaryNode from "../types/BinaryNode";

function walk(node: BinaryNode<number> | null, path: number[]): number[] {
  if(!node) return path;

  walk(node.left, path);
  walk(node.right, path);
  path.push(node.value);

  return path;
}

function compareArrays(arr1: number[], arr2: number[]): boolean {
  if(arr1.length !== arr2.length) return false;
  return arr1.every((value, index) => value === arr2[index]);
}

export default function BTC(root1: BinaryNode<number> | null, root2: BinaryNode<number> | null): boolean {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  const firstTree = walk(root1, []);
  const secondtree = walk(root2, []);
  return compareArrays(firstTree, secondtree);
}