import { teArr as array } from "./selectionSort";
const insertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    let position = i - 1;
    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position] = array[position + 1];
        position--;
      } else break;
    }
    array[position + 1] = tempValue;
  }
  return array;
};
function iiSort(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    let tempValueIndex = i;
    while (tempValueIndex >= 0) {
      if (array[tempValueIndex] > tempValue) {
        array[tempValueIndex + 1] = array[tempValueIndex];
      } else break;
      tempValueIndex--;
    }
    // [tempValue, array[tempValueIndex]] = [array[tempValueIndex], tempValue];
    array[tempValueIndex] = tempValue;
  }
  return array;
}
const meanOfEvenNumbers = (array: number[]): number => {
  let sum = 0;
  let countOfEvenNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
      countOfEvenNumbers++;
    }
  }
  return sum / countOfEvenNumbers;
};
console.log(meanOfEvenNumbers([90, 34, 65, 87]));
const wordBuilder = (a: string[]): string[] => {
  const wordArray: string[] = [];
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < a.length; j++) if (j !== i) wordArray.push(a[i] + a[j]);
  return wordArray;
};
console.log(wordBuilder(["a", "b", "c", "d"]));
const sampleFromArray = (a: string[]): [string, string, string] => {
  const start = a[0],
    last = a[a.length - 1],
    middle = a[a.length - 1 / 2];
  return [start, middle, last];
};
const getLabel = (array: string[]): string[] => {
  const labels: string[] = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= 5; j++) {
      labels.push(array[i] + j);
    }
  }
  return labels;
};
console.log(getLabel(["Purple", "Green"]));
const countOnes = (a: number[][]): number => {
  let numberOfOnes = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 1) numberOfOnes++;
    }
  }
  return numberOfOnes;
};
console.log(
  countOnes([
    [1, 0, 1],
    [1, 1, 0],
  ])
);
const getAllProducts = (a: number[]): number[] => {
  let products: number[] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      products.push(a[i] * a[j]);
    }
  }

  return products;
};
console.log(getAllProducts([1, 2, 3, 4, 5]));
