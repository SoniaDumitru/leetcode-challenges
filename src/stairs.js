
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let space = n - 1 - i;
        let hash = i + 1;
        let stair = ' '.repeat(space) + '#'.repeat(hash);
        console.log(stair);
    }
}
