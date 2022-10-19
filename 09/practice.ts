const countDown = (num: number): void => {
  for (let i = num; i >= 0; i--) console.log(i);
};
countDown(10);
const count2 = (num: number): void => {
  if (num < 0) return;
  console.log(num);
  count2(num - 1);
};
count2(10);
const factorial = (num: number): number => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(20))
const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];
const printNum = (arr: any): void => {
  for (const item of arr) {
    if (Array.isArray(item)) printNum(item);
    else console.log(item);
  }
};
printNum(array);

const doubleArray = (arr: number[], index = 0): void => {
  if (index >= arr.length) return;
  arr[index] *= 2;
  doubleArray(arr, index + 1);
};
const a = [3, 1, 5, 2, 9];
doubleArray(a);
const facto = (a: number): number => {
  let product: number = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};
console.log(facto(5));

const facto2 = (a: number): number => {
  let product: number = 1;
  for (let i = 1; i <= a; i++) {
    product *= i;
  }
  return product;
};
console.log(facto2(5));

const factor2 = (number: number, index = 1, product = 1): number => {
  if (index > number) return product;
  return factor2(number, index + 1, product * index);
};
console.log(factor2(5));

const factor = (a: number): number => {
  if (a === 1) return 1;
  return a * factor(a - 1);
};
console.log(factor(5));

const sumOfArray = (arr: number[]): number => {
  if (arr.length === 1) return arr[0];
  return arr[0] + sumOfArray(arr.slice(1, arr.length));
};
console.log(sumOfArray([2, 1, 3, 4, 7, 3]));

const reverse = (str: string): string => {
  if (str.length === 1) return str[0];
  return reverse(str.slice(1)) + str[0];
};
console.log(reverse("raceing"));

const countx = (str: string): number => {
  if (str.length === 0) return 0;
  if (str[0] === "x") return 1 + countx(str.slice(1));
  else return countx(str.slice(1));
};
console.log(countx("axcxbxedsxxxs"));

const jumps = (paths: number): number => {
  if (paths < 0) return 0;
  if (paths === 0 || paths === 1) return 1;
  return jumps(paths - 1) + jumps(paths - 2) + jumps(paths - 3);
};
console.log(jumps(3));
const anagramsOf = (string: string): string[] => {
  if (string.length === 1) return [string[0]];
  const collection: string[] = [];
  anagramsOf(string.slice(0, string.length - 1)).forEach((word) => {
    for (let i = word.length; i >= 0; i--) {
      // @ts-ignore
      const copy = [...word];
      copy.splice(i, 0, string[string.length - 1]);
      collection.push(copy.join(""));
    }
  });
  return collection;
};
console.log(anagramsOf("abcd"));