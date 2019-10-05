// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
};

// add most numbers, except itself. 10 ^ 10, for example, is 0. So in the context of this problem, every duplicate number will be "zeroed", and the single number will be n ^ 0, which is n
