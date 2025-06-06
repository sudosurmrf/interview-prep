//Write a function in JavaScript that, given an array of integers, returns the length of the longest subarray 
// whose elements sum to zero.

// Requirements:

// Time complexity: O(n)

// Space complexity: O(n)


// input: [3, 4, -7, 1, 3, 3, 1, -4];
//output: 4 -> [-7, 1,3,3]


const zeroSumSub = (nums) => {
  //our base case
  if(nums.length < 1) return 0;

  const sumMap = new Map();
  let maxLength = 0;
  let runningTotal = 0;
 
  //this line is important since it is what causes the proper counting functionality of length of sub arrays.
  sumMap.set(0,-1);

  for(let i = 0; i <nums.length; i++) {
    //get the summation of each number added to the previous values.
    runningTotal += nums[i];
    console.log(runningTotal);
    if(sumMap.has(runningTotal)){
      //if the number has been seen in the hash map before, it means that a number at this iteration has brought it back down
      //since addition would only go up if non negative, if it has seen the value before (or adds 0) then 
      //it means the current value is negative and must be equal to the subarray from its current position backwards to the value of its running total key. 
      const length = i - sumMap.get(runningTotal);
      //change the maxLength value to whichever is longer
      maxLength = maxLength < length ? length : maxLength;

    }else {
      //if not seen, add a key value pair, where the key is the current running total and the value is its index.
      sumMap.set(runningTotal, i)
    }
    console.log(sumMap)
  }
return maxLength;
}


console.log(zeroSumSub([4, 4, -7, 1, 3, 3, 1, -4]))