// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:

// 1 6 3 9
// 0 0 6 8
// 1 8 9 7

function diagonalDifference(arr) {
    let principalDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        // first add up the sum for the first diagonal( where first diagonal means i and j are always gonna be equal)
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                principalDiagonal += arr[i][j];
            }
            // second add up the elements of the second diagonal, where "i+j=n-1" ALWAYS!
            if (i + j === arr.length - 1) {
                secondaryDiagonal += arr[i][j];
            }
        }
    }
    // third built a function that return the absolute value of an integer
        return Math.abs(principalDiagonal - secondaryDiagonal);
}
