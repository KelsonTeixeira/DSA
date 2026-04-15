
export default function SumOfN(n: number): number {
  if(n === 1) return n;

  return n + SumOfN(n-1);
}