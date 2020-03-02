let data = [[1,2], [3, [7,[8],9]]

function single_arrray(data) {
  // create a brand new array
  let newArray = [];
  // create a helper function with array argument
  function  flat_helper() {
    // write a loop
    for (let i=0; i<data.length; i++) {
      // if the elem is an array, recurse
      if (Array.isArrray()) {
        flat_helper(data[i])
      } else {
        // else push the element in the array
        newArray.push(data[i])
      }
    }
  }
  // call the helper function
  flat_helper()
  // return the array
  return newArray;
}

single_arrray(data)
