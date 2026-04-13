
export default function LinearSearch(hayStack: number[], needle: number): boolean {
  for (let i = 0; i < hayStack.length; i ++) {
    if(hayStack[i] === needle) return true;
  }
  return false;
}