//write a fn that accepts a str and capitalizes every OTHER letter in the string.
//it should then return the converted string. 

const capitalizeEveryOther = (str) => {
  let capital = false;
  let newStr = '';
  for(let letter of str) {
    if(capital) {
      newStr += letter.toUpperCase();
    } else {
      newStr += letter.toLowerCase();
    }
    capital = !capital;
  }
  return newStr;
}

console.log(capitalizeEveryOther('HELLO???'));


