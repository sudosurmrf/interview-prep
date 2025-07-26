const obj = {
  a:1,
  b:2,
  sum() {
    return obj.a + obj.b
  }
}

const test = obj.sum;

// console.log(obj.sum());
// console.log(test());


// const useTraverseTree = (explorer, currentNode) => {
  
//   const insertNode = (tree, folderId, item,isFolder=false) => {

//     if(tree.id === folderId && tree.isFolder) {
//       return tree
//     }
//   }
  
//   return {insertNode};
// }

// export default useTraverseTree;


// in a heap, we leave the 0th null since it helps with the following math:
//in a min heap this is how you calc the children and parents:
// left child = i * 2
// right child = i * 2 + 1
// parent = Math.floor(i / 2)

const MinHeap = () => {
  let heap = [null];

  const insert = (num) => {
    heap[heap.length] = num // or use .push
    if(heap.length > 2){

      
      // While the newly inserted value (child node) is less than its parent,
      // keep swapping it upward to maintain the MinHeap property.
      // left child = i * 2
      // right child = i * 2 + 1
      // parent = Math.floor(i / 2) in this case the code after the greater than 
      //just means the parent (as described by the above relationship)
      let idx = heap[heap.length - 1]
      while (heap[idx] < heap[Math.floor(idx/2)]) {
        if(heap.length >= 1) { //this just means that if we haven't reached the root node yet
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
          if(Math.floor(idx/2) > 1) { //just means that the parent node is not the root node
            idx = Math.floor(idx/2); // this will reset the idx value to the parent node position (same formula)
          } else {
            break;
          }
        }
      }
    }
  }

}
  
 



const minHeapToInsert = (heap, num) => {

  heap.push(num);

  let idx = heap.length - 1;

  while( idx > 1){
    const parentIdx = Math.floor(idx / 2);

    if(heap[parentIdx] <= heap[idx]) break;

    [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
    idx = parentIdx;
  }
  return heap;
}

let heap = [null, 5, 8, 10,17,6,9,14,14];
// console.log(minHeapToInsert(heap, 3));


const removeMin = (heap) => {
  if(heap.length <= 1) return null; //the heap is at it's shortest (null) or empty.
  if(heap.length === 2) return heap.pop(); // just remove the last element (nothing else to do) must be a 
  //valid min heap before doing the line above. check to make sure. 

  const removedVal = heap[1];
  heap[1] = heap.pop();

  let idx = 1;
  while(idx * 2 < heap.length) {
    const left = idx * 2;
    const right = left + 1;
    let swapIdx = idx
    if(heap[left] < heap[swapIdx]) swapIdx = left;
    if(right < heap.length && heap[right] < heap[swapIdx]) swapIdx = right;

    if(swapIdx === idx) break; // there were no swaps and everything is in the correct place

    [heap[idx], heap[swapIdx]] = [heap[swapIdx], heap[idx]];
    idx = swapIdx;

  }
  return {removedVal, heap}
}

// console.log(removeMin(heap))




const removeSmallestVal = (heap) => {

  if(heap.length <= 1) return null;
  if(heap.length === 2) heap.pop();

  let idx = 1;
  heap[1] = heap.pop();
  while (idx * 2 < heap.length) {
    let swapIdx = idx;
    const left = idx * 2;
    const right = left + 1;

    if(heap[left] < heap[swapIdx]) swapIdx = left;
    if(right < heap.length && heap[right] < heap[swapIdx]) swapIdx = right;

    if(swapIdx === idx) break;

    [heap[idx], heap[swapIdx]] = [heap[swapIdx], heap[idx]];
    idx = swapIdx;

  }
  return heap;
}

const kthLargest = (k, heap) => {
  if(heap.length < k + 1) return null;
  while(heap.length !== k+1){
    heap = removeSmallestVal(heap)
  }
  if(heap.length === k + 1) return heap[1];

  }

  const addNewVal = (val, heap, k) => {

  heap.push(val);
  let idx = heap.length -1;

  while (idx > 1) {
    const parentIdx = Math.floor(idx / 2);

    if(heap[parentIdx] <= heap[idx]) break;

    [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
    idx = parentIdx;
  }
  return kthLargest(k, heap)
}

// console.log(kthLargest(4,heap));

