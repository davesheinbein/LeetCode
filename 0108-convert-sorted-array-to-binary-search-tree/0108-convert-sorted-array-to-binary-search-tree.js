/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Helper function to recursively build the BST
    const buildBST = (start, end) => {
        if (start > end) {
            return null; // Base case: no elements to process
        }
        
        // Choose the middle element as the root
        const mid = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[mid]);
        
        // Recursively build the left and right subtrees
        root.left = buildBST(start, mid - 1);
        root.right = buildBST(mid + 1, end);
        
        return root;
    };
    
    // Start the recursion with the entire array range
    return buildBST(0, nums.length - 1);
};

// Helper function to print the tree in a readable format
const printTree = (node) => {
    if (node === null) {
        return "null";
    }
    return `(${node.val}, ${printTree(node.left)}, ${printTree(node.right)})`;
};

// Example
const nums = [-10, -3, 0, 5, 9];
const bst = sortedArrayToBST(nums);
console.log("Generated BST:", printTree(bst));


/*
Explanation:

The goal is to convert a sorted array into a height-balanced binary search tree (BST). A height-balanced BST is one where the depth of the two subtrees of every node never differs by more than one. 

To achieve this, we recursively choose the middle element of the array (or subarray) as the root, ensuring balance. The left half of the array forms the left subtree, and the right half forms the right subtree. This process continues until all elements are placed in the tree.

1. We define a helper function `buildBST(start, end)` which:
   - Returns `null` when `start > end` (base case).
   - Chooses the middle element `nums[mid]` as the root.
   - Recursively builds the left subtree using elements before the middle and the right subtree using elements after the middle.
   
2. The function `sortedArrayToBST` starts the recursion with the full array range (`start = 0`, `end = nums.length - 1`).

3. A helper function `printTree(node)` is used to visualize the resulting tree in a readable format.

Time Complexity: O(n), as each element is processed once.
Space Complexity: O(log n), due to recursion stack depth for a balanced tree.

Example - Tree Structure Explanation:
For the input array `[-10, -3, 0, 5, 9]`, the output tree structure is as follows:

      0
     / \
   -3   9
   /   /
 -10   5

- The root node is `0` (middle element).
- The left subtree of `0` is formed from the left half of the array `[-10, -3]`, with `-3` as the root and `-10` as its left child.
- The right subtree of `0` is formed from the right half of the array `[5, 9]`, with `9` as the root and `5` as its left child.
*/
