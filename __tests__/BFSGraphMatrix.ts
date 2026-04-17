import bfs from "../09-graph/01-bfs-ad-matrix";
import { matrix2 } from "./graph";

test("bfs - graph matrix", function () {
    expect(bfs(matrix2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(bfs(matrix2, 6, 0)).toEqual(null);
});



