import SumOfN from '../05-recursion/01-recursive-sum';

test('Sum of N', function () {
  expect(SumOfN(1)).toEqual(1);
  expect(SumOfN(5)).toEqual(15);
  expect(SumOfN(10)).toEqual(55);
  expect(SumOfN(100)).toEqual(5050);
});