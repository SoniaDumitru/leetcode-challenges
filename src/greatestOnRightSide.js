// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

let arr = [17,18,5,4,6,1]
function replaceElements() {
  let total = [-1];
  arr.reverse();

for(var i=0; i<arr.length;i++) {
  if(arr[i]>total[i]) {
    total.push(arr[i]);
  }
  else {
	  total.push(total[i]);
  }
  }
    total.pop();
    total.reverse();
    return total;
}

replaceElements(arr) => result: [ 18, 6, 6, 6, 1, -1 ]
