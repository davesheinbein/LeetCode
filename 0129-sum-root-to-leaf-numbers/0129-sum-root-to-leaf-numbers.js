/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
	// Helper function for DFS traversal
	const dfs = (node, currentNum) => {
		if (!node) return 0; // If the node is null, return 0

		// Update the current number
		currentNum = currentNum * 10 + node.val;

		// If it's a leaf node, return the current number
		if (!node.left && !node.right) {
			return currentNum;
		}

		// Recursively calculate the sum for left and right subtrees
		const leftSum = dfs(node.left, currentNum);
		const rightSum = dfs(node.right, currentNum);

		// Return the total sum
		return leftSum + rightSum;
	};

	// Start the DFS traversal with initial number as 0
	return dfs(root, 0);
};

/*
Explanation:
1. Base Case:
   - If the node is null, it contributes `0` to the sum.
2. Leaf Node:
   - If a leaf node is reached, return the number formed so far.
3. Recursive Case:
   - Recurse into the left and right subtrees, keeping track of the current number.
4. Final Sum:
   - The sum of all root-to-leaf numbers is accumulated during the recursion.

Examples:

Example 1:
Input: root = [1, 2, 3]

- Start at root `1`: Current number = `1`.
- Traverse left to `2`: Current number = `1 * 10 + 2 = 12`.
- `2` is a leaf, return `12`.
- Traverse right to `3`: Current number = `1 * 10 + 3 = 13`.
- `3` is a leaf, return `13`.
- Total sum = `12 + 13 = 25`.

Output: `25`.

Example 2:
Input: root = [4, 9, 0, 5, 1]

- Start at root `4`: Current number = `4`.
- Traverse left to `9`: Current number = `4 * 10 + 9 = 49`.
- Traverse left to `5`: Current number = `49 * 10 + 5 = 495`. Leaf, return `495`.
- Traverse right to `1`: Current number = `49 * 10 + 1 = 491`. Leaf, return `491`.
- Traverse right to `0`: Current number = `4 * 10 + 0 = 40`. Leaf, return `40`.
- Total sum = `495 + 491 + 40 = 1026`.

Output: `1026`.

Complexity:
- Time Complexity: O(n), where `n` is the number of nodes in the tree. Each node is visited once.
- Space Complexity: O(h), where `h` is the height of the tree. This is due to the recursion stack. In the worst case (skewed tree), it is O(n).
*/
