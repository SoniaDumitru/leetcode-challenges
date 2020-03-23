// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

const numberOfIslands = (grid) => {
  let countIslands = 0;

  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === '1') {
        countIslands++;
        teraForm(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return countIslands;
}

const teraForm =(rowIn, colIn, grid)=> {
  if(grid[rowIn] == undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;

  grid[rowIn][colIn] = '0';
  teraForm(rowIn+1, colIn, grid);
  teraForm(rowIn-1, colIn, grid);
  teraForm(rowIn+1, colIn+1, grid);
  teraForm(rowIn+1, colIn-1, grid);
}

console.log(numberOfIslands(grid))
