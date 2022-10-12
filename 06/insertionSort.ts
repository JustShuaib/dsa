const insertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    let pos = i - 1;
    while (pos >= 0) {
      if (array[pos] > tempValue) {
        array[pos + 1] = array[pos];
        pos--;
      } else break;
    }
    array[pos + 1] = tempValue;
  }
  return array;
};
