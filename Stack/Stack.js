class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
  }
}
function push(element) {
  this.dataStore[this.top++] = element;
}
function pop() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top - 1];
}
function length() {
  return this.top;
}
function clear() {
  this.top = 0;
}

/* A stack can be used to convert a number from one base to another base. Given a number,
n, which we want to convert to a base, b, here is the algorithm for performing the
conversion:
1. The rightmost digit of n is n % b. Push this digit onto the stack.
2. Replace n with n / b.
3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
4. Build the converted number string by popping the stack until the stack is empty
 */
function newBaseConverter(num, base) {
  const stack = new Stack();
  while (num > 0) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }
  let convertedNum = "";
  while (stack.length() > 0) {
    convertedNum += stack.pop();
  }
  return convertedNum;
}
const myBase = newBaseConverter(7, 3);
// console.log(myBase)

function baseConverter(number, base) {
  const stack = new Stack();
  do {
    stack.push(number % base);
    number = Math.floor((number /= base));
  } while (number > 0);
  let convertedNumber = "";
  while (stack.length() > 0) {
    convertedNumber += stack.pop();
  }
  return convertedNumber;
}

const newBase = baseConverter(7, 3);
// console.log(newBase)

/* Palindrome */
const palindromeChecker = (word) => {
  const stack = new Stack();
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  let reverseWord = "";
  while (stack.length() > 0) {
    reverseWord += stack.pop();
  }
  return word === reverseWord;
};
// const a = palindromeChecker("Testing");
const a = palindromeChecker("racecar");
// const a = palindromeChecker("rear");
// const a = palindromeChecker("1001");
// console.log(a);

/* Recursive factorial */
const factorial = (number) => {
  if (number === 0) return 1;
  return number * factorial(number - 1);
};
const fiveFact = factorial(5);
console.log(fiveFact);

/* Stack factorial */
const stackFactorial = (number) => {
  const stack = new Stack();
  /*  for (let i = 1; i <= number; i++) {
    stack.push(i);
  } */
  while (number > 1) stack.push(number--);
  let result = 1;
  while (stack.length() > 0) {
    result *= stack.pop();
  }
  return result;
};
const fiveFactTwo = stackFactorial(5);
console.log(fiveFactTwo);
