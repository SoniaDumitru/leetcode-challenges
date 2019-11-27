// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

let string = "RLRRLLRLRL"
function balanced(s) {
    let balance = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            balance -= 1;
        } else {
            balance += 1;
        }
        if (balance === 0) {
            count++;
        }
    }
    return count;
};

// balanced(string) => result: 4
