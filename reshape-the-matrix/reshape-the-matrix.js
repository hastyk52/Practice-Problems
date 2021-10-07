/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    
    newR = 0;
    newC = 0;
    reshapedMat = []
    
    for (let i = 0; i <  r; i++) {
        reshapedMat.push([]);
        for (let j = 0; j < c; j++) {
            reshapedMat[i][j] = mat[newR][newC++];
            if (newC === mat[0].length) {
                newR++;
                newC = 0;
            }
        }
    }
    return reshapedMat
};

// reshapes a matrix from m x n to r x c reshaped matrix is filled with all elements of original matrix in the same row traversal
// if the reshape is not possible output the original matrix

// I: m x n matrix
//    r and c integers representing the rows and colums of the reshape
// O: if the tranformation is possible return the reshaped matrix
      // otherwise return the original matrix
// E: transform dimesions dont work
//    r = 1

// mat = [
//     [a, b],
//     [c, d],
// ]

// if m x n doesnt equal r x c 
  // return original matrix
// track current col position and row position for new matrix
// init reshaped matrix

// iterate rows of reshaped
  // push empty array
  // iterate columns of reshaped
    // reshaped i j is equalt to mat at curr position
    // increase current collumn
    // if current collumn equals m
      // increase current row
      // reset current collunm