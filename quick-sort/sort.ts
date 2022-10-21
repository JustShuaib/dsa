export class Sort {
  constructor(private readonly array: number[]) {
  }

  private partition(leftPointer: number, rightPointer: number): number {
    const pivotIndex = rightPointer;
    const pivot = this.array[pivotIndex];
    rightPointer--;
    while (true) {
      while (this.array[leftPointer] < pivot) leftPointer++;
      while (this.array[rightPointer] > pivot) rightPointer--;
      if (leftPointer >= rightPointer) break;
      else {
        [this.array[leftPointer], this.array[rightPointer]] = [this.array[rightPointer], this.array[leftPointer]];
        leftPointer++;
      }
    }
    [this.array[leftPointer], this.array[pivotIndex]] = [this.array[pivotIndex], this.array[leftPointer]];
    return leftPointer;
  }

  quickSort(leftIndex: number = 0, rightIndex: number = this.array.length - 1) {
    if (rightIndex - leftIndex <= 0) return;
    const pivotIndex = this.partition(leftIndex, rightIndex);
    this.quickSort(leftIndex, pivotIndex - 1);
    this.quickSort(pivotIndex + 1, rightIndex);
  }

  quickSelect(kthLowestTerm: number, leftIndex: number = 0, rightIndex: number = this.array.length - 1): number {
    if (rightIndex - leftIndex <= 0) return this.array[leftIndex];
    const pivotIndex = this.partition(leftIndex, rightIndex);
    if (kthLowestTerm < pivotIndex) return this.quickSelect(kthLowestTerm, leftIndex, pivotIndex - 1);
    else if (kthLowestTerm > pivotIndex) return this.quickSelect(kthLowestTerm, pivotIndex + 1, rightIndex);
    return this.array[pivotIndex];
  }
}
