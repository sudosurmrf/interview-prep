// Question: Remove Nth Node From End of List (LeetCode #19)

// Given the head of a linked list, remove the n-th node from the end of the list \
// and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]
const removeNthNode = (head, nthNode) => {

  let currentNode = head;
  const nodeArr = [currentNode]

  while(currentNode.next !== undefined) {
    nodeArr.push(currentNode.next);
    currentNode = currentNode.next;
  }
let indexToRemove = nodeArr.length - nthNode;

 // edge case: removing the head
  if (indexToRemove === 0) {
    return head.next;
  }
const prev = nodeArr[indexToRemove -1];
prev.next = prev.next.next;
return head
}


const onePassRemoveNthNode = (head, n) => {
  const newNode = new Node(0, head);
  let fast = newNode;
  let slow = newNode;

  for(let i =0; i<=n; i++){
    fast = fast.next;
  }

  while(fast){
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return newNode.next; //we need to return the next on the newNode since the newNode is blank
  //since removing the head is not super easy, it's beter to just create a blank node and return the next.
}