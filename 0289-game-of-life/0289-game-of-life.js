/**
 * @param {number[][]} board - The board representing the current state of the game.
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;  // Get the number of rows in the board.
    const n = board[0].length;  // Get the number of columns in the board.

    // Directions to check for all 8 neighbors: top-left, top, top-right, left, right, bottom-left, bottom, bottom-right
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
    ];

    // Count the live neighbors and encode the next state in place
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveNeighbors = 0;

            // Count live neighbors by checking all 8 surrounding cells
            for (let [dx, dy] of directions) {
                const x = i + dx;  // x-coordinate of the neighbor
                const y = j + dy;  // y-coordinate of the neighbor

                // Check if the neighbor is within bounds and is alive (1) or will stay alive (3)
                if (x >= 0 && x < m && y >= 0 && y < n && (board[x][y] === 1 || board[x][y] === 3)) {
                    liveNeighbors++;
                }
            }

            // Apply the rules to determine the next state of the cell
            if (board[i][j] === 1) {  // If the current cell is alive
                // Rule 1: Live cell with fewer than 2 or more than 3 live neighbors dies
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 3;  // Mark the cell as dead in the next state
                }
                // Rule 2: Live cell with 2 or 3 live neighbors stays alive
                else {
                    board[i][j] = 1;  // Keep the cell alive
                }
            } else if (board[i][j] === 0 && liveNeighbors === 3) {  
                // Rule 3: Dead cell with exactly 3 live neighbors becomes alive
                board[i][j] = 2;  // Mark the cell as alive in the next state
            }
            // Rule 4:Any dead cell with exactly three live neighbors becomes a live cell.  (Implicit in the logic) 
        }
    }

    // Finalize the board by converting the encoded states back to the final state
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Convert the encoded states back to 0 (dead) or 1 (alive)
            if (board[i][j] === 2 || board[i][j] === 1) {
                board[i][j] = 1;  // Cells that are alive in the next state should be 1
            } else {
                board[i][j] = 0;  // Cells that are dead should be 0
            }
        }
    }
};

/*
Explanation:
- The function `gameOfLife` simulates the next state of the Game of Life grid in place, modifying the `board` directly.
- The grid has cells that can either be alive (1) or dead (0), and based on the state of the cell and its neighbors, the next state is determined.
- The key steps are:
  1. Counting live neighbors for each cell using the 8 possible neighboring directions.
  2. Encoding the next state of the cell:
     - '1' represents a live cell.
     - '0' represents a dead cell.
     - '2' represents a dead cell that will become alive in the next step.
     - '3' represents a live cell that will die in the next step.
  3. Finalizing the grid by converting the encoded values back to the final state: cells that remain alive (1 or 2) are set to 1, and cells that remain dead (0 or 3) are set to 0.
*/
