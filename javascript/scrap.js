// You are given two positive integers low and high.

// An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.

// Return the number of symmetric integers in the range [low, high].

 

// Example 1:

// Input: low = 1, high = 100
// Output: 9
// Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.
// Example 2:

// Input: low = 1200, high = 1230
// Output: 4
// Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.
 

const countSymmetricIntegers = (low, high) => {
  let count = 0;

  // iterate only over even-length numbers
  for (let num = low; num <= high; num++) {
    const str = String(num);
    if (str.length % 2 !== 0) continue;

    const half = str.length / 2;
    let sumLeft = 0, sumRight = 0;

    for (let i = 0; i < half; i++) {
      sumLeft += str.charCodeAt(i) - 48; // fast digit to int
      sumRight += str.charCodeAt(i + half) - 48;
    }

    if (sumLeft === sumRight) count++;
  }

  return count;
};

// countSymmetricIntegers(1, 1000);


//dynamic dfs solution. works better for when values are 10^4 and higher.
const countSymmetricIntegersV2 = (low, high) => {
  const countUpTo = (n) => {
    if (n < 0) return 0;
    const s = String(n);
    const totalLen = s.length;
    let total = 0;

    for (let L = 2; L <= totalLen; L += 2) {
      const memo = new Map();

      const dfs = (pos, diff, tight, isLeading) => {
        if (pos === L) {
          // Valid if we've built a non-leading number and sums match
          return isLeading ? 0 : (diff === 0 ? 1 : 0);
        }

        const key = `${pos},${diff},${tight},${isLeading}`;
        if (memo.has(key)) return memo.get(key);

        let limit = 9;
        if (tight && L === totalLen) {
          limit = Number(s[pos]);
        }

        let res = 0;
        for (let d = 0; d <= limit; d++) {
          if (pos === 0 && d === 0) continue; // no leading zero

          const nextTight = tight && L === totalLen && d === limit;
          let newDiff = diff;

          if (pos < L / 2) {
            newDiff += d;
          } else {
            newDiff -= d;
          }

          res += dfs(pos + 1, newDiff, nextTight, false);
        }

        memo.set(key, res);
        return res;
      }

      total += dfs(0, 0, L === totalLen, true);
    }

    return total;
  }

  return countUpTo(high) - countUpTo(low - 1);
};




console.log('helllo')