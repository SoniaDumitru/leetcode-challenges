// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
// Return the number of cells with odd values in the matrix after applying the increment to all indices.

let n = 2, m = 3, indices = [[0,1],[1,1]];
var oddCells = function(n, m, indices) {
    let outer = [];
    let oddCount = 0;

    // init filled arrays
    for (let i = 0; i < n; i ++) {
        outer.push(new Array(m).fill(0))
    }

    // increment matrix
    indices.forEach((index) => {
        let row = index[0];
        let col = index[1];

        // increment col
        for (let j = 0; j < n; j++) {
            outer[j][col]++;
        }

        // increment row
        for (let i = 0; i < m; i++) {
            outer[row][i]++;
        }
    });

    return countOdds(outer);
};

var countOdds = function(array) {
    let oddCount = 0;
    array.forEach((inner) => {
       inner.forEach((num) => {
           if (num % 2 !== 0) {
               oddCount++;
           }
       })
    });
    return oddCount;
}

oddCells(n, m, indices)
