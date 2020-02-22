// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

const majorityElement = (nums) => {
  let map = new Map();

  for (let num of nums) {
    // if the number already exists, increment the counter in the map for it
    if (map.has(num)) {
      let count = map.get(num);
      map.set(num, count++);
    }
    // if the number does not exist, create a new entry in the map for it
    else {
      map.set(num, 1)
    }
    // iterate over map
    for (let [k, v] of map) {
      // check for the majority element
      if (v >= nums.length/2) {
        return k;
      }
    }
  }
  return -1;
}
