function reverseString(string) {
  let result = '';
  for (let i = string.length-1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(reverseString('ababsb'))

let string = 'Leon Noel';
function isPalindrome(string) {
  let reverseStr = reverseString(string).toLowerCase();
  console.log(reverseStr);
  if (reverseStr === string.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(isPalindrome(string));
