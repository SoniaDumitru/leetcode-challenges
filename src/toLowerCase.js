// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

let str = "SoNia";
let toLowerCase = function(str) {
  let lowerCase = '';
  for (let letter of str) {
    let index = letter.charCodeAt(0);
    if (index >= 65 && index <=90) {
      letter = String.fromCharCode(index+32);
      console.log(index);
    }
    lowerCase += letter;
  }
  return lowerCase;
}

toLowerCase(str);
