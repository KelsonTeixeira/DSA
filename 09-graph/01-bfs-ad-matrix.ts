import WeigthedAdjacencyMatrix from "../types/WeigthedAdjacencyMatrix";

export default function bfsAdMatrix(graph: WeigthedAdjacencyMatrix, source: number, needle: number): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;

  const queue: number[] = [source];

  do {
    const curr = queue.shift() as number;
    if(curr === needle) break;
    seen[curr] = true;
    const adjs = graph[curr];
    for (let i = 0; i < graph.length; ++i) {
      if(adjs[i] === 0) continue;
      if(seen[i]) continue;
      seen[i] = true;
      prev[i] = curr;
      queue.push(i);
    }
  } while (queue.length);

  // build it  backwards
  let curr = needle;
  const out: number[] = [];
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }
  if(out.length) {
    return [source, ...out.reverse()];
  }
  return null;
}