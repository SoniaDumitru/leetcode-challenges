// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';

  let prefix = '';

  for (let i = 0; i < strs[0].length; i += 1) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      prefix += strs[0][i];
    } else {
      break;
    }
  }

  return prefix;
};
