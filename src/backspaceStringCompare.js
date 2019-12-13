// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

let S = "a#1";
let T = "a##1";

function backSpaceCompare(S, T) {
  return (reducedString(S) === reducedString(T));
}

function reducedString(string) {
  let stack = [];

  for (let i=0; i < string.length; i++) {
    if (string[i] !== '#') stack.push(string[i]);
    else stack.pop();
  }
  return stack.join('')
}
