// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
// You can move according to the next rules:
// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.

let points = [[1,1],[3,4],[-1,0]];

function minTimeToVisitAllPoints(points) {
  let times = 0;
  for (let i = 1; i < points.length; i++) {
    const p_zero = points[i - 1];
    const p_one = points[i];
    times += Math.max(Math.abs(p_one[0] - p_zero[0]), Math.abs(p1[1] - p0[1]));
  }
  return times;
};

minTimeToVisitAllPoints(points);
