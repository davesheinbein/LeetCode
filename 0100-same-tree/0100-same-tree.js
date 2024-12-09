/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val); // Initialize the value of the node. Default is 0 if not provided.
 *     this.left = (left === undefined ? null : left); // Initialize the left child. Default is null if not provided.
 *     this.right = (right === undefined ? null : right); // Initialize the right child. Default is null if not provided.
 * }
 */

/**
 * Function to check if two binary trees are the same.
 * @param {TreeNode} p - Root of the first binary tree
 * @param {TreeNode} q - Root of the second binary tree
 * @return {boolean} - Returns true if the trees are structurally identical and have the same values; false otherwise
 */
var isSameTree = function (p, q) {
	// Base case 1: If both trees are null, they are the same (empty trees)
	if (p === null && q === null) {
		return true; // Both trees are empty, so they are the same
	}

	// Base case 2: If one tree is null and the other is not, they are not the same
	if (p === null || q === null) {
		return false; // One tree is empty and the other is not, so they are not the same
	}

	// Check if the current nodes' values are equal
	if (p.val !== q.val) {
		return false; // If the node values are different, the trees are not the same
	}

	// Recursively check the left and right subtrees
	// The trees are the same if:
	// - The left subtrees are the same
	// - The right subtrees are the same
	return (
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
};

/*
Explanation:

1. Base cases: 
   - The first check (`if (p === null && q === null)`) handles the case where both trees are empty. If both trees are null, they are considered identical, so the function returns `true`.
   - The second check (`if (p === null || q === null)`) handles the case where one tree is empty and the other is not. In this case, the trees cannot be the same, so the function returns `false`.

2. Value comparison: 
   - If both trees have non-null nodes at the current position, we compare their values (`p.val !== q.val`). If the values are different, the trees cannot be the same, so the function returns `false`.

3. Recursive check: 
   - If the current node values match, the function recursively checks the left and right subtrees of both trees. Both the left and right subtrees must be structurally identical and have the same node values for the trees to be considered the same. 
   - The function calls itself for both the left subtrees (`isSameTree(p.left, q.left)`) and the right subtrees (`isSameTree(p.right, q.right)`), and the trees are the same only if both of these recursive calls return `true`.

4. Time Complexity: 
   - The time complexity of this solution is O(n), where `n` is the number of nodes in the trees. This is because, in the worst case, the function must traverse all the nodes in both trees. Each node is visited exactly once.

5. Space Complexity: 
   - The space complexity is O(h), where `h` is the height of the trees. This is due to the recursive call stack, which grows proportionally to the height of the tree. In the worst case, when the tree is completely unbalanced, the space complexity could be O(n), where `n` is the number of nodes.
*/
