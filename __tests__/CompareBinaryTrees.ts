import compare from "../07-trees/05-binary-tree-comparison";
import btc from "../07-trees/05-btc";
import { tree, tree2 } from "./tree";

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});

test("Compare Binary Trees", function () {
    expect(btc(tree, tree)).toEqual(true);
    expect(btc(tree, tree2)).toEqual(false);
});





