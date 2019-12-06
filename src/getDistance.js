// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

let S = 'sonia'
let C = 'o'

//make a function that returns all distances in an array
var shortestToChar = function(S, C) {
    let results = [];

    for(let i = 0; i < S.length; i++) {
        results.push(getDistance(i, S, C));
    }

    return results;
};

//make a function that gets each distance one by one
var getDistance = function(i, S, C) {
    let index = 0;
    while (i + index < S.length || i - index > -1) {
        if (S[i + index] == C || S[i - index] == C) {
            return index;
        }

        index++;
    }

    return index;
}

// shortestToChar(S, C) => result: [ 1, 0, 1, 2, 3 ]
