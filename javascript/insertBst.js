// Problem Statement:
// Given the root of a binary search tree (BST) and a value to insert, write a function to insert that value into the BST. 
// The BST property must be maintained. After the insertion, return the root of the updated BST.
const insertIntoBst = (root, val) => {
  //check to see if the current root is null. if it is, we need to return an object with the val, left:null, right:null which means we are at the node we wanted to insert. 
  if (root === null) {
    return { val, left: null, right: null };
  }
  //if we made it this far, it means the root is not the insert node. We then need to check if val < node.val. if it is, we set node.left = insertBst(root.left, val)
  //if its greater, we set node.right = insertBst(root.right, val)
  if (val < root.val) {
    root.left = insertIntoBst(root.left, val);
  } else {
    root.right = insertIntoBst(root.right, val);
  }
  //lastly, since the question asks us to return the entire tree after insertion, from the original root, we need to return the root. 
  return root;
}


//stuff under here is just for testing. 
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

// Insert val into the BST (only do one at a time or it will look strange)
// console.log(insertIntoBst(tree, 5));
console.log(insertIntoBst(tree, 9));
