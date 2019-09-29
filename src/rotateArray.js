// Given an array, rotate the array to the right by k steps, where k is non-negative.

let rotate = function(nums, k) {
  for(let i = 0; i < k; i ++){
      nums.unshift(nums.pop())
  }
};
