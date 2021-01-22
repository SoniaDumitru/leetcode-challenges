// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.
// Return that integer.

let findSpecialInteger = function(arr) {
    let map = {};
    
    for ( let i=0; i< arr.length; i++) {
        if (typeof map[arr[i]] === "undefined") {
            map[arr[i]] = 0; 
        }
        map[arr[i]]++;
    }
    
    for (let key in map) {
        if (map[key] > arr.length/4) {
            return key;
        }
    }
};