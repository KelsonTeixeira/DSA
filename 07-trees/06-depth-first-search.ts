import BinaryNode from "../types/BinaryNode";

function search(node: BinaryNode<number> | null, needle: number): boolean {
  if(!node) return false;
  if(node.value === needle) return true;
  if(node.value < needle) return DFS(node.right, needle);
  return search(node.left, needle);
}

export default function DFS(root: BinaryNode<number> | null, needle: number): boolean {
  return search(root, needle);
}