
// You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.

// You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can be allocated candies from only one pile of candies and some piles of candies may go unused.

// Return the maximum number of candies each child can get.

 

// Example 1:

// Input: candies = [5,8,6], k = 3
// Output: 5
// Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.
// Example 2:

// Input: candies = [2,5], k = 11
// Output: 0
// Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.


const maximumCandies = (candies, k) => {
  //check to see if the summation of the values is greater than "k" if its not, immediately return 0 since we can't split them with enough children. 
  let high = 0, sum = 0;
  let len = candies.length; //saving this as a var to reduce processing later on
  
  for(let i =0; i < len; i++){
    sum += candies[i];
    if(candies[i] > high) high = candies[i]; // this finds the high and sums everything at the same time. 
  }
  let low = 1;
  while(low <= high){
    const mid = Math.floor((low + high) / 2);
    let count = 0;
    for(let i =0; i< len; i++){
      //in this for loop, we are checking the value of "mid" which represents the max number of candies that can
      //be given evenly to each person. If the value of count is less than "k", we need to reduce the number of
      //candies to give to each person (high = mid - 1) otherwise we can keep attempting to increase the candies 
      //the "count" represents the total amount of people that can be split with the current value of "mid".
      //so again, if you need to check "k" against count, you are checking that atleast "k" people can split "mid" amount 
      //of candies evenly by comparing "count" >= to "k". 
      count += Math.floor(candies[i]/ mid);
      // if(count >= k) break; this might be faster but im not totally sure
    }
    if(count >= k){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
  }
    
  const candies = [7,9,11,6]
  console.log('first fn', maximumCandies(candies, 5));


  //can solve this with a bst and can also use a helper function if wanted. function below if using helper:

  const maxCandies = (candies, k) => {
    let max = 0, sum = 0;
    const len = candies.length;
    for(let i=0;i<len;i++){
      sum += candies[i];
      if(candies[i] >= max) max = candies[i];
    }
    if(sum < k) return 0;
    let low = 1;
    while(low <= max) {
      const mid = Math.floor((low + max) / 2);
      if(hasEnough(candies, k, mid)){
        low = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    return max;
  }

  const hasEnough = (candies, k, mid) => {
    let count = 0;
    for(const val of candies) count += Math.floor(val / mid);
    return count >= k;

  }


  console.log('second fn', maxCandies(candies, 5));