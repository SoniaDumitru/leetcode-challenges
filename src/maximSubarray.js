Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

const maxS = nums => {
    let max = nums[0];
    let current = Math.max(max, 0); 
    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current); 
        current = Math.max(current, 0); 
    }
    
    return max; 
};
maxS([1,2,3,9]);
