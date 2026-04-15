import BinaryNode from "../types/BinaryNode";

function walk(node:BinaryNode<number> | null, path: number[]): number[] {
  if(!node) return path;

  // left
  walk(node.left, path);
  // right
  walk(node.right, path);
  // root
  path.push(node.value);

  return path;
}

export default function postOrderSearch(root: BinaryNode<number>): number[] {
  return walk(root, []);
}