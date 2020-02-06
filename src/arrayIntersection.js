// Given two sorted arrays of numbers, return an array containing all values that appear in both arrays. The numbers in the resulting array (the "intersection") may be returned in any order, they needn't be sorted.
// You can assume that each array has only unique values (no duplicates within the array).

// O(n*m) time complexity
arrA = [1,2]
arrB = [1,2,3]
function intersection(arrA, arrB) {
  const shared = [];
  arrA.forEach(elemA => {
    arrB.forEach(elemB => {
      if (elemA === elemB) {
        shared.push(elemA)
      }
    })
  })
  return shared;
}


//O(n+m) time complexity
function intersection(arrA, arrB) {
  const shared = [];
  let indexA = 0;
  let indexB = 0;
  while (indexA < arrA.length && indexB < arrB.length) {
    const elemA = arrA[indexA];
    const elemB = arrB[indexB];
    if (elemA === elemB) {
      shared.push(elemA)
    } if (elemA <= elemB) {
      indexA++;
    } if (elemA >= elemB) {
      indexB++;
    }
  }
  return shared;
}
