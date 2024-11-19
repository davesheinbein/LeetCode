/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMinimumDifference = function (root) {
    let prev = null; // Tracks the previous value in the in-order traversal
    let minDiff = Infinity; // Initialize the minimum difference to a very large number

    // Helper function for in-order traversal
    const inOrderTraversal = (node) => {
        if (!node) return;

        // Traverse the left subtree
        inOrderTraversal(node.left);

        // Process the current node
        if (prev !== null) {
            // Update the minimum difference
            minDiff = Math.min(minDiff, Math.abs(node.val - prev));
        }
        // Update the previous value to the current node's value
        prev = node.val;

        // Traverse the right subtree
        inOrderTraversal(node.right);
    };

    // Perform in-order traversal starting from the root
    inOrderTraversal(root);

    return minDiff;
};

/**
Explanation:

1. In-order Traversal:
The recursive function `inOrderTraversal` processes nodes in ascending order for a BST.

2. `prev` Variable:
Keeps track of the previously visited node's value during traversal.

3. Minimum Difference Calculation:
At each node, the absolute difference between the current node's value and `prev` is calculated.
The `minDiff` is updated if the new difference is smaller.

4. Return Value:
After the traversal, `minDiff` contains the smallest absolute difference between any two nodes.

Complexity Analysis:
- Time Complexity: O(n), where `n` is the number of nodes. Each node is visited once.
- Space Complexity: O(h), where `h` is the height of the BST. This accounts for the recursion stack.
 */
