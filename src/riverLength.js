// Given a two-dimensional array with only 0s and 1s.
// This array represents a map: 0s are land, and 1s are water.
// A "river" on this map consists of any number of contiguous,
// adjacent water squares, where "adjacent" means "above", "below", "to the left of", or "to the right of" (that is, diagonal squares are not adjacent).
// Write a function which returns an array of the sizes of all rivers represented in the input matrix.

Example:

const arr = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
];

riverLengths(arr); // returns [1, 1, 2, 2, 3]

// Function riverLengths, iterates the multidimensional arrays until it finds the starting point of a river.

const riverLengths = (arr) => {
  let results = [];
  arr.forEach((row, y) => {
    row.forEach((cell,x) => {
      if (arr[y][x] === 1) {
        results.push(checkNeighbors(x,y,arr))
      }
    })
  })
  return results;
}

// Inner function, checkNeighbors recursively follows the length of a river, determining its length and returning this number to its caller, whether riverLengths or checkNeighbors
