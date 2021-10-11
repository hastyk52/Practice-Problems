/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const map = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const num = board[i][j];
            if (num === '.') continue;
            const box = 3 * Math.floor(i / 3) + Math.floor(j/3);
            if (!map[num]) map[num] = {};
            if (map[num][`r${i}`] || map[num][`c${j}`] || map[num][`b${box}`]) {
                return false;
            }
            map[num][`r${i}`] = true;
            map[num][`c${j}`] = true;
            map[num][`b${box}`] = true;
        }
    }
    return true;
};

// validate a given sudoku board

// I: game board matrix of integers and '.' for empty places
// O: boolean value for if the current board is valid
// C: board.length == 9
//    board[i].length == 9
//    board[i][j] is a digit 1-9 or '.'.
// E: 


// init map
// iterate the row
  // iterate each collumn
    // if .
      // skip
    // if map[num] dne
      // init as empty object
    // otherwise
      // if map[i][`r${i}`] || map[i][`c${j}`] || map[i][`b${3 * Math.floor(i / 3) + Math.floor(j/3)}`]
        // board invalid
      // record row to number map
      // record column to number map
      // record box to number map
// return true
    