// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

let string = 's-o09-a'
function reverseOnlyLetters(string) {
  let reverse = string.replace(/[^a-zA-Z]/g, "").split('').reverse();
  // console.log(reverse)

  for(let i=0; i<string.length; i++) {
       if(!(string[i].toLowerCase() <= "z" && string[i].toLowerCase() >= "a")) {
        reverse.splice(i, 0, string[i]);
        console.log(reverse)
      }
    }
  return reverse.join('')
};

// reverseOnlyLetters(string)
