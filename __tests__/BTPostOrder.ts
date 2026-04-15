import postOrderSearch from "../07-trees/03-traversal-post-order";
import { tree } from "./tree";

test("post order", function () {
    expect(postOrderSearch(tree)).toEqual([
        7,
        5,
        15,
        10,
        29,
        45,
        30,
        100,
        50,
        20,
    ]);
});



