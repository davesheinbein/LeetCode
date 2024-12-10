/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (!root || root === p || root === q) {
		// If the current node is null, or matches p or q, return the current node.
		return root;
	}

	// Recur for the left and right subtrees.
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);

	if (left && right) {
		// If both sides return non-null, this node is the LCA.
		return root;
	}

	// If only one side is non-null, return that side.
	return left || right;
};

/*
Explanation:
1. Base Case:
   - If the current node is null, we have reached the end of a branch, so return null.
   - If the current node matches either `p` or `q`, it is part of the path to one of the nodes, so return it.

2. Recursive Search:
   - Search both the left and right subtrees for `p` and `q`.

3. Logic:
   - If both `left` and `right` are non-null, it means `p` and `q` are found in different branches. Hence, the current node is their LCA.
   - If only one side is non-null, return the non-null side since both `p` and `q` are in that subtree.

4. Time Complexity:
   - \( O(n) \): We traverse each node once.

5. Space Complexity:
   - \( O(h) \): The recursion stack can go as deep as the height of the tree.

Examples:

Input:
Tree:

        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4

`p = 5`, `q = 1`.

Steps:
1. Starting at `3`:
   - Recurse left to `5`.
   - Recurse right to `1`.

2. At `5`:
   - Recurse left to `6` (returns null as no `p` or `q` found).
   - Recurse right to `2` (returns null as no `p` or `q` found).
   - Return `5` since it matches `p`.

3. At `1`:
   - Recurse left to `0` (returns null as no `p` or `q` found).
   - Recurse right to `8` (returns null as no `p` or `q` found).
   - Return `1` since it matches `q`.

4. Back at `3`:
   - Left returns `5`.
   - Right returns `1`.
   - Since both are non-null, `3` is the LCA.

Output:
`3`.
*/
