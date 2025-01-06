/**
 * @param {number} n - The size of the chessboard (n x n)
 * @return {number} - The number of distinct solutions to the n-queens puzzle
 */
var totalNQueens = function(n) {
    let count = 0; // To keep track of the number of solutions

    // Helper function to check if a queen can be safely placed
    const isSafe = (board, row, col) => {
        // Check for queens in the same column
        for (let i = 0; i < row; i++) {
            if (board[i] === col) return false;
        }

        // Check for queens on the diagonal
        for (let i = 0; i < row; i++) {
            if (Math.abs(board[i] - col) === row - i) return false;
        }

        return true; // Safe to place a queen here
    };

    // Recursive backtracking function to find all valid solutions
    const backtrack = (board, row) => {
        // Base case: if all rows are filled, we found a solution
        if (row === n) {
            count++;
            return;
        }

        // Try placing a queen in each column for the current row
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col; // Place the queen
                backtrack(board, row + 1); // Recurse to the next row
                board[row] = -1; // Backtrack and remove the queen
            }
        }
    };

    // Initialize the board with -1 (indicating no queens placed)
    const board = Array(n).fill(-1);

    // Start backtracking from the first row
    backtrack(board, 0);

    return count; // Return the total number of solutions
};

/*
Explanation:
1. The function uses recursion and backtracking to explore all possible placements of queens on an n x n chessboard.
2. The `isSafe` function checks if a queen can be safely placed in the current row and column without being attacked by other queens.
3. The `backtrack` function places queens row by row, trying all columns, and recursively moves to the next row.
4. When all rows are filled, a solution is found, and the count is incremented.
5. Backtracking ensures that all possibilities are explored without duplication.

Example:

Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle:
Solution 1: [1, 3, 0, 2]
Solution 2: [2, 0, 3, 1]

Time Complexity:
- The time complexity is O(n!), as there are n! possible placements to explore for n queens.

Space Complexity:
- The space complexity is O(n), due to the recursion stack and the board array used to store queen placements.
*/
