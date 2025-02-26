// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  //first we will check if there is something in the strings array, if not return an empty string.
  if(strs.length === 0) return '';
  //we will then find the max len possible of the prefix by setting the shortest word to the max prefix
  let maxLen = Math.min(...strs.map((str) => str.length))
  //we will then set an initial minimum of possible prefixes to at least 1.
  let low = 1;
  //we also then set the inital max to the maxLen
  let high = maxLen;
  //once we have this set, we can work on looping over different prefixes. We will create a loop based on if low<=high
  while(low<=high){
    //while low is less than or equal to high, we need to check what the middle number is between them. This is because
    //we are going to use a BST search for all possible prefixes to lower the time complexity.
    let mid = Math.floor((low + high)/2);
    //we then need to check if the current string, from range 0th to mid is a common prefix among all strings in strs. 
    //we will use a helper function to achieve this. (skipping to the helper function from here.)
    if(isCommonPrefix(strs, mid)){
      //if true, the new low should be equal to the last mid, + 1 (this is because true means it was a substring)
      low = mid + 1
    }else{
      //if false, then we set the new high to the last mid - 1, because it was not a prefix of the others previously. 
      high = mid - 1
    }
  }
  return strs[0].substring(0, high);
}
//helper function will need to take in the strs array and the current len (mid) that we are at. 
const isCommonPrefix = (strs, len) => {
  //we will need to set the current prefix we are trying to test with any strs indexed item(strs[0] for simplicity) and check
  //if it is a substring of the other items up to the len provided (mid from the other fn)
  const prefix = strs[0].substring(0, len);
  //we then need to check if prefix is at the beginning of each string, using startsWith on each OTHER element. 
  for (let i = 1; i<strs.length; i++){
    if(!strs[i].startsWith(prefix)){
      return false
    }
    //we return false if it is not a substring of the other words, but true if it passes all checks. (jumping back to other fn now.)
  }
  return true
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonSubstring(["123456789","123456789","12345679"]))