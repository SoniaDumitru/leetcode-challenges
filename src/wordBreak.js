// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

let word = "leetcode";
let wordDictionary = ["leet", "code"];
function wordBreak(word, wordDictionary) {

  // iterating over and over each element to see if the word exists
  // for ex does "l" exist in the dictionary? does "le" exist? etc
  // therefore we will use recursion

  // where do we stop of
  return verifyBreak(word, wordDictionary, 0, []);
}
console.log(wordBreak(word, wordDictionary));

// Solution 1:
function verifyBreak(word, dic, start) {
  if (start === word.length) {
    return true;
  }
  for (let end = start+1; end <= word.length; end++) {
    let wildGuess = word.substring(start, end);
    // if dic contains the wildGuess && the remaining pieces is still a valid word
    if (dic.includes(wildGuess) && verifyBreak(word, dic, end)) {
        return true;
    }
  }
  return false;
}
// Solution 2: How to use Memoization to improve recursion (time complexity) - (we dont have to repeat steps that we do in the past)
function verifyBreak(word, dic, start, memo) {
  if (start === word.length) {
    return true;
  }
  if (memo[start] !== undefined) {
    return memo[start];
  }
  for (let end = start+1; end <= word.length; end++) {
    let wildGuess = word.substring(start, end);
    if (dic.includes(wildGuess) && verifyBreak(word, dic, end, memo)) {
        return memo[start] = true;
    }
  }
  return[start] = false;
}
