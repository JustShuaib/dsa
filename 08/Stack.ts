export class Stack {
  list: any[];
  constructor() {
    this.list = [];
  }
  push(element: any) {
    this.list.push(element);
  }
  pop() {
    const res = this.list.pop();
    return res;
  }
  read() {
    return this.list[this.list.length - 1];
  }
}
