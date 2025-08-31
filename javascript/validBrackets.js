// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([])"
// Output: true
// Example 5:
// Input: s = "([)]"
// Output: false


const isValid = (s) => {
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  let closingBracks = [] // this is just a stack following last in, first out. 
  for (const letter of s) {
    if (letter in bracketMap) {
      if (closingBracks.length === 0 || closingBracks.pop() !== bracketMap[letter]) { 
        // will pop the last element added along with check the element popped off to see if it is a pair
        return false;
      } 
    } else {
      closingBracks.push(letter)
    }
  }
  return closingBracks.length === 0
}

console.log(isValid("({[]})"))
