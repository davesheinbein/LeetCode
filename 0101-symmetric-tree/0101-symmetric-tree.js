/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Checks if a binary tree is symmetric (a mirror of itself).
 * @param {TreeNode} root - The root node of the binary tree
 * @return {boolean} - Returns true if the tree is symmetric, otherwise false
 */

var isSymmetric = function(root) {
    if (!root) {
        return true; // An empty tree is symmetric
    }

    // Helper function to compare two subtrees
    const isMirror = function(t1, t2) {
        if (!t1 && !t2) {
            return true; // Both nodes are null, so they are symmetric
        }
        if (!t1 || !t2) {
            return false; // One node is null but the other is not
        }
        return (
            t1.val === t2.val && // Values of the nodes must be equal
            isMirror(t1.left, t2.right) && // Left subtree of t1 mirrors right subtree of t2
            isMirror(t1.right, t2.left) // Right subtree of t1 mirrors left subtree of t2
        );
    };

    // Check if the left and right subtrees of the root are mirrors
    return isMirror(root.left, root.right);
};

/*
Explanation:

1. Base Case:
   - If the tree is empty (`root === null`), it is symmetric.

2. Helper Function (isMirror):
   - Compares two subtrees to determine if they are mirrors of each other.
   - Both nodes are `null`: Return true (they are symmetric).
   - One node is `null` but the other is not: Return false (not symmetric).
   - Both nodes exist: Check if their values are equal and recursively compare:
     - The left subtree of the first tree with the right subtree of the second tree.
     - The right subtree of the first tree with the left subtree of the second tree.

3. Time Complexity:
   - O(n), where `n` is the number of nodes in the tree. Each node is visited once.

4. Space Complexity:
   - O(h), where `h` is the height of the tree, due to the recursion stack.

Examples:

1. Example 1:
   - Input: `root = [1, 2, 2, 3, 4, 4, 3]`
   - The tree structure is:
         1
        / \
       2   2
      / \ / \
     3  4 4  3
   - The left and right subtrees are mirrors of each other, so the output is `true`.

2. Example 2:
   - Input: `root = [1, 2, 2, null, 3, null, 3]`
   - The tree structure is:
         1
        / \
       2   2
        \    \
         3    3
   - The left and right subtrees are not mirrors of each other, so the output is `false`.

3. Edge Case:
   - Input: `root = [1]`
   - A single-node tree is symmetric, so the output is `true`.
*/