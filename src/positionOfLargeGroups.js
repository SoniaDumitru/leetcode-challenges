// In a string S of lowercase letters, these letters form consecutive groups of the same character.
// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
// Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.
// The final answer should be in lexicographic order.

let string = "abbxxxxzzy";
function largeGroupPositions(string) {
    let i = 0;
    let j = 1;
    let count = 0;
    let res = [];

    if(string.length < 3) {
      return 'there are no large groups of letters';
    };

    while(j <= string.length){
        if(string[i] === string[j]){
            count++;
            j++;
         } else {
             if(count >= 2) res.push([i, j - 1])
             count = 0;
             if((j - i)  <= 1)  j++;
             i = j -1;
         }
    }
    return res;
};

largeGroupPositions(string) => result: [ [ 3, 6 ] ]
