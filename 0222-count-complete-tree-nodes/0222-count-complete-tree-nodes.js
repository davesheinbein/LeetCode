/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
	if (!root) return 0; // Base case: if the tree is empty, return 0.

	// Helper function to calculate the depth of the leftmost path.
	const getDepth = (node) => {
		let depth = 0;
		while (node) {
			depth++;
			node = node.left;
		}
		return depth;
	};

	// Get the depths of the left and right subtrees.
	const leftDepth = getDepth(root.left);
	const rightDepth = getDepth(root.right);

	if (leftDepth === rightDepth) {
		// If left and right subtree depths are the same, the left subtree is a perfect binary tree.
		// Total nodes in the left subtree = 2^leftDepth - 1, plus the root node.
		return (1 << leftDepth) + countNodes(root.right);
	} else {
		// If left and right subtree depths are different, the right subtree is a perfect binary tree.
		// Total nodes in the right subtree = 2^rightDepth - 1, plus the root node.
		return (1 << rightDepth) + countNodes(root.left);
	}
};

/*
Explanation:
1. The tree being complete allows us to leverage its properties:
   - If the left and right subtrees have the same depth, the left subtree is a perfect binary tree.
   - If they differ, the right subtree is a perfect binary tree.

2. getDepth:
   - Traverses the leftmost path of the tree to calculate the depth efficiently in O(log n) time.

3. Recursive Case:
   - When left and right depths are equal:
     - Add the number of nodes in the left subtree (`2^depth - 1`) and recursively count nodes in the right subtree.
   - When left and right depths are not equal:
     - Add the number of nodes in the right subtree (`2^depth - 1`) and recursively count nodes in the left subtree.

4. Time Complexity:
   - Each recursive step reduces the problem size by half, making the time complexity \( O((\log n)^2) \).

Examples:
Input:
      1
     / \
    2   3
   / \  /
  4  5 6

1. At root (1): leftDepth = 3, rightDepth = 2.
   - Right subtree (root 3) is a perfect binary tree with depth 2.
   - Nodes in right subtree = \( 2^2 - 1 = 3 \).
   - Recur on the left subtree (root 2).

2. At root (2): leftDepth = 2, rightDepth = 2.
   - Left subtree (root 4) is a perfect binary tree with depth 2.
   - Nodes in left subtree = \( 2^2 - 1 = 3 \).
   - Add 1 (root node 2) and nodes in the right subtree (root 5).

3. Final count = 6.
*/
