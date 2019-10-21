// Given a positive integer num, write a function which returns True if num is a perfect square else False.

let num = 9;
let isPerfectSquare = function(num) {
    let currentNum = 1;
    let squaredNum = currentNum * currentNum;

    while (squaredNum <= num) {
        if (squaredNum === num) {
          return true
        } else {
            currentNum++;
            squaredNum = currentNum * currentNum;
        }
    }
    return false;
};

// isPerfectSquare(num) => result: true
