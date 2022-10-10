const selectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j] < array[lowestIndex]) lowestIndex = j;
    if (lowestIndex !== i)
      [array[i], array[lowestIndex]] = [array[lowestIndex], array[i]];
  }
  return array;
};
const testArray = [3, 1, 5, 2, 9];
export const teArr = [
  3, 1, 5, 2, 9, 43, 74, 565, 242, 654, 657, 2334, 65477, 76565, 3534, 34342,
  4553, 654654, 5465467, 8768867, 565, 56, 3, 6, 2, 45, 3, 1, 5, 2, 9,
];
console.log(selectionSort(teArr));
