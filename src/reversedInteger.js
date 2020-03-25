// Given a 32-bit signed integer, reverse digits of an integer.
// Ex: -123 Output: -321

// Solution 1:
const reverse = function(x) {
 let reversed =  parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
 return reversed < (2**31-1) ? reversed : 0;
};

// Solution 2:
const reverseInteger =(x)=> {
  if (x < 0) return -1 * reverse(-x);
  const solution = (x+'').split('').reverse().join('');
  return (solution > 2**31-1) ? 0 : solution;
}

console.log(reverseTwo(100))
