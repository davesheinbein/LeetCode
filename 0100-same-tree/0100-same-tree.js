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
        return true; // Both trees are empty, so they are identical (both null)
    }

    // Base case 2: If one tree is null and the other is not, they are not the same
    if (p === null || q === null) {
        return false; // One tree is empty, and the other is not, so they cannot be identical
    }

    // Check if the current nodes' values are equal
    if (p.val !== q.val) {
        return false; // The current nodes' values don't match, so the trees are not identical
    }

    // Now we are sure the current nodes' values are equal, so we need to recursively check the left and right subtrees
    // The trees are the same if:
    // - The left subtrees are the same
    // - The right subtrees are the same

    // First, the left subtree of both trees is checked
    // The function calls itself recursively for the left child of p and q
    return (
        isSameTree(p.left, q.left) &&  // Traverse and compare left children of both trees
        isSameTree(p.right, q.right)   // Traverse and compare right children of both trees
    );
};

/*
Explanation:

1. Base cases: 
   - The first check (`if (p === null && q === null)`) handles the case where both trees are empty. If both trees are null, they are considered identical, so the function returns `true`.
     - Example: If `p = null` and `q = null`, return `true` (both are empty trees).
   - The second check (`if (p === null || q === null)`) handles the case where one tree is empty and the other is not. If one tree is null and the other is not, they cannot be identical, so the function returns `false`.
     - Example: If `p = null` and `q = TreeNode(1)`, return `false` (one tree is empty).

2. Value comparison: 
   - If both trees have non-null nodes at the current position, we compare their values (`p.val !== q.val`). If the values are different, the trees cannot be identical, so the function returns `false`.
     - Example: If `p.val = 1` and `q.val = 2`, return `false` (values are different).

3. Recursive check: 
   - If the current node values match, we recursively check the left and right subtrees of both trees. Both the left and right subtrees must be structurally identical and have the same node values for the trees to be considered identical.
     - For example:
       - If we have `p = TreeNode(1, TreeNode(2), TreeNode(3))` and `q = TreeNode(1, TreeNode(2), TreeNode(3))`, we will:
         - Compare `p.val === q.val` (both are `1`), so the trees could be identical.
         - Now we check the left children: `isSameTree(p.left, q.left)` compares `p.left = TreeNode(2)` with `q.left = TreeNode(2)`. Since the values are the same, it recursively checks their subtrees (both are `null`, so return `true`).
         - Then we check the right children: `isSameTree(p.right, q.right)` compares `p.right = TreeNode(3)` with `q.right = TreeNode(3)`. Similarly, the values match and both children are `null`, so return `true`.
     - If all these checks are `true`, the function returns `true` indicating the trees are identical.

4. Time Complexity: 
   - The time complexity of this solution is O(n), where `n` is the number of nodes in the trees. This is because, in the worst case, the function must traverse all the nodes in both trees. Each node is visited exactly once.

5. Space Complexity: 
   - The space complexity is O(h), where `h` is the height of the trees. This is due to the recursive call stack, which grows proportionally to the height of the tree. In the worst case, when the tree is completely unbalanced, the space complexity could be O(n), where `n` is the number of nodes.
*/
