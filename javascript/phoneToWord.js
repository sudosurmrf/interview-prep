
//given a string containing digits from  2-9, return all permutations of words
// that can be output from the pressed numbers. (as in dial pad phone)

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

 const hashMap = new Map();
  hashMap.set('2', ['a','b','c'])
  hashMap.set('3', ['d','e','f'])
  hashMap.set('4', ['g','h','i'])
  hashMap.set('5', ['j','k','l'])
  hashMap.set('6', ['m','n','o'])
  hashMap.set('7', ['p','q','r'])
  hashMap.set('8', ['s','t','u'])
  hashMap.set('9', ['v','w','x','y'])



const phoneToWord = (stringOfNumbers) => {

  if(stringOfNumbers.length < 1) return [];

  let result = ['']
for(const digit of stringOfNumbers){
  const letters = hashMap.get(digit);
  if(!letters) continue;

  const next = [];
  for(const prefix of result) {
    for (const letter of letters) {
      next.push(prefix+ letter);
    }
  }
  result = next;
}
 return result;
}


console.log(phoneToWord("23"))