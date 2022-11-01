class Heap {
  tree: number[];

  constructor() {
    this.tree = [];
  }

  get rootNode() {
    return this.tree[0];
  }

  private leftChildIndex = (index: number) => (index * 2) + 1;
  private rightChildIndex = (index: number) => (index * 2) + 2;
  private parentNodeIndex = (index: number) => Math.floor((index - 1) / 2);

  insert(value: number) {
    this.tree.push(value);
    let newNodeIndex = this.tree.length - 1;
    while (newNodeIndex > 0 && this.tree[newNodeIndex] > this.tree[this.parentNodeIndex(newNodeIndex)]) {
      [this.tree[newNodeIndex], this.tree[this.parentNodeIndex(newNodeIndex)]] =
          [this.tree[this.parentNodeIndex(newNodeIndex)], this.tree[newNodeIndex]];
      newNodeIndex = this.parentNodeIndex(newNodeIndex);
    }
  }

  delete() {
    this.tree[0] = this.tree.pop()!;
    let trickleDownIndex: number = 0;
    while (this.hasGreaterChild(trickleDownIndex)) {
      let largerChildIndex: number = this.largerChildIndex(trickleDownIndex);
      [this.tree[trickleDownIndex], this.tree[largerChildIndex]] =
          [this.tree[largerChildIndex], this.tree[trickleDownIndex]];
      trickleDownIndex = largerChildIndex;
    }
  }

  private hasGreaterChild(index: number): boolean {
    return ((this.tree[this.rightChildIndex(index)] > this.tree[index])
        || ((this.tree[this.leftChildIndex(index)] > this.tree[index])))
  }

  private largerChildIndex(index: number): number {
    if (!this.tree[this.rightChildIndex(index)]) return this.leftChildIndex(index);
    if (this.tree[this.rightChildIndex(index)] > this.tree[this.leftChildIndex(index)])
      return this.rightChildIndex(index);
    else return this.leftChildIndex(index);
  }
}

const heap = new Heap();
heap.insert(54)
heap.insert(32)
heap.insert(76)
heap.insert(12)
console.log(heap.rootNode)
heap.delete()
console.log(heap.tree)
