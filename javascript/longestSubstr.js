// Longest Substring Without Repeating Characters

// Problem Statement:
// Given a string s, find the length of the longest substring without repeating characters.

// Example:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const longestSubStr = (s) => {
  const hashMap = {}
  let longest = 0;
  let start = 0;
  for(let i =0;i<s.length;i++){
    const letter = s[i]
    // If the character is in the hashMap and its last seen index is within the current window,
    // move the start pointer right after its previous occurrence.
    if(hashMap[letter] !== undefined && hashMap[letter] >= start){
      start = hashMap[letter] + 1
    }
    //adds current character or letter to the hashmap index
    hashMap[letter] = i
    //updates the longest to max amount between either longest or the current index - start + 1
    longest = Math.max(longest, i - start + 1)
  }
  return longest
}


const input = "abcabcab";
console.log(longestSubStr(input));

//this operates at an O(n) time complexity, which is the most optimal solution for longest substring.

