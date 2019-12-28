We have an array A of integers, and an array queries of queries.
For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.
(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)
Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

let A = [1,2,3,4];
let queries = [[1,0],[-3,1],[-4,0],[2,3]]
var sumEvenAfterQueries = function(A, queries) {
    let res = [];
    let evenSum = 0;

    for (let el of A){
        if (el % 2 == 0) evenSum += el;
    }
    for (let i=0; i < A.length; i++) {
        let val = queries[i][0];
        let index = queries[i][1];
        let sum = val + A[index];

        if (sum % 2 == 0) {
            A[index] % 2 == 0 ? evenSum += val : evenSum += (val + A[index]);
        } else {
            A[index] % 2 == 0 ? evenSum -= A[index] : false;
        }
        A[index] += val;
        res[i] = evenSum;
    }
    return res;
};

sumEvenAfterQueries(A, queries)
