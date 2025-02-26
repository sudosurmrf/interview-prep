# Longest Substring Without Repeating Characters

# Problem Statement:
# Given a string s, find the length of the longest substring without repeating characters.

# Example:

# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

def longestSubStr(s):
  hashMap = {}
  longest = 0
  start = 0
  for i, letter in enumerate(s):
    # print(i, letter)
    letter = s[i]
    if letter in hashMap and hashMap[letter] >= start:
      start = hashMap[letter] + 1
      print(start)
    hashMap[letter] = i
    longest = max(longest,  i - start + 1)
    
  return longest

print(longestSubStr('abcabcabc'))