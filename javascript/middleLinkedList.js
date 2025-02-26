// given the head of a singly linked list, return the middle node of the list
// if there are two middles nodes, reutrn the second middle node.

//input: [1,2,3,4,5]
//output: [3,4,5]


const middleOfLinkedList = (head) => {
  if(head === null) return null;
  let slow = head
  let fast = head
  while(fast !== null && fast.next !== null){
    //slow will always be half of what fast is, since it will be jumping twice at a time. 
    slow = slow.next;
    fast = fast.next.next;
  }
  //we return the midpoint, which is going to be the slow node. 
  return slow;
}


const arrayToLinkedList = (arr) => {
  if (arr.length === 0) return null;
  return {
    val: arr[0],
    next: arrayToLinkedList(arr.slice(1))
  };
};

const arr = [1,2,3,4,5]

const head = arrayToLinkedList(arr)
console.log(middleOfLinkedList(head))