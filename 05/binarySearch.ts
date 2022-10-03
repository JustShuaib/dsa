/**
 * We start with a sorted array and a search term. We then find the middle of the array and compare the
 * search term to the middle term. If the search term is equal to the middle term, we return the index
 * of the middle term. If the search term is greater than the middle term, we search the right half of
 * the array. If the search term is less than the middle term, we search the left half of the array
 * @param {number[]} arr - The array to search through.
 * @param {number} searchTerm - The value you're looking for in the array.
 * @returns The index of the search term in the array.
 */
const binarySearch = (arr: number[], searchTerm: number): number => {
  let lowerBound = 0;
  let upperBound = arr.length - 1;
  while (lowerBound <= upperBound) {
    const middleBound = Math.round((lowerBound + upperBound) / 2);
    const middleTerm = arr[middleBound];
    if (searchTerm === middleTerm) return middleBound;
    else if (searchTerm > middleTerm) lowerBound = middleBound + 1;
    else if (searchTerm < middleTerm) upperBound = middleBound - 1;
  }
  return -1;
};
const numArr: number[] = [];
let num = 0;
while (num < 100_000) {
  numArr.push(num);
  num++;
}

console.log(binarySearch(numArr, 890878768));
