export class MergeSort {
  constructor(private readonly array: number[]) {
  }

  private merge(array: number[] = this.array, left: number, mid: number, right: number) {
    const leftArrSize = mid - left + 1,
        rightArrSize = right - mid;
    const leftArray: number[] = new Array(leftArrSize),
        rightArray: number[] = new Array(rightArrSize);
    for (let i = 0; i < leftArrSize; i++) leftArray[i] = array[left + i];
    for (let j = 0; j < rightArrSize; j++) rightArray[j] = array[mid + 1 + j];

    let leftArrayPointer = 0,
        rightArrayPointer = 0,
        mergedArrayPointer = left;
    while (leftArrayPointer < leftArrSize && rightArrayPointer < rightArrSize) {
      if (leftArray[leftArrayPointer] <= rightArray[rightArrayPointer]) {
        array[mergedArrayPointer] = leftArray[leftArrayPointer];
        leftArrayPointer++
      } else {
        array[mergedArrayPointer] = rightArray[rightArrayPointer];
        rightArrayPointer++;
      }
      mergedArrayPointer++;
    }

    while (leftArrayPointer < leftArrSize) {
      array[mergedArrayPointer] = leftArray[leftArrayPointer];
      leftArrayPointer++;
      mergedArrayPointer++;
    }

    while (rightArrayPointer < rightArrSize) {
      array[mergedArrayPointer] = rightArray[rightArrayPointer];
      rightArrayPointer++;
      mergedArrayPointer++;
    }
  }

  sort(array: number[] = this.array, leftIndex: number = 0, rightIndex: number = this.array.length - 1) {
    if (leftIndex >= rightIndex) return;
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    this.sort(array, leftIndex, midIndex);
    this.sort(array, midIndex + 1, rightIndex);
    this.merge(array, leftIndex, midIndex, rightIndex);
  }
}