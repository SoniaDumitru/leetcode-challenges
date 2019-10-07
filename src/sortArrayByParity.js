// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.



// Solution1:
let nums = [1,2,0,3]
// let sortArrayByParity = function(a) {
//   let par = [];
//   let impar = [];
//     for (let i=0; i<a.length; i++) {
//       if (a[i]%2 === 0) {
//         par.push(a[i]);
//       } else impar.push(a[i]);
//     }
//     return par.concat(impar)
// };
// sortArrayByParity(nums) => result:  2, 0, 1, 3 ]


// Solution2:
let sortArrayByParity = function(a) {
      return a.sort((a,b) => (a%2)-(b%2))
};

// sortArrayByParity(nums) => result:  2, 0, 1, 3 ]
