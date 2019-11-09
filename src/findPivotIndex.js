// Given an array of integers nums, write a method that returns the "pivot" index of this array.
// We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.
// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

let nums = [1,3,6]
let pivotIndex = function(nums) {
    let sum = nums.reduce((s, n) => s + n, 0)
    let lsum=0;

    for(let i=0; i<nums.length; i++){
        if(lsum === sum-nums[i]-lsum) {
          return i;
        }
        lsum+= nums[i];
    }

    return -1;
};

pivotIndex(nums);
