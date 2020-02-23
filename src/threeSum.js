// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

let nums = [-1, 0, 1, 2, -1, -4]
	const threeSum = function(nums) {

     nums.sort((first,last) => first-last) // O(nlogn)

    let result = {}

    for(let i = nums.length-1; i>1; i--){ // loop over list from left to right -> assume this num is i
        let first = 0, last=i-1
        while(first<last){ // sum first from begin and last from end where last=i-1
            let sum = nums[first]+nums[last]+nums[i] // sum = first+last+i
            if(sum< 0) first++ // if the sum negative then it will never be smaller than nums[first] so increase first
            else if(sum > 0) last-- // if sum positive then it will never be larger than nums[last] so decrease last
            else {
				/*if the sum is 0 then appen it in object where key is string and value is the array of numbers*/
                result[`${nums[first]}${nums[last]}${nums[i]}`] = [nums[first], nums[last], nums[i]]
                first++
                last--
            }
        }
    }

    return Object.values(result) // return the values of the object
};

// threeSum(nums) => result: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
