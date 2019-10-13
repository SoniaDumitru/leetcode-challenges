// Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.
// If it is impossible to form any triangle of non-zero area, return 0.

var largestPerimeter = function(A) {
    A.sort((a,b) => a-b)
    for(var i=A.length-1; i>=2; i--){
        if(A[i-2]+A[i-1]> A[i]){
            return A[i-2]+A[i-1]+A[i];
        }
    }
    return 0;
};
