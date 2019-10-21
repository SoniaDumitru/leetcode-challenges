// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
// Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

let num = 28;
let checkPerfectNumber = function(num) {
let divisors = [];
let sum = 0;
if (num === 0) return false;
for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        divisors.push(i);
    }
}
for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
}
return sum === num;
};

// checkPerfectNumber(num) => result: true
