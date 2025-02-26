const twoSum = (nums, target) => {
  const hashMap = {};
  for(const [index, value] of nums.entries()){
    let complement = target - value
    if(complement in hashMap){
      return [hashMap[complement], index]
    }
    hashMap[value] = index
  }
}
// //Hash Map Solution
// Time Complexity: O(n)
// Each element is processed once, and hash map lookups/inserts are average O(1).

// Space Complexity: O(n)
// In the worst case, you store every element in the hash map.

// could also do the below response, which would be slower time complexity

const secondApporach =(nums, target) => {
  for(let i=0;i<nums.length;i++) {
    for(let j =i +1;j <nums.length; j++){
      if(nums[i] +nums[j]===target){
        return [i, j]
      }
    }
  }
}

// Nested Loops (for i, for j) Solution
// Time Complexity: O(n²)
// For each element (outer loop), the inner loop scans through the remaining elements.

// Space Complexity: O(1)
// No additional data structures are used aside from the return value.