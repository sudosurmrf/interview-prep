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


const decodeZigzag = (scrambled, numRows) => {
  if (numRows === 1) return scrambled;

  const n = scrambled.length;
  const halfLen = numRows - 1;      // length of one half-cycle

  // Step 1: count how many characters per row
  const rowCounts = Array(numRows).fill(0);
  for (let i = 0; i < n; i++) {
    let block = Math.floor(i / halfLen);
    let offset = i % halfLen;
    let row = (block % 2 === 0) ? offset : numRows - 1 - offset;
    rowCounts[row]++;
  }

  // Step 2: slice scrambled into row segments
  const rows = [];
  let idx = 0;
  for (let r = 0; r < numRows; r++) {
    rows[r] = scrambled.slice(idx, idx + rowCounts[r]).split('');
    idx += rowCounts[r];
  }

  // Step 3: reconstruct original string
  const rowPointers = Array(numRows).fill(0);
  let result = [];
  for (let i = 0; i < n; i++) {
    let block = Math.floor(i / halfLen);
    let offset = i % halfLen;
    let row = (block % 2 === 0) ? offset : numRows - 1 - offset;
    result.push(rows[row][rowPointers[row]++]);
  }

  return result.join('');
};

// ✅ Test
console.log(decodeZigzag("PAHNAPLSIIGYIR", 3));