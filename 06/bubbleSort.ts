const bubbleSort = (array: number[]): number[] => {
  let indexUntilSort = array.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= indexUntilSort; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
    indexUntilSort--;
  }
  return array;
};
const unsortedArray = [3, 1, 5, 2, 9];
console.log(bubbleSort(unsortedArray));
console.log(
  bubbleSort([
    3, 1, 5, 2, 9, 43, 74, 565, 242, 654, 657, 2334, 65477, 76565, 3534, 34342,
    4553, 654654, 5465467, 8768867, 565, 56, 3, 6, 2, 45, 3, 1, 5, 2, 9,
  ])
);

/**
 * This function checks if the array contains a duplicate, but has
 * time complexity of O(N²)
 * Write a function that accepts
 *  @param array
 *  @returns true if it contains a duplicate, otherwise returns false
 **/

const hasDuplicates = (array: number[]): boolean => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) return true;
    }
  }
  return false;
};
const duplicateArray = [2, 6, 12, 4, 8, 9];
console.log(hasDuplicates(duplicateArray));

/**
 * This function checks if the array contains a duplicate, but has
 * time complexity of O(N)
 * @param array of numbers
 * @returns true if duplicate found, false otherwise
 */
const linearHasDuplicates = (array: number[]): boolean => {
  const duplicates: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (duplicates[array[i]] === array[i]) return true;
    else duplicates[array[i]] = array[i];
  }
  return false;
};

console.log(linearHasDuplicates(duplicateArray));

const greatestValue = (array: number[]): number => {
  let highestValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > highestValue) highestValue = array[i];
  }
  return highestValue;
};
console.log(greatestValue([90, 34, 65, 87, 90]));
