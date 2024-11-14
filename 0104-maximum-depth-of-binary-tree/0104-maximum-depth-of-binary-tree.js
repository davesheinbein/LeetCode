/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // Base case: if the node is null, the depth is 0
    if (root === null) {
        console.log("Reached a null node, returning depth of 0.");
        return 0;
    }

    // Log the current node being processed
    console.log(`Processing node with value: ${root.val}`);

    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Log the depths of the left and right subtrees
    console.log(`At node ${root.val}: Left Subtree Depth: ${leftDepth}, Right Subtree Depth: ${rightDepth}`);

    // The depth of the current node is the maximum depth of the left and right subtrees, plus 1 for the current node
    const currentDepth = Math.max(leftDepth, rightDepth) + 1;

    // Log the calculated depth for the current node
    console.log(`At node ${root.val}: Returning Depth: ${currentDepth}`);

    return currentDepth;
};

// Test 1: Tree: [3,9,20,null,null,15,7]
// ERD: 
//      3
//     / \
//    9   20
//        /  \
//       15   7
const testTree1 = new TreeNode(3);
testTree1.left = new TreeNode(9);
testTree1.right = new TreeNode(20);
testTree1.right.left = new TreeNode(15);
testTree1.right.right = new TreeNode(7);

console.log("Test 1 - Expected: 3, Result:", maxDepth(testTree1)); // Expected: 3

// Test 2: Tree: [1,null,2]
// ERD: 
//      1
//       \
//        2
const testTree2 = new TreeNode(1);
testTree2.right = new TreeNode(2);

console.log("Test 2 - Expected: 2, Result:", maxDepth(testTree2)); // Expected: 2

// Test 3: Empty tree (null)
// ERD: 
//    (null)
const testTree3 = null;

console.log("Test 3 - Expected: 0, Result:", maxDepth(testTree3)); // Expected: 0

// Test 4: Single node tree [1]
// ERD: 
//      1
const testTree4 = new TreeNode(1);

console.log("Test 4 - Expected: 1, Result:", maxDepth(testTree4)); // Expected: 1

// Test 5: Skewed tree (all nodes to the left)
// ERD: 
//      1
//     /
//    2
//   /
//  3
// /
//4
const testTree5 = new TreeNode(1);
testTree5.left = new TreeNode(2);
testTree5.left.left = new TreeNode(3);
testTree5.left.left.left = new TreeNode(4);

console.log("Test 5 - Expected: 4, Result:", maxDepth(testTree5)); // Expected: 4

// Test 6: Balanced tree with more nodes
// ERD: 
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
const testTree6 = new TreeNode(1);
testTree6.left = new TreeNode(2);
testTree6.right = new TreeNode(3);
testTree6.left.left = new TreeNode(4);
testTree6.left.right = new TreeNode(5);
testTree6.right.left = new TreeNode(6);
testTree6.right.right = new TreeNode(7);

console.log("Test 6 - Expected: 3, Result:", maxDepth(testTree6)); // Expected: 3

// Explanation of the code:

// This function creates a node for a binary tree with a value (val), a left child (left), and a right child (right).
// Default values are provided for left and right if they are not specified.
// maxDepth Function:

// This function calculates the maximum depth of a binary tree by recursively determining the depth of the left and right subtrees of each node.
// If a node is null, the function returns 0 (base case).
// Otherwise, it recursively calls itself for the left and right children, calculates the depth of each subtree, and returns the maximum of the two subtrees' depths, adding 1 to account for the current node.
