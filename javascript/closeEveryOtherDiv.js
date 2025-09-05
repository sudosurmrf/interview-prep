
//write a fn that accepts a str as an argument.
/**
 * the string is supposed to be HTML but all the divs are missing their closing tags.
 * (they have the < and the > but not /)
 * the fn job is to find and close all the divs in the provided HTML string. 
 * 
 * the fn should return the entire corrected string. 
 */



const closeDivs = (str) => {
  let close = false;
  let outputStr = "";
  for(let i =0; i<str.length; i++){
    if(str[i] === "<" && close){
      outputStr += "</div";
      i+= 3;
      close = !close;
    } else if(str[i] === "<") {
      close = !close;
      outputStr += str[i];
    } else {
      outputStr += str[i];
    }
  }
  return outputStr;
}

console.log(closeDivsV2('<div>hellothere <div><div><div> ok ok<div><div>'));