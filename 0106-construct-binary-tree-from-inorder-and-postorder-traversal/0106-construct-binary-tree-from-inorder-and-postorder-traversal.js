/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Constructs a binary tree from inorder and postorder traversals.
 * @param {number[]} inorder - Inorder traversal of the tree.
 * @param {number[]} postorder - Postorder traversal of the tree.
 * @return {TreeNode} - Root of the reconstructed binary tree.
 */
var buildTree = function (inorder, postorder) {
	if (!inorder.length || !postorder.length) return null; // Base case: no elements to construct a tree.

	// The last element in postorder is the root.
	const rootVal = postorder.pop();
	const root = new TreeNode(rootVal);

	// Find the root's position in the inorder array.
	const rootIndex = inorder.indexOf(rootVal);

	// Split the inorder array into left and right subtrees.
	const rightInorder = inorder.slice(rootIndex + 1); // Elements to the right of the root.
	const leftInorder = inorder.slice(0, rootIndex); // Elements to the left of the root.

	// Recursively construct the right subtree first (because of postorder traversal).
	root.right = buildTree(rightInorder, postorder);
	root.left = buildTree(leftInorder, postorder);

	return root; // Return the constructed tree's root.
};

/*
Explanation:
1. The algorithm utilizes the properties of inorder and postorder traversals:
   - Inorder: Left -> Root -> Right.
   - Postorder: Left -> Right -> Root.

2. The last element of postorder is always the root. We use this to identify the root and split the inorder array.

3. Recursively process the right and left subtrees.

4. Base case handles when no elements are left to process.

Time Complexity:
- O(n): Each node is processed once, and slicing operations are linear in size.

Space Complexity:
- O(h): Recursive stack space, where h is the height of the tree.

Example

Input:
- `inorder = [9,3,15,20,7]`
- `postorder = [9,15,7,20,3]`

1. Root is `3` (last element of postorder).  
   - Left inorder: `[9]`, Right inorder: `[15,20,7]`.

2. Right subtree root is `20` (next last element of postorder).  
   - Left inorder: `[15]`, Right inorder: `[7]`.

3. Continue recursively for subtrees.  

Output:
The reconstructed tree is:

    3
   / \
  9   20
     /  \
    15   7


This matches the expected output `[3,9,20,null,null,15,7]`.
*/
