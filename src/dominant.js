// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.
//
// Input: nums = [3, 6, 1, 0]
// Output: 1

let nums = [3, 6, 1, 0];
function dominant(nums) {
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === maxIndex) {
            i++;
        }
        if (nums[i] * 2 > nums[maxIndex]) {
            return -1;
        }
    }
    return maxIndex;
};

// dominant(nums) => result: 1
