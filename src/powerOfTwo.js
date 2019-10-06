// Given an integer, write a function to determine if it is a power of two.
// The JavaScript Math.log() function is equivalent to ln(x) in mathematics.
// Exemple: Math.log(4)/Math.log(2) => result: 2

let isPowerOfTwo = function(n) {
    return (Math.log(n)/Math.log(2)) % 1 === 0;
}
