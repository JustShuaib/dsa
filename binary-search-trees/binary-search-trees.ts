export type treeNode = TreeNode | null;

export class TreeNode {
  value: number;
  leftChild: treeNode
  rightChild: treeNode

  constructor(value: number, left: treeNode = null, right: treeNode = null) {
    this.value = value;
    this.leftChild = left;
    this.rightChild = right;
  }

}

const search = (searchTerm: number, node: treeNode): boolean => {
  const nodeValue = node!?.value;
  if (node === null) return false;
  if (nodeValue === searchTerm) return true;
  else if (searchTerm > nodeValue) return search(searchTerm, node.rightChild);
  else if (searchTerm < nodeValue) return search(searchTerm, node.leftChild);
  return false;
}

const insert = (value: number, node: TreeNode) => {
  if (value < node.value) {
    if (node.leftChild === null) node.leftChild = new TreeNode(value);
    else insert(value, node.leftChild);
  } else if (value > node.value) {
    if (node.rightChild === null) node.rightChild = new TreeNode(value);
    else insert(value, node.rightChild);
  }
}

const deleteNode = (value: number, node: treeNode): treeNode => {
  if (node === null) return null;
  if (value === node.value) {
    if (node.rightChild === null) return node.leftChild;
    else if (node.leftChild === null) return node.rightChild;
    else {
      node.rightChild = lift(node.rightChild, node.leftChild);
      return node;
    }
  } else if (value < node.value) {
    node.leftChild = deleteNode(value, node.leftChild);
    return node;
  }
  node.rightChild = deleteNode(value, node.rightChild);
  return node;
}
const lift = (node: TreeNode, nodeToBeDeleted: TreeNode): treeNode => {
  if (node.leftChild) {
    node.leftChild = lift(node.leftChild, nodeToBeDeleted);
    return node;
  } else {
    nodeToBeDeleted.value = node.value;
    return node.rightChild;
  }
}
const traverse = (node: treeNode) => {
  // console.log(node!.value); Preorder traversal
  if (node === null) return;
  traverse(node.leftChild)
  console.log(node.value); //Inorder traversal
  traverse(node.rightChild);
  // console.log(node!.value); Postorder traversal
}
/**
 *  Write an algorithm that finds the greatest value within a binary search tree.
 * */
const greatestNumber = (node: treeNode): number => {
  if (node!.rightChild === null) return node!.value;
  return greatestNumber(node!.rightChild);
}
const node1 = new TreeNode(27);
const node2 = new TreeNode(78);
const root = new TreeNode(50, node1, node2);
console.log(search(78, root));
insert(33, root);
insert(96, root);
deleteNode(27, root);
traverse(root);
const highest = greatestNumber(root);
console.log('Highest: ' + highest);
