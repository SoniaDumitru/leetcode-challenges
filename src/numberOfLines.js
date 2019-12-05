// We are to write the letters of a given string S, from left to right into lines. Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line. We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.
// Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line? Return your answer as an integer list of length 2.

let widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let string = "abcdefghijklmnopqrstuvwxyz"
var numberOfLines = function(widths, string) {
    let lines = 0;
    let i = 0;
    let t = 0;
    while (i < string.length) {
        let char = string[i];
        let n = widths[char.charCodeAt(0) - 97];
        if (t + n > 100) {
            lines++;
            t = n;
        } else {
            t += n;
        }
        i++;
    }
    lines++;
    return [lines, t];
};

// numberOfLines(widths,string) => result: [3,60]
