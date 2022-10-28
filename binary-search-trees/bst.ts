import { TreeNode, treeNode } from "./binary-search-trees";

class BST {
  private root: treeNode;

  constructor() {
    this.root = null;
  }

  insert(value: number, node: treeNode = this.root) {
    if (node === null) {
      this.root = new TreeNode(value);
      return;
    }
    if (value < node.value) {
      if (node.leftChild === null) node.leftChild = new TreeNode(value);
      else this.insert(value, node.leftChild);
    } else if (value > node.value) {
      if (node.rightChild === null) node.rightChild = new TreeNode(value);
      else this.insert(value, node.rightChild);
    }
  }

  delete(value: number, node: treeNode = this.root): treeNode {
    if (node === null) return null;
    if (value < node.value) {
      node.leftChild = this.delete(value, node.leftChild);
      return node
    } else if (value > node.value) {
      node.rightChild = this.delete(value, node.rightChild);
      return node;
    } else {
      if (node.leftChild === null) return node.rightChild;
      else if (node.rightChild === null) return node.leftChild;
      else {
        let successorNode = node.rightChild;
        while (successorNode.leftChild) {
          successorNode = successorNode.leftChild;
        }
        node.value = successorNode.value;
        node.rightChild = this.delete(successorNode.value, node.rightChild);
        return node;
      }
    }
  }

  search(value: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return true;
      else if (value > currentNode.value) currentNode = currentNode.rightChild;
      else currentNode = currentNode.leftChild;
    }
    return false;
  }

  traverse(node: treeNode = this.root) {
    if (node === null) return;
    this.traverse(node.leftChild);
    console.log(node.value)
    this.traverse(node.rightChild);
  }
}

const binarySearchTree = new BST();
binarySearchTree.insert(50);
binarySearchTree.insert(57);
binarySearchTree.insert(32);
binarySearchTree.insert(82);
binarySearchTree.delete(50);
console.log(binarySearchTree.search(16));
binarySearchTree.traverse();
