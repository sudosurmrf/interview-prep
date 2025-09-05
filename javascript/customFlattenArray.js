//create a built in array method to flatten an inner subarray, without using flat or flatmap.


Array.prototype.flatten = function () {
  const returnArr = [];
  for(let i = 0; i< this.length; i++) {
    if(Array.isArray(this[i])) {
      returnArr.push(...this[i]);
    } else {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
}
console.log([[1,2,3,5],6].flatten());