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
  console.log(stack.dataStore);
  // const convertedNum = "";
  // while (stack.length() > 0) {
  //   convertedNum += stack.pop();
  // }
  // return convertedNum;
}
console.log(newBaseConverter(80, 5));
function baseConverter(number, base) {
  const stack = new Stack();
  do {
    stack.push(number % base);
    // console.log(number);
    number = Math.floor((number /= base));
  } while (number > 0);
  let convertedNumber = "";
  while (stack.length() > 0) {
    convertedNumber += stack.pop();
  }
  return convertedNumber;
}

const baseEight = baseConverter(80, 5);
console.log(baseEight);
