<<<<<<< HEAD
//
//    #
//   ##
//  ###
// ####
=======
>>>>>>> 0c13083fcb5896d64b37a860a3d55209189ddee0

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let space = n - 1 - i;
        let hash = i + 1;
        let stair = ' '.repeat(space) + '#'.repeat(hash);
        console.log(stair);
    }
}
