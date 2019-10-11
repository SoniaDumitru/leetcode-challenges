Given a 32-bit signed integer, reverse digits of an integer.
Ex: -123 Output: -321

const reverse = function(x) {
 let reversed =  parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
 return reversed < (2**31-1) ? reversed : 0;
};
