// Given an integer n, return any array containing n unique integers such that they add up to 0.

let sumZero = function(n) {
  let num = Math.floor(n/2);
  let res = [];

  for(let i=1;i<=num;i++){
      res.push(i,-i);
     }
  if(n%2!==0){
    res.push(0);
  }
  return res;
}
// sumZero(4) => [ 1, -1, 2, -2 ]
