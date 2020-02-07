// Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.
// The array that is returned should only contain unique values and its elements should be in alphabetical order.

const getPerm = (str) => {
  // base case if the length is 1
  if (str.length === 1) {
    // return the strring in an array
    return [str];
  }
  const results = [];
   let i = 0;
   // loop through the string and stat building all the permutations
   while (i < str.length) {
     // we're going to choose each individual characte and separate it from all other chars
     const letter = str[i];
     // get all the other chaacters, slice eveything before i and everything after and then put them together
     const otherLetters = str.slice(0,i) + str.slice(i + 1)
     // start buiding out permutations so we would call getPerm(otherLetters) and
     // for each of the subPerm we will concatenate our letter plus the subPerm and then push that into our results array
     getPerm(otherLetters).forEach(subPerm => results.push(letter + subPerm));
     // then we increment i only if it's the same character so we won't get any duplicates
     while(str[i] === letter) i++;
   }
   return results.sort();
}

function getPermsFaster(str) {
  // first sort the characters in the string
  const sortedStr = str
    .split('')
    .sort()
    .join('');
  // then find the ordered permutations of that sorted string
  return getPerm(sortedStr);
}

console.log(getPermsFaster('sonia'))
