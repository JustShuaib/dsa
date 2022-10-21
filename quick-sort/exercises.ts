import { Sort } from './sort';

/**
 * Given an array of positive numbers, write a function that returns the
 * greatest product of any three numbers. The approach of using three
 * nested loops would clock in at O(N³), which is very slow. Use sorting to
 * implement the function in a way that it computes at O(N log N) speed.
 * (There are even faster implementations, but we’re focusing on using
 * sorting as a technique to make code faster.)
 * */

const greatestProduct = (array: number[]): number => {
  new Sort(array).quickSort();
  if (array.length < 3) return 0;
  const highestValue = array[array.length - 1];
  const secondHighestValue = array[array.length - 2];
  const thirdHighestValue = array[array.length - 3];
  return highestValue * secondHighestValue * thirdHighestValue;
}
console.log(greatestProduct([2, 8, 4, 3, 5]))

const greatestProduct2 = (arr: number[]): number => {
  let greatest: number = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        const product = arr[i] * arr[j] * arr[k];
        if (product > greatest && i !== j && j !== k && k !== i) greatest = product;
      }
    }
  }
  return greatest;
}
console.log(greatestProduct2([2, 8, 4, 3, 5]))

/**
 * The following function finds the “missing number” from an array of integers.
 * That is, the array is expected to have all integers from 0 up to the
 * array’s length, but one is missing. As examples, the array, [5, 2, 4, 1, 0] is
 * missing the number 3, and the array, [9, 3, 2, 5, 6, 7, 1, 0, 4] is missing the
 * number 8.
 * Here’s an implementation that is O(N²) (the includes method alone is already
 * O(N), since the computer needs to search the entire array to find n)
 * function findMissingNumber(array) {
 * for(let i = 0; i < array.length; i++) if(!array.includes(i)) return i;
 * return null;
 * }
 * Use sorting to write a new implementation of this function that only takes
 * O(N log N). (There are even faster implementations, but we’re focusing on
 * using sorting as a technique to make code faster.)
 */
const testArray1: number[] = [3, 1, 5, 2, 4, 1, 0];
const testArray2: number[] = [6, 7, 1, 0, 4, 9, 3, 2, 5, 6, 7, 1, 0, 4];

const findMissingNumber = (array: number[]): number | null => {
  new Sort(array).quickSort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i) return i;
  }
  return null;
}
console.log(findMissingNumber(testArray1));
console.log(findMissingNumber(testArray2));

/**
 * Write three different implementations of a function that finds the greatest
 * number within an array. Write one function that is O(N²), one that is O(Nlog N), and one that is O(N).
 */
const greatest1 = (array: number[]): number => {
  let greatest: number = 0;
  for (let i = 0; i < array.length; i++) {
    greatest = array[i];
    for (let j = 0; j < array.length; j++) {
      if (array[j] > greatest) greatest = array[j];
    }
  }
  return greatest;
}
console.log('First implementation');
console.log(greatest1(testArray1));
console.log(greatest1(testArray2));

const greatest2 = (array: number[]): number => {
  new Sort(array).quickSort();
  return array[array.length - 1];
}
console.log('Second implementation');
console.log(greatest2(testArray1));
console.log(greatest2(testArray2));

const greatest3 = (array: number[]): number => {
  let greatest: number = 0
  for (let i = 0; i < array.length - 1; i++) {
    greatest = array[i];
    if (array[i + 1] > greatest) greatest = array[i + 1];
  }
  return greatest;
}
console.log('Third implementation');
console.log(greatest3(testArray1));
console.log(greatest3(testArray2));
