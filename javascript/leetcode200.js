// given an "m" x "n" 2d map of "1"s and "0"s. 
// return the number of islands where 1s represent land and 0 is water
// an island is formed when surrounded by water and can only be connected adjacent horizontally or vertically connected land.
//we can assume the edges of the grid are all water.


const getAdjNeighbors = (row, col, grid, visited) => {
  const adjNeighbors = [];

  if(row > 0 && !visited[row -1][col]){ //UP checks up one row, where we are not on an edge(up)
    adjNeighbors.push([row -1, col]);
  }
  if(row < grid.length - 1 && !visited[row + 1][col]){ //DOWN checks down one where as long as we are not on the last row
    adjNeighbors.push([row +1, col]);
  }
  if(col > 0 && !visited[row][col -1]){ // LEFT checks left one as long as we are not on 0th column
    adjNeighbors.push([row, col -1]);
  }
  if(col < grid[0].length && !visited[row][col +1]){ //RIGHT checks right as long as we are not on last column.
    adjNeighbors.push([row, col +1]);
  }


  return adjNeighbors;

}

const dFS = (row, col, grid, visited) => {
  const stack = [[row, col]];
  let islandSize = 0;

  while(stack.length){
    let curNode = stack.pop();

    let [row, col] = curNode;

    if(visited[row][col]){
      continue;
    }else {
      visited[row][col] = true; //make sure to mark that the current node was visited previously. 
    }

    if(grid[row][col] === '0'){ //checks if the cur node is a 0 or a 1. if its a 1 it increase islandSize. 
      continue;
    } else {
      islandSize++;
    }

    let adjacentNeighbors = getAdjNeighbors(row, col, grid, visited);

    stack.push(...adjacentNeighbors);

  }

  return islandSize > 0 ? true : false;
}

const solution = (grid) => {
  const visited = grid.map(row => row.map(cell => false));
  let islandCount = 0;

  for(let row = 0; row <grid.length; row++){
    for(let col =0; col <grid[row].length; col++){
      if(dFS(row, col, grid, visited))
        islandCount++;
    }
  }




  return islandCount;

};