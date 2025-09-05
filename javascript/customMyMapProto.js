//create a new array built in method to allow for any callback and have it act on the values in an array. 



Array.prototype.myMap = function (cb) {
  cb(this)
  return this;
}

const arr = [1,2,3];

const arr1 = arr.myMap(console.log);

