class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insertNode(root, newNode){
    if(newNode.value < root.value){
      if(root.left === null){
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if(root.right === null){
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  insert(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}
