/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
	const rows = board.length;
	const cols = board[0].length;

	if (rows === 0 || cols === 0) return;

	// Helper function for DFS
	const dfs = (i, j) => {
		// Base case: Out of bounds or not an 'O'.
		if (
			i < 0 ||
			i >= rows ||
			j < 0 ||
			j >= cols ||
			board[i][j] !== 'O'
		)
			return;

		// Mark the cell as temporary
		board[i][j] = 'T';

		// Explore the four directions
		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j + 1);
		dfs(i, j - 1);
	};

	// Mark all 'O's connected to the boundary as 'T'.
	for (let i = 0; i < rows; i++) {
		if (board[i][0] === 'O') dfs(i, 0); // Left boundary
		if (board[i][cols - 1] === 'O') dfs(i, cols - 1); // Right boundary
	}
	for (let j = 0; j < cols; j++) {
		if (board[0][j] === 'O') dfs(0, j); // Top boundary
		if (board[rows - 1][j] === 'O') dfs(rows - 1, j); // Bottom boundary
	}

	// Transform the board
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] === 'O') {
				board[i][j] = 'X'; // Captured
			} else if (board[i][j] === 'T') {
				board[i][j] = 'O'; // Restore non-surrounded regions
			}
		}
	}
};

/*
Explanation:

The problem requires us to identify regions of 'O' that are completely surrounded by 'X' and transform them into 'X'. Any 'O' connected to the boundary of the board cannot be surrounded, so those 'O's are preserved.

We use a two-step approach:
1. Mark boundary-connected 'O' cells with a temporary marker (e.g., 'T').
2. Traverse the board again to:
   - Convert all 'T' back to 'O' (non-surrounded).
   - Convert all remaining 'O' to 'X' (surrounded).

Key Concepts:
1. **Boundary-Connected Regions**:
   - Cells on the boundary and connected to the boundary via other 'O' cells cannot be surrounded.

2. **Depth-First Search (DFS)**:
   - DFS allows us to explore all connected components starting from a specific cell.

3. **In-Place Transformation**:
   - We modify the input board directly to minimize space usage.

Example:

Input: board = [["X","X","X","X"],
                ["X","O","O","X"],
                ["X","X","O","X"],
                ["X","O","X","X"]]

Step 1: Mark boundary-connected 'O' with 'T':
Board after marking:
[["X","X","X","X"],
 ["X","O","O","X"],
 ["X","X","O","X"],
 ["X","T","X","X"]]

Step 2: Transform the board:
1. Change remaining 'O' to 'X' (captured region).
2. Change 'T' back to 'O' (non-surrounded).

Output: [["X","X","X","X"],
         ["X","X","X","X"],
         ["X","X","X","X"],
         ["X","O","X","X"]]
*/
