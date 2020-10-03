// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const letterCombinations = (digits) => {
    const output = [];
    if(digits.length){
        const numberChars = {
            "2": ["a","b","c"],
            "3": ["d","e","f"],
            "4": ["g","h","i"],
            "5": ["j","k","l"],
            "6": ["m","n","o"],
            "7": ["p","q","r","s"],
            "8": ["t","u","v"],
            "9": ["w","x","y","z"]
        };
        solveDigits(output, numberChars, digits);
    }
    return output;
};
const solveDigits = (output, numberChars, digits, selection="") => {
    if(!digits.length){
        output.push(selection);
        return;
    }
    let characters = numberChars[digits[0]];
    for(let i=0; i<characters.length; i++){
        let newSelection = selection + characters[i];
        solveDigits(output, numberChars, digits.slice(1), newSelection);
    }
    
};
console.log(letterCombinations('22')); 
// => 
//     [
//     'aa', 'ab', 'ac',
//     'ba', 'bb', 'bc',
//     'ca', 'cb', 'cc'
//     ]