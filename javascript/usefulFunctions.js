 const makeArray = (limit) => {
   const newArray = Array.from({length: limit}, (_, i) => 1 + i); //this is the functionality to create an array from 1 value to another value, filling the array with specific numbers. 
   return newArray
  }
console.log('new array from argument 1 to argument => ', makeArray(5));

const getUniquesInArr = (valueArr) => {
  const uniqueSet = [...new Set(valueArr)]; //this will take the original array, spread it into a new set (which only takes the unique values) and then converts it back to an array using an array comprehension.  
  return uniqueSet;
}

console.log('only unique values from original array => ', getUniquesInArr([1,1,1,2,3,4,6,7,7,7,8,9,10]));

//digit dynamic programming:

const dp = (pos, tight) => {
  if(tight) {
    
  }
}