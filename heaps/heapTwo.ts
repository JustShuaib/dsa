class Heap {
  protected tree: number[];

  constructor() {
    this.tree = [];
  }

  private nodeValue(index: number) {
    return this.tree[index];
  }

  private static parentNodeIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private static leftChildIndex(index: number): number {
    return (index * 2) + 1;
  }

  private static rightChildIndex(index: number): number {
    return (index * 2) + 2;
  }

  private swap(a: number, b: number) {
    [this.tree[a], this.tree[b]] = [this.tree[b], this.tree[a]];
  }

  private leftChild(index: number) {
    return this.tree[Heap.leftChildIndex(index)]
  }

  private rightChild(index: number) {
    return this.tree[Heap.rightChildIndex(index)]
  }

  private parentNode(index: number) {
    return this.tree[Heap.parentNodeIndex(index)]
  }

  private hasChildren(index: number): boolean {
    return Boolean(this.leftChild(index) && this.rightChild(index))
  }

  private hasGreaterChild(index: number): boolean {
    if (!this.hasChildren(index)) return false;
    return (this.rightChild(index) > this.nodeValue(index)) ||
        (this.leftChild(index) > this.nodeValue(index));
  }

  private getGreaterChildIndex(index: number): number {
    if (this.leftChild(index) > this.nodeValue(index)) {
      if (this.leftChild(index) > this.rightChild(index)) return Heap.leftChildIndex(index);
      else return Heap.rightChildIndex(index);
    } else return Heap.rightChildIndex(index);
  }
  read() {
    return this.tree[0];
  }

  insert(value: number) {
    this.tree.length += 1
    this.tree[this.tree.length - 1] = value
    let newNodeIndex = this.tree.length - 1;
    while (newNodeIndex > 0 && this.nodeValue(newNodeIndex) > this.parentNode(newNodeIndex)) {
      const parentNodeIndex = Heap.parentNodeIndex(newNodeIndex);
      this.swap(newNodeIndex, parentNodeIndex);
      newNodeIndex = parentNodeIndex;
    }
  }

  delete() {
    this.tree[0] = this.tree[this.tree.length - 1];
    this.tree.length -= 1;
    let deletedNodeIndex: number = 0;
    while (this.hasGreaterChild(deletedNodeIndex)) {
      const greaterChildIndex = this.getGreaterChildIndex(deletedNodeIndex);
      this.swap(deletedNodeIndex, greaterChildIndex);
      deletedNodeIndex = greaterChildIndex;
    }
  }
}

const newHeap = new Heap();
newHeap.insert(83);
newHeap.insert(12);
newHeap.insert(75);
newHeap.insert(42);
newHeap.insert(82);
newHeap.insert(67);
console.log(newHeap.read())
newHeap.delete()
console.log(newHeap.read())
newHeap.delete()
console.log(newHeap.read())