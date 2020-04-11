// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// You may assume no duplicate exists in the array.
// Example:
//
// Input: [3,4,5,1,2]
// Output: 1

let nums = [3,4,5,1,2];
const findMin = (nums) => {
  // keep in mind time complexity
  // return Math.min(...nums);

  // I have solve this while making my elements smaller and smaller
  // binary search approch

  // establish two boundaries: a left and a right
  let left = 0;
  let right = nums.length-1;
  // I will be changing my left and right index based on comaparing things
  while(left < right) {
    // create a midPoint, just a reminder he have to reduce our iterations to log(n)
    let midPoint = Math.floor((left+right)/2);
    if (nums[midPoint] > nums[right]) {
      left = midPoint + 1;
    } else {
      right = midPoint;
    }
  }
  return nums[left];
}

console.log(findMin(nums));
