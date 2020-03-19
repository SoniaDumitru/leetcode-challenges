// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
// This is case sensitive, for example "Aa" is not considered a palindrome here.
// Note:
// Assume the length of given string will not exceed 1,010.
// Example:
// Input:
// "abccccdd"
// Output:
// 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    let odds = 0;
    for (let c in counts) {
        odds += counts[c] % 2;
    }
    return s.length - odds + !!odds;
};
