// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

let tribonacci = function(n) {
  if(n === 0)
      return 0;
  if( n === 1 || n === 2)
      return 1;
  return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
};
