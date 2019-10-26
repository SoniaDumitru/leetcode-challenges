// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

let haystack = "hello";
let needle = "ll";
var strStr = function(haystack, needle) {
  if (!needle) return 0

  for (let i = 0 ; i < haystack.length ; i++) {
    if (haystack.slice(i, i+needle.length) === needle) return i
  }

  return -1
}

// strStr(haystack,needle) => result: 2
