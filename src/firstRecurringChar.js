// Write a function that when given a string, will return the first recurring character in it, or null if there is no recurring character.
// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.
// You can assume all inputs will be non-empty strings of english characters.

let firstRecurringChar = (str) => {
  let dict = {}
  for (let i = 0; i < str.length; ++i) {
    // if character/key already exist in the dictionary return that character
    if (dict[str[i]]) {
      return str[i]
    // else add it to the dictionary object and keep iterating
    } else {
      dict[str[i]] = 1
    }
  }
  return null
}
// firstRecurringChar('soonnia') => result: 'o'
