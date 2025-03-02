// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

// 9|9|4
// 6|6|8
// 2|1|1
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].
// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
// Example 3:

// Input: matrix = [[1]]
// Output: 1


// Input Check:
// The function first checks if the matrix is empty.

// Memoization Cache:
// A 2D array cache is used to store the longest increasing path starting from each cell, preventing repeated work.

// DFS Function:
// The helper function dfs(i, j):

// Checks if the result for (i, j) is already computed.
// Explores all four directions (up, down, left, right).
// Only moves to a neighbor if its value is greater than the current cell's value.
// Updates the best path length and caches the result.
// Main Loop:
// The solution iterates over every cell in the matrix, computing the longest path starting from that cell, and updates the overall maximum path length.

// This approach efficiently solves the problem with a time complexity of O(m*n)

const longestIncreasingPath = (matrix) => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
  
  const m = matrix.length, n = matrix[0].length;
  // Create a cache (memoization) array to store the longest path starting from each cell
  const cache = Array.from({ length: m }, () => Array(n).fill(0));
  
  // DFS function to explore from cell (i, j)
  const dfs = (i, j) => {
    // If already computed, return the cached value
    if (cache[i][j] !== 0) return cache[i][j];
    
    let best = 1; // Minimum path length is 1 (the cell itself)
    const directions = [
      [0, 1],  // right
      [0, -1], // left
      [1, 0],  // down
      [-1, 0]  // up
    ];
    
    for (let [di, dj] of directions) {
      const ni = i + di, nj = j + dj;
      // Check boundaries and whether the neighbor is strictly greater
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j]) {
        best = Math.max(best, 1 + dfs(ni, nj));
      }
    }
    
    // Cache and return the result for this cell
    cache[i][j] = best;
    return best;
  }
  
  // Iterate over all cells to find the longest increasing path
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }
  
  return result;
};
