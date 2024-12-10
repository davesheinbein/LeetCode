/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Flattens the binary tree to a linked list in-place.
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	// Helper function to flatten the tree recursively
	function flattenTree(node) {
		if (!node) return null; // If the node is null, return null

		// Flatten the left and right subtrees
		const left = flattenTree(node.left);
		const right = flattenTree(node.right);

		// If there's a left subtree, we need to reattach it to the right
		if (left) {
			node.right = left; // Attach the left subtree to the right
			node.left = null; // Set the left child to null
			// Traverse to the end of the new right subtree
			let curr = node.right;
			while (curr.right) {
				curr = curr.right;
			}
			// Attach the original right subtree
			curr.right = right;
		}

		// Return the node itself, now flattened
		return node;
	}

	flattenTree(root); // Start the flattening from the root
};

/*
Explanation:
1. Recursive function (`flattenTree`):
    - For each node, flatten its left and right subtrees.
    - Attach the left subtree to the right child of the node.
    - Move to the last node of the newly formed right subtree and append the original right subtree to it.
    - Set the left child of the current node to `null` to maintain the linked list structure.
    
2. Time Complexity: O(n), where n is the number of nodes. Each node is visited once during the recursion.
3. Space Complexity: O(h), where h is the height of the tree. This is due to the recursion stack, which can go up to the height of the tree in the worst case.

Example Walkthrough:

Input:

    1
   / \
  2   5
 / \   \
3   4   6

Output:

1 -> null
  \
   2 -> null
    \
     3 -> null
      \
       4 -> null
        \
         5 -> null
          \
           6 -> null


In this example:
- First, the left subtree is flattened: `2 -> 3 -> 4`.
- Then, the right subtree is flattened: `5 -> 6`.
- The left subtree (`2 -> 3 -> 4`) is moved to the right of `1`.
- Finally, the flattened tree is connected in a linear structure where each node points to the next node in pre-order.
*/
