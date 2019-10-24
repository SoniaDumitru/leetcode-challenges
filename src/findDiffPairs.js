// Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

function findPairs(nums, k) {
  let count = 0;
  //first loop picks all elements one by one
  for (let i=0; i < nums.length; i++) {
    //second loop checks if there is a pair of this picked element
    for (let j=i+1; j < nums.length; j++) {
      if (nums[i]-nums[j] === k || nums[j]-nums[i] === k) {
        count ++;
      }
    }
  }
  return count;
}
// findPairs([3,1,4,1,5], 2) => result: 3
