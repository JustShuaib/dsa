class LNode {
  data: any;
  next: LNode | null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  firstNode: LNode;

  constructor(firstNode: LNode) {
    this.firstNode = firstNode;
  }


  read(index: number): any | null {
    let currentNode: LNode | null = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
      if (currentNode === null) return null;
    }
    return currentNode.data;
  }

  indexOf(value: any): number {
    let currentNode: LNode | null = this.firstNode;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.data === value) return currentIndex;
      currentIndex++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  insert(index: number, value: any): void {
    const newNode = new LNode(value);
    if (index === 0) {
      newNode.next = this.firstNode;
      this.firstNode = newNode;
      return;
    }
    let currentNode: LNode | null = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next!;
      currentIndex++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  deleteIndex(index: number): void {
    if (index === 0) {
      this.firstNode = this.firstNode.next!;
      return;
    }
    let currentNode: LNode | null = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next!;
      currentIndex++;
    }
    currentNode.next = currentNode.next?.next!;
  }

  toString() {
    let currentNode: LNode | null = this.firstNode;
    while (currentNode.next !== null) {
      console.log({ currentNode });
      currentNode = currentNode.next;
    }
  }
}

const node1 = new LNode('a');
const node2 = new LNode('b');
const node3 = new LNode('c');
const node4 = new LNode('d');
node1.next = node2;
node2.next = node3;
node3.next = node4;
const list = new LinkedList(node1);
list.insert(4, 'e');
list.toString();
list.deleteIndex(2);
list.toString();
