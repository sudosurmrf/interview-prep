// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


const convert = (str, numRows) => {
  const rowCounts = []; 
  const len = str.length;
  const cycleLen = 2 * numRows - 2
  const top= Math.floor(len / numRows);
  const bottom= top;
  const totalMid = len - (top + bottom)
  console.log(totalMid)
  rowCounts.push(top);
  for(let i = numRows - 2; i > 0; i--){
    rowCounts.push(totalMid / (numRows - 2))
  }

console.log(rowCounts);
}

convert("PAYPALISHIRING",3)