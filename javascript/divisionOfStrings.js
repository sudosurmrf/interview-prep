// // For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

//this is just a helper function to get the gcd for us
const answer = (str1, str2) => {
  const gcd = (a,b) => {
    return b === 0 ? a : gcd(b, a%b);
  }
  if(str1 + str2 !== str2 + str1) return '';

  const gcdLen = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLen); // this will return a splice from the 0th index to the largest gcd between the 2 strings 
}


// // For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.


//we will first define a helper function, which will give us the gcd between the two inputs. 
const gcd = (a,b) => {
  return b === 0 ? a : gcd(b, a%b) //this part will return either a if b === 0, otherwise it will recursively run gcd again, feeding b as the new a, and b will be a % b. This will continue until b === 0. 
}
//our main function will take in 2 params, string 1 and sting 2. 
const getLargestStr = (str1, str2) => {
  //we need to check to see if str1 + str 2 === str2 + str1. If it doesn,t return an empty string since they are not reversible (aka divisible by themselves)
  if (str1 + str2 !== str2 + str1) return '';
  //we get the gcd of the len of each string here. This is because if the step before this succeeds, it means the strings are repetitions of each other.
  //this means all we need left is to find out the common gcd between the lengths of these strings. 
  const gcdLenOfStr = gcd(str1.length, str2.length);
  //lastly we will return either str1 or str2 as a substring from the 0th index location, to the gcd index location (inclusive). 
  return str1.substring(0, gcdLenOfStr)
}

console.log(getLargestStr('ABCABC', 'ABC'))