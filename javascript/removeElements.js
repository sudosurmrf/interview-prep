// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//this solution mainly uses 2 pointers, where the second pointer "k" only iterates when the val is NOT the current val at nums[i]. By doing this, we make sure that only the val is replaced and the remaining numbers
//are only the correct other numbers. we also return k since it asks for the length of correct numbers, which again would only increment when val is not at the current index.
const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0;i<nums.length; i++){
      if(nums[i] !== val){
          nums[k] = nums[i];
          k++
      }
  }
  return k
}

console.log(removeElement([0,1,2,2,3,0,4,2]))