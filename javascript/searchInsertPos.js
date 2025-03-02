// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

//this helper function runs in constant time O(1)
const midNeedsHigher = (nums, target, mid) => {
  if(nums[mid]<target){
      return true
  }
  return false
}
//this bst function runs in O(log n) since the search field is halved each time it runs. 
const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length -1

  while(low<=high){
      let mid = Math.floor((high + low)/2)
      if(midNeedsHigher(nums, target, mid)){
          low = mid + 1
      }else {
          high = mid - 1
      }
  }
  return low
};