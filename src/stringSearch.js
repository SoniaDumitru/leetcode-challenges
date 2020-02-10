// Find substring existing in given string and return the position.

const stringSearch = (haystack, needle) => {
  for (let i=0; i < haystack.length - needle.length; i++) {
    for (let j=0; j < needle.length; j++) {
      if (haystack[i+j] !== needle[j]) break
      if (j+1 === needle.length) return i
    }
  }
  return -1
}

// stringSearch('sonia', 'i') > 3
