// Students are asked to stand in non-decreasing order of heights for an annual photo.
// Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

let heights = [1,1,4,2,1,3];
var heightChecker = function(heights) {
  let students = heights.slice().sort((a,b) => a-b);
  console.log(students);
  console.log(heights);
  let count = 0;
    for (let i = 0; i < students.length; i++) {
      // compare each letter with each element in array
      if (heights[i] != students[i]) {
        // when array was sorted x moves where needed, which will be the count we are looking for
        count++;
      }
    }
    return count;
};

// heightChecker(heights) => result:3
