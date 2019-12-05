//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

function sumDigits(num) {
    let arr = num.toString().split("")
    return arr.length === 1 ? num : sumDigits(arr.reduce((a, b) => parseInt(a) + parseInt(b)))
};

sumDigits(33) => result: 6
