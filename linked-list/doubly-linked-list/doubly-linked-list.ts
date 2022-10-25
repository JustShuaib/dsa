class DNode {
  data: any;
  previousNode: DNode | null;
  nextNode: DNode | null;

  constructor(data: any) {
    this.data = data;
    this.previousNode = null;
    this.nextNode = null;
  }
}

export class DoublyLinkedList {
  firstNode: DNode | null;
  lastNode: DNode | null;

  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(value: any) {
    let newNode = new DNode(value);
    if (!this.firstNode) this.firstNode = this.lastNode = newNode;
    else {
      newNode.previousNode = this.lastNode;
      this.lastNode!.nextNode = newNode;
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    const nodeToBeRemoved = this.firstNode!;
    this.firstNode = nodeToBeRemoved.nextNode;
  }

  toString() {
    //Prints all elements in reverse order
    let currentNode = this.lastNode;
    while (currentNode) {
      const data = currentNode.data;
      console.log({ data });
      currentNode = currentNode.previousNode;
    }
  }
}