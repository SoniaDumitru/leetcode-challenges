// Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)
// Return the largest possible sum of the array after modifying it in this way.

let array = [4,2,3]
var largestSumAfterKNegations = function(array, K) {
    array = array.sort((a, b) => a - b);
    let i = 0;

    while (K > 0) {
        if (array[i] === 0) return;
        array[i] = -array[i];
        if (array[i] > array[i + 1]) i++;
        K--;
    }
    return array.reduce((a, b) => a + b);
};

 // largestSumAfterKNegations(array,1) => result: 5
