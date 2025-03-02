// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
const findMedianSortedArrays = (nums1, nums2) => {
 // Ensure nums1 is the smaller array for binary search efficiency.
 if (nums1.length > nums2.length) {
  [nums1, nums2] = [nums2, nums1];
}
//init variables here that will be used to track pointers (positions) x is total # of elements in smaller array, y is total # of elements in larger array.low and high are the pointers. 
const x = nums1.length, y = nums2.length;
let low = 0, high = x;

//bst loop 
while (low <= high) {
  const partitionX = Math.floor((low + high) / 2);
  const partitionY = Math.floor((x + y + 1) / 2) - partitionX;
  
  const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
  const minRightX = (partitionX === x) ? Infinity : nums1[partitionX];
  
  const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
  const minRightY = (partitionY === y) ? Infinity : nums2[partitionY];
  
  if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
    // Correct partition found.
    if ((x + y) % 2 === 0) {
      return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
    } else {
      return Math.max(maxLeftX, maxLeftY);
    }
  } else if (maxLeftX > minRightY) {
    high = partitionX - 1;
  } else {
    low = partitionX + 1;
  }
}

throw new Error("Input arrays are not sorted or are invalid.");
};


