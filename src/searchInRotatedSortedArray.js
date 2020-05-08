// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

let nums = [4,5,6,7,0,1,2];
let target = 0; // index: 4
// let target = 9; => return -1
const search = (nums, target) => {
  // in order to be O(log n) time, my original set needs to shirink by half, by half etc each time
  // we need to know three points: most left, most right, mid point
  // we will use binary search, we determine how to readjust left and right based on info we have about the midpoint
  let left = 0;
  let right = nums.length-1;
  while (left <= right) {
    let midPoint = Math.floor((left+right)/2);
    if (nums[midPoint] === target) return midPoint;
    // start adjunsting our next iteration
    // determine which segment is sorted
    if (nums[left] <= nums[midPoint]) {
      if (nums[left] <= target && target <= nums[midPoint]) right = midPoint -1;
      else left = midPoint + 1;
    } else {
      if (nums[midPoint] <= target && target <= nums[right]) left = midPoint + 1;
      else right = midPoint - 1;
    }
  }
  return -1;
}

console.log(search(nums, target));
