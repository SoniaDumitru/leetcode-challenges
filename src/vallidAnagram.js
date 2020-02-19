// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

const isAnagram = function(s, t) {
    if (s.length === t.length === 0) return true;
    let sArr = s.split("")
    let tArr = t.split("")
    if (sArr.sort().join("") === tArr.sort().join(""))
        return true;
    else
        return false;
};
