import BinaryNode from "../types/BinaryNode";

function walk(node:BinaryNode<number> | null, path: number[]): number[] {
  if(!node) return path;

  // root
  path.push(node.value);
  // left
  walk(node.left, path);
  //right
  walk(node.right, path);

  return path;
}

export default function preOrderSearch(root: BinaryNode<number>): number[] {
  return walk(root, []);
}