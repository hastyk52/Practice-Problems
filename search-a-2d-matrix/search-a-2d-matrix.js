/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0;
    let j =  matrix[0].length - 1;
    console.log(`i: ${i}, length: ${matrix.length}`);
    while (i < matrix.length && j >= 0) {
        console.log('searching');
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};


// seaarch a sorted 2d matrix
// I: 2d amtrix and a target
// O: boolean if matrix contains number
// C: m == matrix.length
//    n == matrix[i].length
//    1 <= m, n <= 100
//    -104 <= matrix[i][j], target <= 104
// E: target greater than matrix[m][n]


// init i to first row
// init j as last collumn
// if last num < target return false
// while i !== length and j !== 0
  // if num equals target
    // return true
  // else if num > target
    // derement j
  // else 
    // increment i