// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let isValid = function (str) {
    const parens = { "{": "}", "[": "]", "(": ")" };
    const stack = [];
    for (let char of str) {
        if (Object.keys(parens).includes(char)) stack.push(char);
        else if (parens[stack.pop()] !== char) return false;
    }
    return stack.length > 0 ? false : true;
};
