import Queue from "../03-sort/02-queue";

test("queue", function () {
    const list = new Queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    // this must be wrong..?
    debugger;

    // i hate using debuggers
    list.enqueue(11);
    console.log(list);
    debugger;
    expect(list.deque()).toEqual(7);
    console.log(list);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    console.log(list);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});
