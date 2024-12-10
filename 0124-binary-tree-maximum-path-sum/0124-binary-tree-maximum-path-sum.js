/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     // Initialize the value of the node. If no value is provided, default to 0.
 *     this.val = (val === undefined ? 0 : val);
 *     // Initialize the left child of the node. Default to null if not provided.
 *     this.left = (left === undefined ? null : left);
 *     // Initialize the right child of the node. Default to null if not provided.
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Main function to find the maximum path sum in a binary tree.
 * A path is any sequence of nodes from some starting node to any node in the tree
 * along the parent-child connections. The path must contain at least one node.
 *
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number} - The maximum path sum in the tree.
 */
var maxPathSum = function (root) {
	// `globalMax` is a variable to store the maximum path sum encountered so far.
	// It starts at -Infinity to handle edge cases where all node values are negative.
	let globalMax = -Infinity;

	/**
	 * Helper function to calculate the maximum "gain" a node can provide to its parent.
	 * The gain is the maximum sum of a path that starts at this node and goes
	 * to any of its descendants (left or right).
	 *
	 * @param {TreeNode} node - The current node being processed.
	 * @return {number} - The maximum gain this node can provide to its parent.
	 */
	const maxGain = (node) => {
		// Base case: If the node is null, it cannot contribute to the path sum.
		// Return 0 as the contribution from an absent node.
		if (node === null) return 0;

		// Recursively calculate the maximum gain from the left subtree.
		// If the left gain is negative, it's better to ignore it (use 0 instead).
		const leftGain = Math.max(maxGain(node.left), 0);

		// Similarly, calculate the maximum gain from the right subtree.
		// Ignore it if the gain is negative.
		const rightGain = Math.max(maxGain(node.right), 0);

		// The "currentPathSum" represents the maximum path sum that passes through
		// the current node and includes both its left and right children.
		const currentPathSum = node.val + leftGain + rightGain;

		// Update `globalMax` if the current path sum is greater than the global maximum so far.
		globalMax = Math.max(globalMax, currentPathSum);

		// The value returned by `maxGain` represents the maximum contribution
		// the current node can make to its parent node.
		// It includes the node's value and the larger of the gains from its two children.
		return node.val + Math.max(leftGain, rightGain);
	};

	// Start the recursive traversal of the tree from the root node.
	maxGain(root);

	// After the recursion completes, `globalMax` contains the overall maximum path sum.
	return globalMax;
};

/*
Explanation:

Key Concepts:
1. Global Variable:
   - `globalMax` is used to store the highest path sum encountered during the recursion.
   - This ensures we can track and update the result across all recursive calls.

2. Recursive Helper Function:
   - The `maxGain` function calculates the maximum sum a node can contribute to its parent.
   - It recursively computes the gains from the left and right children.
   - If a subtree's gain is negative, it's excluded from the path (max(0, gain)).

3. Updating the Global Maximum:
   - At each node, calculate the total path sum (`currentPathSum`) passing through the node.
   - This includes the node's value and both its left and right gains.
   - Update the `globalMax` to ensure it reflects the largest path sum encountered so far.

4. Return Value of maxGain:
   - The function returns the maximum sum a node can provide to its parent.
   - This sum includes the node's value and the greater of its left or right gain.

Complexity Analysis:
- Time Complexity: \(O(n)\), where \(n\) is the number of nodes in the tree.
  - Each node is visited exactly once during the recursion.
- Space Complexity: \(O(h)\), where \(h\) is the height of the tree.
  - This accounts for the space used by the recursion stack.
  - For a balanced tree, \(h = \log n\); for a skewed tree, \(h = n\).

Examples:

Example 1:
Input: `root = [1, 2, 3]`

- At node 2:
  - `leftGain = 0`, `rightGain = 0`, `currentPathSum = 2`.
  - Return `2` to its parent (node 1).
- At node 3:
  - `leftGain = 0`, `rightGain = 0`, `currentPathSum = 3`.
  - Return `3` to its parent (node 1).
- At node 1:
  - `leftGain = 2`, `rightGain = 3`, `currentPathSum = 6`.
  - Update `globalMax` to `6`.
  - Return `4`.

Output: `6`.

Example 2:
Input: `root = [-10, 9, 20, null, null, 15, 7]`

- At node 15:
  - `leftGain = 0`, `rightGain = 0`, `currentPathSum = 15`.
  - Return `15` to its parent (node 20).
- At node 7:
  - `leftGain = 0`, `rightGain = 0`, `currentPathSum = 7`.
  - Return `7` to its parent (node 20).
- At node 20:
  - `leftGain = 15`, `rightGain = 7`, `currentPathSum = 42`.
  - Update `globalMax` to `42`.
  - Return `35` to its parent (node -10).
- At node 9:
  - `leftGain = 0`, `rightGain = 0`, `currentPathSum = 9`.
  - Return `9` to its parent (node -10).
- At node -10:
  - `leftGain = 9`, `rightGain = 35`, `currentPathSum = 34`.
  - `globalMax` remains `42`.

Output: `42`.

---

Edge Cases:
1. Single-node tree:
   - Input: `[5]`
   - Output: `5`.

2. Tree with all negative values:
   - Input: `[-1, -2, -3]`
   - Output: `-1` (the maximum path sum is a single-node path).

3. Tree with zero values:
   - Handles `0` values correctly, excluding branches with negative contributions.
*/
