// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

var flipAndInvertImage = function(A) {
    let reversed = A.map((currArray, index) => {
       return currArray.reverse();
    })

    for (let i=0; i<reversed.length; i++) {
        for (let j=0; j<reversed[i].length; j++) {
            if (reversed[i][j] === 1) {
                reversed[i][j] = 0;
            } else {
                reversed[i][j] = 1;
            }
        }
    }

    return reversed
};
