// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

const answer = (flowerbed, n) => {
  let total = 0;

  for (let i = 0; i<flowerbed.length; i++) {
    //if i is 0 or if the index before i is 0 
    const prev = (i === 0 || flowerbed[i - 1] === 0);
    //if the index after i is 0 or if i equals the last position in the array.
    const next = (flowerbed[i + 1] ===0 || i === flowerbed.length -1)

    if(prev && next) {
      flowerbed[i] = 1;//change current position to 1 to keep track. 
      total+=1;
      //skip over one position because the next index cannot be a 1.
      i++
    }
  }
  return total >= n;
};





const flowerBeds = (flowerbed, n) => {
  let lastFlowerIndex = -2;
  let count = 0;
  for(let i=0; i<flowerbed.length; i++){
    if(flowerbed[i] === 1) {
      lastFlowerIndex = i
    }
    if(i > (lastFlowerIndex + 1) && flowerbed[i] === 0 && flowerbed[i + 1]  !== 1) {
      flowerbed[i] = 1;
      lastFlowerIndex = i;
      count++
    }
  }
  return count >= n;
}