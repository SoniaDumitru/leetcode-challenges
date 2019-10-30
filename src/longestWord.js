// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
   // can be built one character at a time by "w", "wo", "wor", and "worl".

let words = ["w","wo","wor","worl", "world"];
let longestWord = (words) => {
  //Set object lets you store unique values of any type, whether primitive values or object references
  let wordSet = new Set(words);
  // console.log(wordSet);
  let result = '';
  for (let w of words) {
    let isValid = true;
    let key = '';
    for (let i = 0; i < w.length - 1; i++) {
      key += w[i];
      console.log(key);
      if (!wordSet.has(key)) {
        isValid = false;
      }
    }
     if (isValid === true && w.length > result.length) {
        result = w;
      }
  }
  return result;
}
longestWord(words) => result :'world'
