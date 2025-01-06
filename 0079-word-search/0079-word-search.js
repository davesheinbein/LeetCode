/**
 * @param {character[][]} board - The grid of characters
 * @param {string} word - The word to search for in the grid
 * @return {boolean} - True if the word exists in the grid, otherwise false
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    // Recursive helper function to perform the depth-first search (DFS)
    const dfs = (row, col, index) => {
        // Base case: if we've matched the entire word, return true
        if (index === word.length) {
            return true;
        }

        // Check for out-of-bounds indices or character mismatches
        if (
            row < 0 || 
            row >= rows || 
            col < 0 || 
            col >= cols || 
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Temporarily mark the cell as visited
        const temp = board[row][col];
        board[row][col] = '#';

        // Explore all four possible directions (up, down, left, right)
        const found =
            dfs(row - 1, col, index + 1) || // Up
            dfs(row + 1, col, index + 1) || // Down
            dfs(row, col - 1, index + 1) || // Left
            dfs(row, col + 1, index + 1);   // Right

        // Restore the original value of the cell
        board[row][col] = temp;

        return found;
    };

    // Iterate through the board to find the starting point of the word
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // If the first character matches, start DFS
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false; // Return false if the word cannot be found
};

/*
Explanation:
1. The `dfs` function recursively searches for the word starting from a given cell.
2. At each step, it checks if the current cell matches the corresponding character in the word.
3. If the word is completely matched, it returns true.
4. During the search, visited cells are marked temporarily to avoid reusing them in the current path.
5. After exploring all directions, the cell's original value is restored.

Example:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

For the given board and word "ABCCED", the function returns true as the word can be traced in the grid.

Time Complexity:
- The time complexity is O(m * n * 4^L), where:
  - `m` and `n` are the dimensions of the board.
  - `L` is the length of the word.
  - Each cell can be visited up to 4 directions for the length of the word.

Space Complexity:
- The space complexity is O(L) due to the recursion stack, where `L` is the length of the word.

*/
