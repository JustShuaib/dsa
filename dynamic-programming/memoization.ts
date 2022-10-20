import {HashTable} from '../07/HashTable';

const max = (array: number[]): number => {
  if (array.length === 1) return array[0];
  const maxOfRemainder = max(array.slice((1)));
  if (array[0] > maxOfRemainder) return array[0];
  return maxOfRemainder;
}
console.log(max([2, 1, 4, 5, 8, 3]));

const nonMemoizedFibonacci = (target: number): number => {
  if (target === 0 || target === 1) return target;
  return nonMemoizedFibonacci(target - 1) + nonMemoizedFibonacci(target - 2);
};
console.log(nonMemoizedFibonacci((10)))

const memoizedFibonacci = (target: number, memo: HashTable = new HashTable()): number => {
  if (target === 0 || target === 1) return target;
  if (!memo.get(target)) {
    const fib = memoizedFibonacci(target - 1, memo) + memoizedFibonacci(target - 2, memo);
    memo.set(target, fib);
  }
  return memo.get(target);
}
console.log(memoizedFibonacci((10)))
