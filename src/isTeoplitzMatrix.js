// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

let matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]

function isToeplitzMatrix(matrix) {
        for(let i=0; i<matrix.length-1; i++){
            for(let j=0; j<matrix[i].length-1; j++){
                if(matrix[i][j] != matrix[i+1][j+1]) return false;
            }
        }
        return true;
    }

isToeplitzMatrix(matrix) => result: true
