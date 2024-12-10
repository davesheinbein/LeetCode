/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val); // Node value (default is 0 if not provided)
 *     this.left = (left === undefined ? null : left); // Left child (default is null if not provided)
 *     this.right = (right === undefined ? null : right); // Right child (default is null if not provided)
 * }
 */

/**
 * Reconstructs a binary tree from preorder and inorder traversals.
 * @param {number[]} preorder - Preorder traversal of the tree.
 * @param {number[]} inorder - Inorder traversal of the tree.
 * @return {TreeNode} - Root of the reconstructed binary tree.
 */
var buildTree = function (preorder, inorder) {
	// Base case: If there are no elements in either array, return null.
	if (!preorder.length || !inorder.length) {
		return null; // No nodes to construct, so return null.
	}

	// Identify the root of the tree.
	// The first element in preorder traversal is always the root of the current subtree.
	const rootVal = preorder[0];
	const root = new TreeNode(rootVal); // Create a new tree node with this value.

	// Find the root's position in the inorder traversal.
	// This determines the boundary between the left and right subtrees.
	const rootIndex = inorder.indexOf(rootVal);

	// Split the inorder array into left and right subtrees.
	const leftInorder = inorder.slice(0, rootIndex); // Left part of inorder traversal (nodes before the root).
	const rightInorder = inorder.slice(rootIndex + 1); // Right part of inorder traversal (nodes after the root).

	// Split the preorder array into left and right subtrees.
	// The left subtree in preorder starts right after the root and has the same length as leftInorder.
	const leftPreorder = preorder.slice(
		1,
		1 + leftInorder.length
	);
	const rightPreorder = preorder.slice(
		1 + leftInorder.length
	);

	// Recursively construct the left and right subtrees.
	root.left = buildTree(leftPreorder, leftInorder); // Build the left subtree.
	root.right = buildTree(rightPreorder, rightInorder); // Build the right subtree.

	// Return the root of the constructed binary tree.
	return root;
};

/*
Detailed Breakdown:

1. Base Case:
   - If `preorder` or `inorder` is empty, there is no subtree to construct, so we return `null`.

2. Identify the Root:
   - The root of the tree or subtree is always the first element in the preorder traversal.
   - Create a `TreeNode` instance for the root.

3. Partition Inorder Traversal:
   - Use the root's value to locate its position in the `inorder` array.
   - This position splits `inorder` into:
     - Left subtree (elements before the root in `inorder`).
     - Right subtree (elements after the root in `inorder`).

4. Partition Preorder Traversal:
   - Based on the size of the left subtree (from `inorder`), split `preorder` into:
     - Left subtree (immediately after the root, same length as `leftInorder`).
     - Right subtree (remaining elements).

5. Recursive Construction:
   - Recursively call `buildTree` for the left and right subtrees, passing the corresponding parts of `preorder` and `inorder`.
   - Assign the results to `root.left` and `root.right`.

6. Return the Constructed Tree:
   - Once all recursive calls are completed, return the root of the fully constructed tree.

Example Walkthrough:

Given:
- Preorder: `[3, 9, 20, 15, 7]`
- Inorder: `[9, 3, 15, 20, 7]`

Step-by-step:
1. Root is `3` (first element of preorder).
2. Find `3` in inorder. Left subtree: `[9]`, Right subtree: `[15, 20, 7]`.
3. Split preorder: Left subtree: `[9]`, Right subtree: `[20, 15, 7]`.
4. Recursively build left subtree (`[9]` and `[9]`) and right subtree (`[20, 15, 7]` and `[15, 20, 7]`).

Result:
    3
   / \
  9  20
     / \
    15  7

Complexity:
1. Time Complexity:
   - O(n): Each node is processed once, and array slicing (using index) is efficient.
2. Space Complexity:
   - O(h): Recursion stack space, where `h` is the height of the tree. In the worst case (skewed tree), this can be O(n).
*/
