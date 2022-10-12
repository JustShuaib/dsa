import { HashTable } from "./HashTable";
// Using Nested loop
const isSubset = (arr1: number[], arr2: number[]): boolean => {
  let largerArray: number[];
  let smallerArray: number[];
  if (arr1.length > arr2.length) [largerArray, smallerArray] = [arr1, arr2];
  else [largerArray, smallerArray] = [arr2, arr1];
  for (let i = 0; i < smallerArray.length; i++) {
    let foundMatch = false;
    for (let j = 0; j < largerArray.length; j++) {
      if (smallerArray[i] === largerArray[j]) {
        foundMatch = true;
        break;
      }
    }
    if (!foundMatch) return false;
  }
  return true;
};
// console.log(isSubset([2, 1, 5, 9], [6, 1, 2, 3, 4, 5]));
// Using hash table
const isSubset2 = (a: number[], b: number[]): boolean => {
  let largerArray: number[];
  let smallerArray: number[];
  const hashTable: any = {};
  if (a.length > b.length) [largerArray, smallerArray] = [a, b];
  else [largerArray, smallerArray] = [b, a];

  for (const value of largerArray) hashTable[value] = true;
  for (const value of smallerArray) if (!hashTable[value]) return false;
  return true;
};
console.log(isSubset2([2, 1, 5, 9], [6, 1, 2, 3, 4, 5]));
const isSubset3 = (a: number[], b: number[]): boolean => {
  let largerArray: number[];
  let smallerArray: number[];
  const hashTable = new HashTable();
  if (a.length > b.length) [largerArray, smallerArray] = [a, b];
  else [largerArray, smallerArray] = [b, a];

  for (const value of largerArray) hashTable.set(value, true);
  for (const value of smallerArray) if (!hashTable.get(value)) return false;
  return true;
};
console.log(isSubset3([2, 1, 5, 9], [6, 1, 2, 3, 4, 5]));

/**
 * Write a function that returns the intersection of two arrays.
 * The intersection is a third array that contains all values contained within the first two
 * arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
 * @requires 0(N)
 **/

const getIntersection = (a: number[], b: number[]): number[] => {
  const intersection: number[] = [];
  const hashMap = new HashTable();
  for (const value of a) hashMap.set(value, true);
  for (const item of b) if (hashMap.get(item)) intersection.push(item);
  return intersection;
};
console.log(getIntersection([4, 6, 8], [6, 1, 2, 3, 4, 5]));
/** 
 * Write a function that accepts 
 * @param n
 * @returns {the first duplicate value it finds}
 * For example, if the array is ["a", "b", "c", "d", "c", "e",
 "f"], the function should return "c", since it’s duplicated within the array.
 (You can assume that there’s one pair of duplicates within the array.)
 @requires O(N).
 */
const getDuplicate = (n: string[]): string | null => {
  const hashMap = new HashTable();
  for (const str of n) {
    if (hashMap.get(str)) return str;
    else hashMap.set(str, true);
  }
  return null;
};
console.log(getDuplicate(["a", "b", "c", "d", "a", "c", "f"]));
/**
 * Write a function that accepts a 
 * @param a that contains all the letters of the
alphabet except one and 
@returns exception
returns the missing letter. For example, the string,
"the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
except the letter, "f". The function should have a time complexity of 
@requires O(N).
 */
const except = (a: string): string => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const hashTable = new HashTable();
  let exception = "";
  for (const key of a) hashTable.set(key.toLowerCase(), true);
  for (const str of alphabets) if (!hashTable.get(str)) exception += str;

  return exception;
};
console.log(except("the quick brown box jumps over a lazy dog"));
/**
 * . Write a function that returns the first non-duplicated character in a string.
For example, the string, "minimum" has two characters that only exist
once—the "n" and the "u", so your function should return the "n", since it
occurs first. The function should have an efficiency of O(N).

 */
const notDouble = (a: string): string => {
  const hashMap = new HashTable();
  for (const key of a)
    if (hashMap.get(key)) hashMap.set(key, key + 1);
    else hashMap.set(key, 1);

  for (const char of a) if (hashMap.get(char) === 1) return char;
  return "Not Found";
};
console.log(notDouble("minimum"));
