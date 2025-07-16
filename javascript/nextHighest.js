let myNum = 10756;

//digit query of a specific value in a spot in an int.
const mid = Math.floor((myNum / 10) % 10);


const nextHighest = (num) => {
  let digits = num.toString().split('');
  let len = digits.length;

  //we begin at len - 2 because we want to check the next val compared to the current 
  for (let i = len - 2; i >= 0; i--) {
    for (let j = len - 1; j > i; j--) {
      console.log(digits[j], digits[i])
      if (digits[j] > digits[i]) {
        
        // Insert digits[j] at i
        let toInsert = digits.splice(j, 1)[0];
        digits.splice(i, 0, toInsert);

        // Sort everything after i+1
        let head = digits.slice(0, i + 1);
        let tail = digits.slice(i + 1).sort();

        return parseInt(head.concat(tail).join(''), 10);
      }
    }
  }

  return num;
};



// nextHighest(915876);




const newHighest = (num) => {

  const numToStringArray = num.toString().split('');
  // console.log(numToStringArray);
  let len = numToStringArray.length;

  for (let i = len - 2; i >= 0; i--) {
    for (let j = len -1; j > i; j--) {
      
      //essentially saying that if the number to the right position is larger than a number to the left
      // we need to splice it, inserting the value at its pivot and then concat the suffix from the pivot  in reverse.
      console.log('j:', numToStringArray[j], j)
      console.log('i:', numToStringArray[i], i)
      if (Number(numToStringArray[j]) > Number(numToStringArray[i])) {

        let pivot = numToStringArray.splice(j, 1)[0];
        console.log('pivot', pivot);
        console.log('numArr', numToStringArray);
        numToStringArray.splice(i, 0, pivot);
        let head = numToStringArray.slice(0, i + 2);
        let tail = numToStringArray.slice(i + 2).reverse();
        return Number(head.concat(tail).join(''), 10);

      }
    }
  }
  return num || 0;

}

console.log(newHighest(915876));