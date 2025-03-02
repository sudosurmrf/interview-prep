//given two strings, ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false if not. 
//each letter in magazine can only be used once in ransomNote. 

//input: ransomNote = 'aa' magainze = "ab"
//output: false

//input: ransomNote = 'aa' magainze = 'aab'
//output: true

const canMakeRansomNote = (ransomNote, magazine) => {
  const hashMap = {}
  for(const letter of magazine){
    if(letter in hashMap){
      hashMap[letter] += 1
    } else{
      hashMap[letter] = 1
    }
  }
  for(const ransLetter of ransomNote){
    if(hashMap[ransLetter] > 0) {
      hashMap[ransLetter] -= 1
    } else {
      return false
    }
  }
  return true
}

console.log(canMakeRansomNote('aa', 'ab'));
console.log(canMakeRansomNote('aa', 'aab'));
