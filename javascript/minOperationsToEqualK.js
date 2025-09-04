// You are given an integer array nums and an integer k.

// An integer h is called valid if all values in the array that are strictly greater than h are identical.

// For example, if nums = [10, 8, 10, 8], a valid integer is h = 9 because all nums[i] > 9 are equal to 10, but 5 is not a valid integer.

// You are allowed to perform the following operation on nums:

// Select an integer h that is valid for the current values in nums.
// For each index i where nums[i] > h, set nums[i] to h.
// Return the minimum number of operations required to make every element in nums equal to k. If it is impossible to make all elements equal to k, return -1.



// Example 1:

// Input: nums = [5,2,5,4,5], k = 2

// Output: 2

// Explanation:

// The operations can be performed in order using valid integers 4 and then 2.

// Example 2:

// Input: nums = [2,1,2], k = 2

// Output: -1

// Explanation:

// It is impossible to make all the values equal to 2.

// Example 3:

// Input: nums = [9,7,5,3], k = 1

// Output: 4

// Explanation:

// The operations can be performed using valid integers in the order 7, 5, 3, and 1.
  const findNextHighest = (nums, currentHighest) => {
  let i = nums.length - 2;
  while(nums[i] === currentHighest && i >= 0) {
    i--;
  }
  return i
}
//O(n^2) solution - not gr8. 
const minOperations = (nums, k) => {
  nums.sort((a,b) => a - b);
  if (k > nums[0]) return -1;
  let ops = 0; //operations

  let h = findNextHighest(nums, nums[nums.length -1]);

  if(k < nums[0]) ops++;
  const secondLowest = nums.findIndex(num => num > nums[0])
  while (nums[secondLowest] > k) {
    nums = nums.slice(0, h + 1)
    h = findNextHighest(nums, nums[h]);
    ops++;
  }
  return ops;
}


//O(n) solution
const minOperationsV2 = (nums, k) => {
  let minVal = Infinity;
  const distinct = new Set();

  for (let num of nums) {
    if (num < minVal) minVal = num;
    distinct.add(num);
  }

  if (k > minVal) return -1;
  return distinct.size + (k < minVal ? 0 : -1);
};

//O(n) solution - this and above are best, but above is slightly more efficient because it doesn't use the spread operator. 
const minOperationsV3 = (nums, k) => {
  let minVal = Math.min(...nums);
  const distinct = new Set(nums);

  if (k > minVal) return -1;
  return distinct.size + (k < minVal ? 0 : -1);
};

console.log(minOperationsV2([9,7,5,5,3], 1));