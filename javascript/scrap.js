class Node {
  constructor(val=0, next=null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  insert(position, newVal) {
  let currentNode = this.head;
  while (position !== currentNode.val && currentNode !== undefined) {
    currentNode = currentNode.next;
  }

  const tempNode = currentNode.next;
  const newNode = new Node(newVal, tempNode);
  currentNode.next = newNode;

  return newNode;
}

remove(positionToRemove){
  let currentNode = this.head;
  while(currentNode.val !== positionToRemove && currentNode.next.val !==positionToRemove) {
    currentNode = currentNode.next;
  }
  currentNode.next = currentNode.next.next;

  return currentNode
}
}



