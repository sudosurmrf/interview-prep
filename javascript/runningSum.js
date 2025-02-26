//given an array of nums, return the current running sum of each index added to the following.

//input: nums = [3,1,2,10,1]
//output: [3,4,6,16,17]


// const runningSum = (nums) => {
//   //make sure not to start at 0, start at 1 so there is an index before 1. 
//   for(let i=1; i<nums.length; i++){
//     //this will overwrite the initial value of nums[i] and add the the prev index value to the total in the current index location. This avoids having to create a new array and also modifies in place. 
//     nums[i] += nums[i -1]
//   }
//   return nums
// }

// console.log(runningSum([3,1,2,10,1]))




const richestCustomer = (accounts) => {
  let richest = 0;
  for(let i = 0; i<accounts.length; i++){
    let temp = 0;
    for(let j = 0; j<accounts[i].length; j++){
      temp += accounts[i][j]
      richest <= temp ? richest = temp : richest
    }
  }
  return richest;
}

console.log(richestCustomer([[7,1,3], [2,8,9],[1,9,5]]))