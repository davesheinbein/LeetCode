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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	// Base case: if the node is null, return false
	if (!root) return false;

	// If we reach a leaf node, check if the target sum is equal to the node's value
	if (!root.left && !root.right) {
		return root.val === targetSum;
	}

	// Otherwise, subtract the node's value from the target and check the left and right subtrees
	const newTarget = targetSum - root.val;
	return (
		hasPathSum(root.left, newTarget) ||
		hasPathSum(root.right, newTarget)
	);
};

/*
Explanation:
1. If the current node is null, return false, as there are no further paths.
2. If the current node is a leaf (both left and right are null), check if the remaining target sum equals the current node's value.
3. If it's not a leaf, recursively check both the left and right subtrees with the updated target sum (subtract the current node's value).
4. The result is `true` if either of the subtrees has a path sum equal to the target.

Time Complexity:
- O(n), where n is the number of nodes in the tree. Each node is visited once during the traversal.

Space Complexity:
- O(h), where h is the height of the tree. This is the space used by the recursion stack in the worst case (i.e., if the tree is skewed).

Examples:

Example 1:
Input:
root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

Start at root node 5, subtract 5 from 22, new target is 17.
Traverse left to node 4, subtract 4 from 17, new target is 13.
Traverse left to node 11, subtract 11 from 13, new target is 2.
Traverse left to node 7, subtract 7 from 2, new target is -5. This is not valid, so return false.
Traverse right to node 2, subtract 2 from 2, new target is 0. Since this is a leaf node and the target is 0, return true.

Output: true.

Example 2:
Input:
root = [1,2,3], targetSum = 5

Start at root node 1, subtract 1 from 5, new target is 4.
Traverse left to node 2, subtract 2 from 4, new target is 2.
Node 2 is a leaf and the target is not 2, return false.
Traverse right to node 3, subtract 3 from 4, new target is 1.
Node 3 is a leaf and the target is not 1, return false.

Output: false.
*/
