// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let isValid = function (str) {
    // create parens object
    const parens = { 
        "{": "}", 
        "[": "]", 
        "(": ")" 
    };
    const stack = [];
    // for each character in string
    for (let char of str) {
        // check if it's included in object keys array ["{", "[", "("]
        if (Object.keys(parens).includes(char)) {
            // if included push char into stack => [ '[', '{' ]
            stack.push(char);
        } else if (parens[stack.pop()] !== char) {
            return false;
        }
    }
    return stack.length > 0 ? false : true;
};


console.log(isValid('[{}]')); // true
console.log(isValid('[{}{]')); // false