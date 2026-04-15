import QuickSort from "../06-quick-sort/01-quick-sort";
import QuickSortByMe from "../06-quick-sort/02-quick-sort-by-me";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    QuickSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("quick-sort-by-me", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    QuickSortByMe(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
