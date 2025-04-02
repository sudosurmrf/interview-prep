
// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

 

// Example 1:

// Input: grid = [[1,3],[2,2]]
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].
// Example 2:

// Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
// Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].


const findMissingAndRepeatedValuesSlow = (grid) => {
  const hashMap = {}
  let repeated;
  const flat = grid.flat()
  for(let num of flat){
      if(hashMap[num]){
          repeated = num;
      } else {
          hashMap[num] = 1
      }
  }
  let n = flat.length;
  for(let i =1; i<= n;i++){
      if(!hashMap[i]){
          missing = i;
          break;
      }
  }
  return [repeated, missing]

};


// ________________
//below is faster but harder to understand


const findMissingAndRepeatedValues = (grid) => {

  const flat = grid.flat();
  const n = flat.length;

  let sum = 0;
  let sumSq = 0;
  for (let num of flat) {
    sum += num;
    sumSq += num * num;
  }
  const expectedSum = (n * (n + 1)) / 2;
  const expectedSumSq = (n * (n + 1) * (2 * n + 1)) / 6;

  const diff = expectedSum - sum;
  
  if(diff === 0) return null;

  const sumDiff = (expectedSumSq - sumSq) / diff; 

  const missing = (diff + sumDiff) / 2;
  const duplicate = missing - diff;

  return [duplicate, missing];
}