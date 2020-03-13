//Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
//Input: S = "loveleetcode", C = 'e'
//Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

const shortestToChar = function(S, C) {
    let result = [], index = [];
    for(let i = 0; i < S.length; i++) {
        if(S[i] === C)
            index.push(i);
    }
    for(let i = 0; i < S.length; i++) {
        if(S[i] === C){
            result.push(0);
        } else{
            let min = S.length;
            for(let j = 0; j < index.length; j++) {
                min = Math.min(min, Math.abs(i - index[j]));
            }
            result.push(min);
        }
    }
    return result;
};
