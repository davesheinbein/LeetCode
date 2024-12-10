/**
 * Definition for a binary tree node.
 * Constructs a binary tree node with a value and optional left/right children.
 * @param {number} val - The value of the node.
 * @param {TreeNode|null} left - The left child of the node (default: null).
 * @param {TreeNode|null} right - The right child of the node (default: null).
 */
function TreeNode(val, left, right) {
	// Initialize the node value; if not provided, default it to 0.
	this.val = val === undefined ? 0 : val;

	// Initialize the left child; if not provided, default it to null.
	this.left = left === undefined ? null : left;

	// Initialize the right child; if not provided, default it to null.
	this.right = right === undefined ? null : right;
}

/**
 * Performs a zigzag level order traversal of a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number[][]} - A 2D array representing the zigzag level order traversal.
 */
var zigzagLevelOrder = function (root) {
	// Base case: If the tree is empty, return an empty array.
	if (!root) return [];

	const result = []; // This will hold the zigzag level order traversal.
	const queue = [root]; // Queue initialized with the root for BFS traversal.
	let isReverse = false; // A flag to determine the direction of traversal at each level.

	// Continue BFS traversal until there are no nodes left in the queue.
	while (queue.length > 0) {
		const levelSize = queue.length; // The number of nodes in the current level.
		const currentLevel = []; // Temporary storage for values at the current level.

		// Process all nodes in the current level.
		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift(); // Dequeue the front node from the queue.
			currentLevel.push(node.val); // Add the node's value to the current level's list.

			// If the node has a left child, enqueue it for processing in the next level.
			if (node.left) queue.push(node.left);

			// If the node has a right child, enqueue it for processing in the next level.
			if (node.right) queue.push(node.right);
		}

		// If `isReverse` is true, reverse the order of values in the current level.
		if (isReverse) {
			currentLevel.reverse();
		}

		// Add the processed current level to the result array.
		result.push(currentLevel);

		// Toggle the `isReverse` flag for the next level.
		isReverse = !isReverse;
	}

	// Return the final zigzag level order traversal result.
	return result;
};

/**
  Explanation:
 
  1. Use a queue for Breadth-First Search (BFS), starting with the root node.
  2. For each level:
     - Process all nodes in the queue (current level).
     - Collect their values in a `currentLevel` list.
     - Enqueue their left and right children for the next level.
  3. Reverse the `currentLevel` list if `isReverse` is true to implement zigzag traversal.
  4. Add `currentLevel` to the result and toggle `isReverse` for the next level.
  5. Continue until the queue is empty.
  6. Return the result, a 2D array with zigzag level order traversal.
 
  Key Points:
  - `queue`: Stores nodes for BFS, ensuring nodes are processed level by level.
  - `isReverse`: A boolean flag that toggles between normal and reverse order for each level.
  - `currentLevel.reverse()`: Applies the zigzag pattern by reversing the level's values when needed.
  - Each node is visited exactly once, ensuring efficient traversal.
 
  Complexity:
  - Time: \(O(n)\), where \(n\) is the number of nodes in the tree (each node is processed once).
  - Space: \(O(n)\), for storing nodes in the queue and results.
 
  Example:
 
  Input Tree:
        3
       / \
      9  20
         /  \
        15   7
 
  Execution Steps:
  1. Start with the root `[3]`. Result: `[[3]]`. Queue for next level: `[9, 20]`.
  2. Process next level `[9, 20]`. Reverse to `[20, 9]`. Result: `[[3], [20, 9]]`. Queue: `[15, 7]`.
  3. Process final level `[15, 7]`. No reversal needed. Result: `[[3], [20, 9], [15, 7]]`. Queue: `[]`.
 
  Final Output:
  `[[3], [20, 9], [15, 7]]`
 */
