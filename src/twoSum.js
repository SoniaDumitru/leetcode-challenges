// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let nums = [2, 7, 11, 15];
const twoSum = (nums, target) => {
    // create a dictionary that stores the target - nums[i] as keys and the index as values
    let storage = {};

    for (let [index, num] of nums.entries()) {
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
}

// twoSum(nums, 9) => result: [0,1]
