
const countPath = (n, roads) => {

 
  //the representation of [u,v,time] basically means that the position of u in the graph is the current node, the first index is the neighbor intersection and the time is the distance to travel between them.
  /*
  * [ [ 6, 7 ], [ 1, 2 ], [ 4, 5 ] ] this first line of the array that is made means that u = 0, as it's the starting node. The 6 is the neighbor and 7 is time between. 
  */
 
 const graph = new Array(n).fill(0).map(() => []);
 for(const [u,v,time] of roads){
   graph[u].push([v,time]);
   graph[v].push([u,time]);
  }
  
  console.log('INIT graph with neighbors, weights and reverse', graph);
  
  //dist holds the shortest time from node 0 to each node
  //ways counts the number of shortest paths to each node.
  const dist = Array(n).fill(Infinity);
  const ways = Array(n).fill(0);
  dist[0]=0;
  ways[0]=1;

  //create a min-heap using a functional closure
  // define a function that returns an object with push/pop/isEmpty methods
  const createMinHeap = () => {
    let heap = [];
  
//recursively bubble up the element at given index.
  const bubbleUp = (index) => {
    if(index === 0)return;
    const parent = Math.floor((index - 1) /2);
    if(heap[parent][0] > heap[index][0]) {
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      bubbleUp(parent);
    }
  }

  const bubbleDown = (index) => {
    const left = 2 * index + 1;
    const right = 2 * index +2;
    let smallest = index;
    if(left < heap.length && heap[left][0] < heap[smallest][0]){
      smallest = left;
    }
    if(right < heap.length && heap[right][0] < heap[smallest][0]){
      smallest = right;
    }
    if(smallest !== index){
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      bubbleDown(smallest);
    }
  };

  return {
    push: (val) => {
      heap = [...heap, val];
      bubbleUp(heap.length -1);
    },
    pop: () => {
      if(heap.length === 0) return null;
      const top = heap[0];
      const end = heap[heap.length -1];
      heap = heap.slice(0, heap.length-1);
      if(heap.length > 0) {
        heap[0] = end;
        bubbleDown(0)
      }
      return top;
    },
    isEmpty: () => heap.length === 0
  }
  }

}


const n = 7
const roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
countPath(n, roads)