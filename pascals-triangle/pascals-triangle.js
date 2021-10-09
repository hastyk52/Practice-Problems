/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascals = [[1]];
    for (let i = 1; i < numRows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            row[j] = (pascals[i - 1][j - 1] || 0) + (pascals[i - 1][j] || 0);
        }
        pascals.push(row);    
    }

    return pascals;
};

// generate n rows of pascal's triangle

// I: numRows - integer value for the number of rows in pascals triangle
// O: matrix representing pascals triangle
// C: 1 <= numRows <= 30
// E: 

