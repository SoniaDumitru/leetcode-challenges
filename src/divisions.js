// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

let left = 22;
let right = 24;
var selfDividingNumbers = function(left, right) {
    let count=0;
    let array=[];
    for(let i = left; i <= right; i++){

        i.toString().split('').forEach(x=>{
            if(i%x != 0) count++;
        })
        if(count === 0) array.push(i);
        count = 0;
    }
    return array;
};

selfDividingNumbers(left, right)
