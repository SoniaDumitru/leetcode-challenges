// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

let s = "soonnniiaa";
var removeDuplicates = function(string) {
  let s = string.split('');
    for (let i=0; i < s.length; i++) {
      if (s[i] === s[i+1]) {
        s.splice(i, 2);
        i-= 2;
      }
    }
    return s.join('');
};

removeDuplicates(string) => result: 'sn'
