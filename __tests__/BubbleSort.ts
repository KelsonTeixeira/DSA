import BubbleSort from "../03-sort/01-bubble-sort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    BubbleSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

