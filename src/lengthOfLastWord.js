// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.
// Note: A word is defined as a character sequence consists of non-space characters only.

function lengthOfLastWord(s) {
  //remove white spaces, make it and array, reverse it that the last word becomes the first
    s = s.trim().split('')
    let i = 0;
    while(i < s.length && s[i] != ' '){
          i++;
    }
    return i;
};
// lengthOfLastWord('Today is a nice day') => result: 3
