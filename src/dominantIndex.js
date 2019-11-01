// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.

let nums = [3, 6, 1, 0];
function dominantIndex(nums) {
    if(nums.length===1) return 0;
    // sort nums array descending
    let arr = nums.slice().sort((x,y)=>y-x)
    console.log(arr);
    if (arr[0] >= arr[1]*2) {
      return nums.indexOf(arr[0]);
    } return -1;
};

// dominantIndex(nums) => result: 1;
