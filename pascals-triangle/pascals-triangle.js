/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const pascals = [[1]];
    for (let i = 1; i < numRows; i++) {
        pascals[i] = [];
        pascals[i][0] = 1;
        pascals[i][i] = 1
        for (let j = 1; j < i; j++) {
            pascals[i][j] = pascals[i - 1][j - 1] + pascals[i - 1][j];
        }
    }

    return pascals;
};

// generate n rows of pascal's triangle

// I: numRows - integer value for the number of rows in pascals triangle
// O: matrix representing pascals triangle
// C: 1 <= numRows <= 30
// E:

