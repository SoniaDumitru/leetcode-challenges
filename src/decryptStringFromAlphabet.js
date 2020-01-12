// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.
// It's guaranteed that a unique mapping will always exist.

const freqAlphabets = s => {
  const stack = [];
  for (const char of s) {
    if (char !== '#') { stack.push(char); continue; }
    const digit = stack.pop();
    stack.push(map[(stack.pop() + digit)]);
  }
  let ret = '';
  for (const char of stack) {
    ret += char <= '9' ? map[char] : char;
  }
  return ret;
};
