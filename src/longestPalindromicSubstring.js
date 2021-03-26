// Given a string s, return the longest palindromic substring in s.

const isPalindrome = (s) => {
    return s === s.split('').reverse().join(''); 
}

const longestPalindrome = (s) => {
    for (let j = s.length-1; j >= 0; j--) {
    let i = 0;
    let k = j;
        while (k < s.length) {
            let substr = s.substring(i, k+1);
              if (isPalindrome(substr)) {
                return substr;
              }
            i++;
            k++; 
        }
    }
    return "";
};