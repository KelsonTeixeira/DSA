import BinaryNode from "../types/BinaryNode";

export default function BTC(node1: BinaryNode<number> | null, node2: BinaryNode<number> | null): boolean {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  if(node1.value !== node2.value) return false;
  return BTC(node1.left, node2.left) && BTC(node1.right, node2.right);
}