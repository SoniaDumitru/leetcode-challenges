// Given a string, find the length of the longest substring without repeating characters.

let s = 'abcabcbb'
let lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let l = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(map.get(s[i]), j);
    }

    l = Math.max(l, i - j + 1);
    map.set(s[i], i + 1);
  }

  return l;
};
// lengthOfLongestSubstring(s)
