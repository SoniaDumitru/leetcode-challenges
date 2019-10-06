// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Solution1:
let removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.lenght;
};

//Remove duplicates ES6/ES5
// Solution 2:
let nums = [1,2,3,3]
var removeDuplicates = function(nums) {
  return nums.filter((e,p,a) => a.indexOf(e) == p)
};
removeDuplicates(nums);

// Solution 3:
var removeDuplicates = function(nums) {
  return nums.reduce((x,y) => x.includes(y) ? x : [...x,y], [])
};
removeDuplicates(nums);
