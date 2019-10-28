// Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
// Substrings that occur multiple times are counted the number of times they occur.

let s = "00110011";
function countBinarySubstrings(s) {
    let count = 1;
    let sum = 0;
    let prevCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            count += 1;
        }
        else{
            if(prevCount){
              // if sum plus preCount is less than count we return prevCount else we return count
                sum += prevCount <= count ? prevCount : count;
            }
            prevCount = count;
            count = 1;
        }
    }
    return sum;
};
// countBinarySubstrings(s) => result: 6
