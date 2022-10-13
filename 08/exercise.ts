import { Stack } from "./Stack";
class Linter {
  stack: Stack;
  constructor() {
    this.stack = new Stack();
  }
  isOpeningBraces(brace: string): boolean {
    return ["{", "(", "["].includes(brace);
  }
  isClosingBraces(brace: string): boolean {
    return ["}", ")", "]"].includes(brace);
  }
  isNotAMatch(openingBrace: string, closingBrace: string): boolean {
    return closingBrace !== { "{": "}", "[": "]", "(": ")" }[openingBrace];
  }
  lint(word: string) {
    for (const char of word) {
      if (this.isOpeningBraces(char)) this.stack.push(char);
      else if (this.isClosingBraces(char)) {
        const poppedBrace = this.stack.pop();
        if (!poppedBrace) return `${char} has no opening braces`;
        if (this.isNotAMatch(poppedBrace, char))
          return `${char} has mismatched opening braces`;
      }
    }
    if (this.stack.read()) return `${this.stack.read()} has no closing braces`;
    return true;
  }
}

const linter = new Linter();
console.log(linter.lint("x = {name : food, y : x[a(0)]}"));

const reverse = (word: string): string => {
  const stack = new Stack();
  for (const char of word) {
    stack.push(char);
  }
  let reversed: string = "";
  while (stack.read()) {
    reversed += stack.pop();
  }
  return reversed;
};
console.log(reverse("string"));
