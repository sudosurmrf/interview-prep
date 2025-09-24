/**
 * given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is
 * a pair of nodes) write a function to check whether these edges make up a valid tree
 */

//example 1: 
/**
 * input n = 5, and edges = [[0,1], [0,2], [0,3], [1, 4]]
 * ouput = true
 */
//example 2: 
/**
 * input  n = 5, and edges = [[0,1], [1,2], [2,3]. [1, 4]]
 * output = false
 */

const buildAdjList = (n, edges) => {
  const adjList = Array.from({length: n}, () => []);
  for(let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }
  console.log('ADJ LIST: ', adjList)
  return adjList;
}

const isBfsCycle = (node, adjList, visited, parent) => {
  const queue = [node];

  while(queue.length) {
    let curNode = queue.shift();
    visited[curNode] = true;

    for(let neighbor of adjList[curNode]) {
        console.log('Queue: ', queue)
        console.log('Parent: ', parent)
        console.log('Visited: ',visited)
        console.log('Neighbor: ', neighbor)
        console.log('curNode: ', curNode)
        console.log('----------')
      if(!visited[neighbor]) {
        visited[neighbor] = true;
        parent[neighbor] = curNode;
        queue.push(neighbor);
      }else {
        
        if(neighbor !== parent[curNode]) return true;
      }
    }
  }
  return false;
}

const validTree = (n, edges) => {

  const adjList = buildAdjList(n, edges);
  const visited = new Uint8Array(n);
  const parent = new Uint8Array(n);

  let region = 0;

  for(let vertex = 0; vertex < adjList.length; vertex++) {
    if(!visited[vertex]) {
      region++;
      if(region > 1) return false;
      if(isBfsCycle(vertex, adjList, visited, parent)) return false;
    }
  }
  return true;

}

console.log(validTree(5, [[0,1], [1,2], [2,3],[1,3], [1, 4]]))
// console.log(validTree(5, [[0,1], [0,2], [0,3], [1, 4]]))