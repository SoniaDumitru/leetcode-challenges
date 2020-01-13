// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.
// Notice that you can not jump outside of the array at any time.

let arr = [4,2,3,0,3,1,2];
let start = 5;
function canReach(arr, start) {
  const val = arr[start];
  if (val === 0) return true;
  if (val === -1) return false;
  // changing the value in arr to -1 which is outside of [0, arr.length] to discard the visited set
  arr[start] = -1;
  return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};

canReach(arr, start);
