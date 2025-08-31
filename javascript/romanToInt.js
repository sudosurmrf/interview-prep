const romans = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

const solution = (romanNum) => {
  const romanArray = romanNum.split('');
  let total = 0;
  for(let i =0; i<romanArray.length; i++) {
    if(romans[romanArray[i]] < romans[romanArray[i + 1]]) {
      total += romans[romanArray[i + 1]] - romans[romanArray[i]]
      i++
    } else {
       total +=  romans[romanArray[i]] 
    }
  }
  return total
}

console.log(solution("MXCIV"))
