// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

let i = 0;
let j = 2;
let nums = [1,2,3,-5]
function sum(i,j) {
  var sum = 0;
    while (i <= j) {
      sum += nums[i];
      i++;
    }
    return sum;
}
// sum(i, j) => result: 6
