type lNode = LNode | null;

class LNode {
  data: any;
  next: lNode;

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
    let currentNode: lNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
      if (currentNode === null) return null;
    }
    return currentNode.data;
  }

  indexOf(value: any): number {
    let currentNode: lNode = this.firstNode;
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
    let currentNode: lNode = this.firstNode, currentIndex = 0;
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
    let currentNode: lNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next!;
      currentIndex++;
    }
    currentNode.next = currentNode.next?.next!;
  }

  toString() {
    let currentNode: lNode = this.firstNode;
    while (currentNode) {
      console.log({ currentNode });
      currentNode = currentNode.next;
    }
  }

  // Add a method to the classic LinkedList class that returns the last element
  // from the list. Assume you don’t know how many elements are in the list.
  lastElement() {
    let currentNode: lNode = this.firstNode;
    while (currentNode.next) currentNode = currentNode.next;
    console.log(currentNode.data)
  }

  /** REVERSE A LINKED LIST
   *  Here’s a tricky one. Add a method to the classic LinkedList class that
   reverses the list. That is, if the original list is A -> B -> C, all the list’s
   links should change so that C -> B -> A.
   */
  reverse() {
    let previousNode: lNode = null,
        currentNode: lNode = this.firstNode;
    while (currentNode) {
      let nextNode: lNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.firstNode = previousNode!;
  }
  /** Let’s say you have access to a node from somewhere in the middle of a classic linked list, but not
   the linked list itself. That is, you have a variable that points to an instance
   of Node, but you don’t have access to the LinkedList instance. In this situation,
   if you follow this node’s link, you can find all the items from this middle
   node until the end, but you have no way to find the nodes that precede
   this node in the list.
   Write code that will effectively delete this node from the list. The entire
   remaining list should remain complete, with only this node removed */
  removeNode(node: LNode) {
    let nextNode: LNode = node.next!;
    node.data = nextNode.data;
    node.next = nextNode.next;
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
list.deleteIndex(2);
list.reverse();
list.toString();
list.lastElement()
list.removeNode(node2);
list.toString();
