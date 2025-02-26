// Search in a Binary Search Tree

// Problem Statement:
// Given the root of a binary search tree (BST) and a target value, write a function that searches for the target value in the BST.

// If the target exists in the BST, return the node containing that value.
// If the target does not exist, return null.

const bst = (root, target) => {
  if(root === null)return null;
  if(root.val === target) return root;
  return target < root.val ? bst(root.left, target) : bst(root.right, target);
}

const tree = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
};

const result = (bst(tree, 2));
console.log(result)