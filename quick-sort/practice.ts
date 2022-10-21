import { Sort } from "./sort";

const hasDuplicates = (array: number[]): boolean => {
  new Sort(array).quickSort();
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) return true;
  }
  return false;
}
const unsorted = [5, 8, 3, 2, 6, 8, 0, 2, 45, 75, 23, 76, 12, 5];
const sorted = new Sort(unsorted);
sorted.quickSort();
console.log(unsorted)
const newArray = [8, 5, 7, 9, 3, 3];
const newSorted = new Sort(newArray)
newSorted.quickSort()
const firstFive = [3, 5, 2, 1, 4];
const selector = new Sort(firstFive);
console.log(selector.quickSelect(4))
console.log(new Sort([0, 50, 20, 10, 60, 30]).quickSelect(3));
console.log(new Sort(newArray).quickSelect(2));
console.log(hasDuplicates(firstFive));