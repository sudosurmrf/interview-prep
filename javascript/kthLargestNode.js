//Given an integer array nums and an integer k, return the kth largest element in the array.
// Note: It is the kth largest in sorted order, not the kth distinct element.
/// O(n  * log k)



//nums = [3,2,1,5,6,4], k = 2 -> output should be 5 since it is the 2nd largest. 



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