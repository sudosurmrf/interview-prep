// given an integer num, return the number of steps to reduce it to zero.

// in one step, if the current number is even, you must divide it by 2. Otherwise, you must subtract 1 from it. 

const numOfSteps = (num) => {
  let steps = 0;
  while(num !== 0){
    if(num % 2 === 0){
      num = num / 2
    } else{
      num -= 1
    }
    steps++
  }
  return steps
}


const numOfStepsBitmask = (num) => {
  let steps = 0;
  while(num > 0){
    //we use a bitmask and bitwise operator to see if the last bit is a 0, which means even. if its a 1, its odd. 
    if((num & 1) === 0){
      //the >> moves all the current bits over to the right by 1 position, which actually divides the value in half. 
      num >>= 1;
    } else{
      num -= 1
    }
    steps++
  }
  return steps
}
// console.log(numOfSteps(8))
// console.log(numOfStepsBitmask(8))

// given an integer num, return the number of steps to reduce it to zero.

// in one step, if the current number is even, you must divide it by 2. Otherwise, you must subtract 1 from it. 


const reduceMe = (num) => {
  let steps = 0;
  while(num > 0){
    if((num & 1)===0){
      num >>= 1;
    } else {
      num --
    }
    steps ++
  }
  return steps;
}

console.log(reduceMe(8))