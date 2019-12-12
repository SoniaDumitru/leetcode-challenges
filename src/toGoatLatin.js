// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
//
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
//
// The rules of Goat Latin are as follows:
//
// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
//
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
//
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

let string = 'sonia are mere'
function toGoatLatin(string) {
  let result= [];
  let words = string.split(' ');
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // Set { 'a', 'e', 'i', 'o', 'u' }
  let i = 0;
  for (const word of words) {
    let temp = [];

    if (vowels.has(word[0].toLowerCase())) {
      temp.push(word)
    } else {
      temp.push(word.substring(1));
      // console.log("temp1:",temp);
      temp.push(word[0]);
      // console.log("temp2:",temp);

    }

    temp.push('ma');
    // console.log("temp3:",temp);
    temp.push('a'.repeat(i+1));
    // console.log("temp4:",temp);
    result.push(temp.join(''));
    // console.log("result", result);
    i++;
  }
  return result.join(' ');
}

// toGoatLatin(string) => result: oniasmaa aremaaa eremmaaaa
