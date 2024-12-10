/**
 * Definition for a binary tree node.
 * Constructs a binary tree node with a value and optional left/right children.
 * @param {number} val - The value of the node.
 * @param {TreeNode|null} left - The left child of the node (default: null).
 * @param {TreeNode|null} right - The right child of the node (default: null).
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val; // Initialize the node value; default to 0 if not provided.
	this.left = left === undefined ? null : left; // Set the left child or default to null.
	this.right = right === undefined ? null : right; // Set the right child or default to null.
}

/**
 * Validates if a binary tree is a Binary Search Tree (BST).
 * @param {TreeNode} root - The root of the binary tree.
 * @return {boolean} - Returns `true` if the tree is a valid BST, otherwise `false`.
 */

var isValidBST = function (root) {
	/**
	 * Helper function to validate the BST property for a given subtree.
	 * @param {TreeNode|null} node - The current node being validated.
	 * @param {number} min - The minimum allowable value for the current node.
	 * @param {number} max - The maximum allowable value for the current node.
	 * @return {boolean} - Returns `true` if the subtree rooted at `node` is valid.
	 */
	
	const validate = (node, min, max) => {
		// Base Case: If the node is null, it is valid (empty tree is a BST).
		if (!node) return true;

		// Check if the current node violates the BST property.
		// It must be strictly greater than `min` and strictly less than `max`.
		if (node.val <= min || node.val >= max) return false;

		// Recursively validate:
		// - The left subtree with an updated max boundary (`node.val`).
		// - The right subtree with an updated min boundary (`node.val`).
		return (
			validate(node.left, min, node.val) &&
			validate(node.right, node.val, max)
		);
	};

	// Initiate the validation process with the entire range of possible values.
	return validate(root, -Infinity, Infinity);
};

/**
 * Explanation:
 
  The function determines whether a binary tree satisfies the Binary Search Tree (BST) property:
  - For each node, all values in its left subtree must be less than the node's value.
  - All values in its right subtree must be greater than the node's value.
 
  Key Points:
  1. Recursive Validation:
     - Use a helper function `validate` that checks if each node's value lies within a valid range `(min, max)`.
     - The range is updated as we move down the tree:
       - For the left child, the maximum value is updated to the current node's value.
       - For the right child, the minimum value is updated to the current node's value.
  2. Base Case:
     - If the current node is `null`, it is valid by definition.
  3. Violation Detection:
     - If a node's value is not strictly within the range `(min, max)`, the function returns `false`.
 
  Complexity:
  - Time Complexity: \(O(n)\), where \(n\) is the number of nodes in the tree. Each node is visited once.
  - Space Complexity: \(O(h)\), where \(h\) is the height of the tree. This accounts for the recursive call stack.
 
  Examples:
 
  Example 1:
  Input: `root = [2, 1, 3]`
 
  Validation Steps:
  - Node \(2\): Range \((-∞, +∞)\) → valid.
  - Node \(1\): Range \((-∞, 2)\) → valid.
  - Node \(3\): Range \((2, +∞)\) → valid.
 
  Output: `true`
 
  Example 2:
  Input: `root = [5, 1, 4, null, null, 3, 6]`
 
  Validation Steps:
  - Node \(5\): Range \((-∞, +∞)\) → valid.
  - Node \(1\): Range \((-∞, 5)\) → valid.
  - Node \(4\): Range \((5, +∞)\) → **invalid** (node \(4\) violates the BST property).
 
  Output: `false`
 */
