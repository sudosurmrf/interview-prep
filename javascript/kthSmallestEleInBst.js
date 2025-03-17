// Given the root of a Binary Search Tree (BST) and an integer k, return the kth smallest element in the BST.

const kthSmallest = (root, k) => {
  //making a helper function inline to traverse the tree in order. 
  //state is used here to track 2 things, the count (number of nodes visisted) and result which is the kth smallest value. 
  const inOrder = (node, state) => {
    //this is our base case, if we hit null or found the result then return the state. 
    if(!node || state.result !== null) return state;
    //first we traverse the left subtree carring the current state forward.
    state = inOrder(node.left, state);
    //after finishing left subtree, we increment the count
    const newCount = state.count + 1;
    //checks if newCount is equal to k, if it is then we set newResult to the val of the node, otherwise we set it to state.result
    const newResult = newCount === k ? node.val : state.result;
    //now we traverse the right subtree and update our state with new count and possibly new result if newCount === k. 
    return inOrder(node.right, {count: newCount, result:newResult });
  };
  //starts the traversal from the root, with count = 0, and result = null. 
  //after it completes traversal, we try and extract the result from state. (state.result);
  return inOrder(root, {count:0, result: null}).result;
}

//exmaple usage.

const root = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
};
console.log(kthSmallest(root, 3));