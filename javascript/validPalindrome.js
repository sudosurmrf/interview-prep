//using the string prototype create a built in check for if a str is a palindrome.


String.prototype.isPalindrome = function() {
  let left = 0;
  let right = this.length -1;
  console.log(this);
  while(left < right) {
    if(this[left] !== this[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log('racecar'.isPalindrome());