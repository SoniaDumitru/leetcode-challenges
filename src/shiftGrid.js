// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
//
// In one shift operation:
//
// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

function shiftGrid(grid, k) {
  let m = grid.length;
  let n = grid[0].lenght;
  let l = m*n;
  if ( k > l ) {
    k = k % l;
  }
  let flatGrid = [];
  let store = [];
  for (let item of grid) {
    flatGrid.push(...item)
  }
  for (let i=0; i < flatGrid.length; i++) {
    const item = flatGrid[i];
    store[i+k] = item;
  }
  let end = store.splice(-k);
  store.splice(0, k);
  let newStore = end.concat(store);
  let result = [];
  while (newStore.length > 0) {
    result.push(newStore.splice(0, n));
  }
  return result;
}
