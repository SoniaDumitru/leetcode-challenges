// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
function checkStraightLine(coordinates) {

    if( coordinates.length < 2 ) return true;
    let slope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);
    for(let i = 2; i < coordinates.length; i++){

        let s = (coordinates[i][1] - coordinates[0][1])/(coordinates[i][0] - coordinates[0][0])
        // console.log(s, slope)
        if( s!== slope) return false;
    }
    return true;

};
checkStraightLine(coordinates) => result: true
