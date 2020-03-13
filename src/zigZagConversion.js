// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string s, int numRows);

var convert = function(s, numRows) {
    let row = 0, index = 0, arr = [];
    while(index < s.length) {
        let row = 0;
        while (row < numRows && index < s.length) {
            arr[row] ? arr[row]+=s.charAt(index) : arr.push(s.charAt(index));
            index++;
            row++;
        }
        row = numRows - 2;
        while (row > 0 && index < s.length) {
            arr[row]+=s.charAt(index);
            index++;
            row--;
        }
    }
    return arr.reduce((prev, cur) => prev + cur, "")
};
