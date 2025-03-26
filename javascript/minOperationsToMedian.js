// You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

// A uni-value grid is a grid where all the elements of it are equal.

// Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

// Input: grid = [[2,4],[6,8]], x = 2
// Output: 4
// Explanation: We can make every element equal to 4 by doing the following: 
// - Add x to 2 once.
// - Subtract x from 6 once.
// - Subtract x from 8 twice.
// A total of 4 operations were used.


// Input: grid = [[1,5],[2,3]], x = 1
// Output: 5
// Explanation: We can make every element equal to 3.

// Input: grid = [[1,2],[3,4]], x = 2
// Output: -1
// Explanation: It is impossible to make every element equal.
 

//below is O(n log n)
const minOperations = (grid, x) => {
  const flat = grid.flat();
  flat.sort((a,b) => b - a);
  let remainder = flat[0] % x;
  const median = flat[Math.floor(flat.length/2)];
  let count = 0;
  for(let val of flat){
   if(val % x !== remainder) return -1
   count += Math.abs((val - median)/x)
  }
  return count
};


// -------------
//more efficient below (but only if not using javascript engine that isn't highly optimized for reg sort.)

const minOperationsV2 = (grid, x) => {
  const flat = grid.flat();

  // Helper QuickSelect function to find median
  const quickSelect = (arr, k, left = 0, right = arr.length - 1) => {
      const partition = (l, r, pivotIndex) => {
          const pivot = arr[pivotIndex];
          [arr[pivotIndex], arr[r]] = [arr[r], arr[pivotIndex]];
          let storeIndex = l;
          for (let i = l; i < r; i++) {
              if (arr[i] < pivot) {
                  [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
                  storeIndex++;
              }
          }
          [arr[r], arr[storeIndex]] = [arr[storeIndex], arr[r]];
          return storeIndex;
      };

      while (left <= right) {
          let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
          pivotIndex = partition(left, right, pivotIndex);

          if (pivotIndex === k) return arr[k];
          else if (pivotIndex < k) left = pivotIndex + 1;
          else right = pivotIndex - 1;
      }
  };

  const remainder = flat[0] % x;
  for (const val of flat) {
      if (val % x !== remainder) return -1;
  }

  const mid = Math.floor(flat.length / 2);
  const median = quickSelect(flat, mid);

  let count = 0;
  for (const val of flat) {
      count += Math.abs(val - median) / x;
  }
  return count;
};