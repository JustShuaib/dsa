/**
 * We loop through the array, and if we find the search term, we return the index. If we don't find the
 * search term, we return -1
 * @param {number[]} arr - number[] - The array to search through
 * @param {number} searchTerm - The number you're searching for
 * @returns The index of the search term in the array.
 */
const linearSearch = (arr: number[], searchTerm: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) return i;
    else if (arr[i] > searchTerm) return -1;
  }
  return -1;
};
console.log(linearSearch([2, 34, 65, 87, 90], 87));
