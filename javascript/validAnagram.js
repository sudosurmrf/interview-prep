// Problem Statement:
// Given two strings s and t, write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const validAnagram = (s, t) => {
  // If the lengths are different, they can't be anagrams.
  if (s.length !== t.length) return false;
  const freq = {};
  // Build frequency map for string s
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1; //this is to check if the value is already there, if it is set it to the value + 1 otherwise 0.
  }
  // For each character in t, decrease the corresponding count
  for (let char of t) {
    console.log(freq);
    // If the character isn't found or its count is already zero, return false
    if (!freq[char]) return false;
    freq[char]--;
  }
  // If we've processed all characters, the strings are anagrams
  return true;
};

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('anagram', 'dogiiii'));
