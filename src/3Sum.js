// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

let nums = [-1, 0, 1, 2, -1, -4];

const threeSum = function(nums) {
  let solution = [];
  let left = 0;
  let right = nums.length-1;

  if (nums.length < 3) return solution;
    nums.sort((a,b) => {return a-b}); // [-4, -1, -1, 0, 1, 2]

  for (let [index, number] of nums.entries()) {
    if (number > 0) return solution;
    if (number === nums[index - 1]) continue;
    // number = -4;
    left = index + 1; // -1
    right = nums.length - 1; // 2

    let temp = 0;

    while (left < right) {
      temp = number + nums[left] + nums[right];

      if (temp === 0) {
        solution.push([number, nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] == nums[left-1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right-1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0){
        left++;
      }
    }
  }
}

// Pseudocode:
// what is we have an array that is less than size 3 ? return the solution
// first check as we iterate if we have 0
// next we are looking for a unique set, if two elements are the same we skip
// defining my left and right
// while left is less that right = making sure the elements will never cross each other
// calculate the math (temp), if temp === 0 we save this particular set into the solution
// once the set is stored increase left and decrease right
// while left < right and nums[left] == nums[right-1] (if there are duplicates) we move the index along where they are not equal
// check if temp > 0, then right is moving closer to 0
// check if temp < 0, then left is moving closer to end
