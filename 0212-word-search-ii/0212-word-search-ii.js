/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	// Create a Trie to store the words
	const trie = {};
	for (const word of words) {
		let node = trie;
		for (const char of word) {
			if (!node[char]) {
				node[char] = {};
			}
			node = node[char];
		}
		node.isWord = true; // Mark the end of a word
	}

	const result = new Set(); // Set to store the found words
	const m = board.length;
	const n = board[0].length;

	// Helper function for backtracking
	const backtrack = (row, col, node, currentWord) => {
		// If the current position is out of bounds or the current letter doesn't exist in the Trie, return
		if (
			row < 0 ||
			row >= m ||
			col < 0 ||
			col >= n ||
			!node[board[row][col]]
		) {
			return;
		}

		const letter = board[row][col];
		node = node[letter]; // Move to the next Trie node for the current letter
		currentWord += letter;

		// If the current node is marked as a word, add it to the result set
		if (node.isWord) {
			result.add(currentWord);
		}

		// Temporarily mark the current cell as visited
		board[row][col] = '#';

		// Explore all 4 possible directions (up, down, left, right)
		const directions = [
			[1, 0], // down
			[-1, 0], // up
			[0, 1], // right
			[0, -1], // left
		];

		for (const [dx, dy] of directions) {
			const newRow = row + dx;
			const newCol = col + dy;
			backtrack(newRow, newCol, node, currentWord);
		}

		// Restore the cell after exploration
		board[row][col] = letter;
	};

	// Iterate over the board and start backtracking from each cell
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			backtrack(i, j, trie, '');
		}
	}

	// Convert the result set to an array and return
	return [...result];
};

/*
Explanation:

1. Trie Construction:
   - We create a Trie to efficiently check for prefixes of words. Each character in a word will be a node, and at the end of a word, we mark the node with `isWord = true`.

2. Backtracking:
   - We start at each position on the board, and for each character, we try to build words by recursively exploring all four directions (up, down, left, right).
   - We keep track of the current word being formed (`currentWord`) and check whether it's a valid word by querying the Trie.

3. Marking Cells:
   - We mark cells as visited by temporarily changing their value to `#` to avoid revisiting them in the same word formation.
   - After exploration, we restore the original character to continue searching for other potential words.

4. Optimization:
   - We use a `Set` to store words, ensuring there are no duplicates in the result.

5. Termination:
   - If a prefix is not found in the Trie, we prune the search early and avoid exploring that path.

Example:

Example 1:
Input:
board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
words = ["oath","pea","eat","rain"];
Output: [];

Time and Space Complexity:
- Time Complexity: \(O(m \times n \times 4^k)\), where \(m\) and \(n\) are the dimensions of the board, and \(k\) is the average length of the words. This accounts for the recursive exploration of the board (backtracking) and checking possible words at each step.
  
- Space Complexity: \(O(w \times k)\), where \(w\) is the number of words and \(k\) is the maximum length of the words, which is the space required to store the Trie. The board also requires additional space for recursion calls, but the most significant space usage comes from the Trie.
*/
