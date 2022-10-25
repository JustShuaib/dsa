import { DoublyLinkedList } from "./doubly-linked-list";

class Queue {
  queue: DoublyLinkedList;

  constructor() {
    this.queue = new DoublyLinkedList();
  }

  enqueue(item: any) {
    this.queue.insertAtEnd(item);
  }

  dequeue() {
    this.queue.removeFromFront();
  }

  peek() {
    return this.queue.firstNode?.data;
  }

}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
console.log(queue.peek());