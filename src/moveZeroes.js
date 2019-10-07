// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let nums = [1,2,0, 3]
var moveZeroes = function(nums) {
    let count = 0;
    let len = nums.length;
    for(let i=0; i<len; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            i -= 1;
            count += 1;
        }
    }
    while(count > 0) {
        nums.push(0);
        count -=1;
    }
    return nums;
};

// moveZeroes(nums) => result: [ 1, 2, 3, 0 ]
