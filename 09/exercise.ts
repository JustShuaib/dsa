/*
* Use recursion to write a function that accepts an array of strings and
returns the total number of characters across all the strings. For example,
if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there
are 10 characters in total.
* */
const totalCharacters = (strings: string[]): number => {
  if (strings.length === 0) return 0;
  return strings[0].length + totalCharacters(strings.slice(1));
};
console.log(totalCharacters(['ab', 'c', 'def', 'ghij']));

/*
Use recursion to write a function that accepts an array of numbers and
@returns a new array containing just the even numbers.
 */
const even = (arr: number[]): number[] => {
  const isEven = (num: number): boolean => num % 2 === 0;
  if (arr.length === 0) return []
  const evenBefore = even(arr.slice((1)));
  if (isEven(arr[0])) evenBefore.unshift(arr[0]);
  return evenBefore;
}
console.log(even([8, 1, 24, 3, 78]))
/*
There is a numerical sequence known as “Triangular Numbers.” The
pattern begins as 1, 3, 6, 10, 15, 21, and continues onward with the Nth
number in the pattern, which is N plus the previous number. For example,
the 7th number in the sequence is 28, since it’s 7 (which is N) plus 21
(the previous number in the sequence). Write a function that accepts a
number for N and returns the correct number from the series. That is, if
the function was passed the number 7, the function would return 28.
 */
const triangleNumber = (n: number): number => {
  if (n === 1) return n;
  return n + triangleNumber(n - 1);
}
console.log(triangleNumber(6));
/**
 *  Use recursion to write a function that accepts a string and returns the
 * first index that contains a given character For example, the string,
 * "axe" has an “x” at index 1.
 * */
const findString = (str: string, findStr: string, index: number = 0): number => {
  if (str.length === 0) return -1;
  if (str[0] === findStr) return index;
  return findString(str.slice(1), findStr, index + 1);
}
console.log(findString(('axe'), 'x'));

const rowAndCol = (row: number, col: number): number[][] => {
  if (row === 0 || col === 0) return [[row, col]];
  const rc = rowAndCol(row - 1, col - 1);
  rc.push([row, col]);
  return rc;
};
console.log(rowAndCol(3, 7))
const rowAndColTwo = (rows: number, cols: number): number[][] => {
  const rc = rowAndColTwo(rows - 1, cols - 1);
  for (let i = 0; i < rows; i++) {
    // if (cols === 0) return [[rows, cols]];
    rc.push([i, cols]);
  }
  return rc;
}