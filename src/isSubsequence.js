// Given a string s and a string t, check if s is subsequence of t.
// You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not)

let isSubsequence = function(s, t) {
    if (s.length === 0) return true;
	let count = 0;
    for (let i = 0 ; i < t.length ; i++) {
        if (t[i] === s[count]) count++;
        if (count === s.length) return true;
    }
    return false;
};
