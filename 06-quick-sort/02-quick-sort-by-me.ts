function qs(arr: number[], lo: number, hi: number): void {
  if(lo >= hi) return;

  const pivot = partition(arr, lo, hi);

  //left
  qs(arr, lo, pivot -1);

  //rigth
  qs(arr, pivot +1, hi);
}

function partition(arr:number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo;

  for(let i = lo; i < hi; i++) {
    if(arr[i] <= pivot) {
      const tmp = arr[i];
      arr[i] = arr[lo];
      arr[idx] = tmp;
      idx++;
    }
  }
 
  arr[hi] = arr[idx]; 
  arr[idx] = pivot;
  return idx;
}

export default function QuickSortByMe(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}