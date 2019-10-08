// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

var isPowerOfFour = function(num) {
    return (Math.log(num)/Math.log(4) % 1 === 0);
};
