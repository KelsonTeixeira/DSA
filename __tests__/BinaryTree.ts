import BT from '../07-trees/07-binary-tree';
import IOT from '../07-trees/02-traversal-in-order';

test('create a binary tree', function () {
  const tree = new BT<number>();
  expect(tree.root).toBeNull();

  const values = [23, 87, 5, 61, 42, 90, 14, 3, 76, 55, 8, 99, 31, 67, 20];
  const valuesSorted = [3, 5, 8, 14, 20, 23, 31, 42, 55, 61, 67, 76, 87, 90, 99];

  values.forEach(value => tree.insert(value));
  expect(tree.root?.value).toBe(23);
  expect(tree.root?.left?.value).toBe(5);
  expect(tree.root?.right?.value).toBe(87);
  expect(valuesSorted.every((value, index) => value === IOT(tree.root!)[index])).toBeTruthy();
})