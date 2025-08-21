class Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  insert (insertLocation, insertNode) {
    const originalNextNode = insertLocation.next;
    insertNode.next = originalNextNode
    insertLocation.next = insertNode

    return insertLocation
  }

  remove (nodeToRemove) {
    if(!this.head) return null;

    if(this.head.value === nodeToRemove) return this.head.next;
    const prevPointer = this.head
    const currentNode = prevPointer.next

    while(prevPointer && prevPointer.next !== nodeToRemove) {
      currentNode = prevPointer.next
      prevPointer = currentNode
    }

    prevPointer.next = currentNode.next
  }
}