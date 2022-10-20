import { HashTable } from "../07/HashTable";

/**
 * The following function accepts an array of numbers and returns the sum,
 * as long as a particular number doesn't bring the sum above 100. If adding
 * a particular number will make the sum higher than 100, that number is
 * ignored. However, this function makes unnecessary recursive calls. Fix
 * the code to eliminate the unnecessary recursion:
 * */
const addUntil100 = (array: number[]): number => {
  if (array.length === 0) return 0;
  const previousSum = addUntil100(array.slice(1));
  if (array[0] + previousSum > 100) return previousSum
  else return array[0] + previousSum
}
console.log(addUntil100([2, 76, 32, 564, 43, 54]))

/**
 * The following function uses recursion to calculate the Nth number from
 * a mathematical sequence known as the “Golomb sequence.” It’s terribly
 * inefficient, though! Use memoization to optimize it. (You don’t have to
 * actually understand how the Golomb sequence works to do this exercise.)
 */

const golomb = (n: number): number => {
  if (n === 1) return 1;
  return 1 + golomb(n - golomb(golomb(n - 1)));
};
console.log(golomb(4));

const memoizedGolomb = (n: number, memo: HashTable = new HashTable()): number => {
  if (n === 1) return 1;
  if (!memo.get(n)) memo.set(n, memoizedGolomb(n - memoizedGolomb(memoizedGolomb(n - 1, memo), memo), memo));
  return 1 + memo.get(n)
};
console.log(memoizedGolomb(4));

const uniquePaths = (rows: number, columns: number): number => {
  if (rows === 1 || columns === 1) return 1;
  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
}
console.log(uniquePaths(4, 4))

const memoizedPaths = (rows: number, columns: number, memo: HashTable = new HashTable()): number => {
  if (rows === 1 || columns === 1) return 1;
  if (!memo.get(`${ rows } ${ columns }`)) memo.set(`${ rows } ${ columns }`, memoizedPaths(rows - 1, columns, memo) + memoizedPaths(rows, columns - 1, memo));
  return memo.get(`${ rows } ${ columns }`);
}
console.log(memoizedPaths(4, 4))