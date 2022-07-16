class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.push(element);
  }
  dequeue() {
    this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    return this.dataStore.toString();
  }
  empty() {
    if (this.dataStore.length === 0) return true;
    return false;
  }
}
