// Given an encoded string, return its decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
//
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
//
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Pseudocode:
// k = how many times we repeat stuff
// [ = now I need to start storing what I need to repeat
// ] = better start repeating

const decodeString = (s) => {
  // as I iterate I will store the info
  let multiply = [];
  let tempMultiplier = '';
  let repeatString = [];
  let solution = '';

  // s = "31[a2[c]]"
  for (let char of s) {
    if (!isNaN(char)) {
      tempMultiplier = `${tempMultiplier}${char}` // [31, 2]
    } else if (char === "[") { // now we need to start storing what are we gonna repeat
      multiply.push(tempMultiplier); // 31
      tempMultiplier = ''; // restore it

      repeatString.push(solution); // ['', a]
      solution = '';
    } else if (char === "]") {

      solution = repeatString.pop() + solution.repeat(multiply.pop()) // acc
    } else { // constructing the substring
      solution += char; // 'c'
    }
  }
  return solution;
}
