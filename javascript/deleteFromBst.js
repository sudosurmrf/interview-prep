const deleteFromBst = (root, key) => {
  if (root === null) return null;
  
  // Traverse the tree to find the node to delete.
  if (key < root.val) {
    root.left = deleteFromBst(root.left, key);
  } else if (key > root.val) {
    root.right = deleteFromBst(root.right, key);
  } else {
    // Found the node to delete.
    // Case 1: Node has no left child.
    if (root.left === null) {
      return root.right;
    }
    // Case 2: Node has no right child.
    else if (root.right === null) {
      return root.left;
    }
    // Case 3: Node has two children.
    // Find the smallest node in the right subtree (in-order successor).(an in-order successor is the smallest node in the right subtree!!)
    let minNode = root.right;
    while (minNode.left !== null) {
      minNode = minNode.left;
    }
    // Replace root's value with the in-order successor's value.
    root.val = minNode.val;
    console.log(root.val)
    // Delete the in-order successor from the right subtree.
    //we need to call this at the end if both child are present so that it goes back and deletes the duplicate root
    root.right = deleteFromBst(root.right, minNode.val);
  }
  
  return root;
};

const tree = {
  val: 5,
  left: {
    val: 3,
    left: { val: 2, left: null, right: null },
    right: { val: 4, left: null, right: null }
  },
  right: {
    val: 6,
    left: null,
    right: { val: 7, left: null, right: null }
  }
};

console.log(deleteFromBst(tree, 3));
