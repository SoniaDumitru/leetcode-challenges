// Given a string, find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

functionfirstUniqChar(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
          return i
          } else {return -1};
};
