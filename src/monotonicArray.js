// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.

var isMonotonic = function(A) {
    let increasing = true;
    let decreasing = true;
    let i=0;

    while (i<A.length) {
        if (A[i] > A[i+1]) increasing = false;
        if (A[i] < A[i+1]) decreasing = false;
        i++;
    }
    return increasing || decreasing
};
