/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root - The root of the binary search tree.
 * @param {number} k - The index of the smallest element to return.
 * @return {number} - The kth smallest element in the binary search tree.
 */

var kthSmallest = function(root, k) {
    console.log("root", root);
    console.log("k", k);
    let count = 0; // Keeps track of how many nodes we've visited during the in-order traversal.
    let result = null; // Stores the kth smallest element when found.

    // Helper function to perform in-order traversal of the BST.
    function inorder(node) {
        if (node === null) return; // Base case: if the node is null, just return.

        // 1. Traverse the left subtree first, as it contains smaller values.
        inorder(node.left); // Example: for node with value 3, it will first visit the left child (node with value 1).
        // If node is 3, the left child is 1, and the traversal will move to 1 first.

        // 2. Visit the current node.
        count++; // Increment count because we've visited a new node.
        if (count === k) {
            result = node.val; // If count equals k, we’ve found the kth smallest value.
            return; // Stop the traversal since we found the result.
        }
        // Example: After visiting node 1 (left child), count becomes 1, then it moves back to 3.

        // 3. Traverse the right subtree after visiting the node.
        inorder(node.right); // After visiting node 3, it will move to its right child (node with value 4).
        // Example: Node 3 visits right child 4 after visiting itself.
    }

    inorder(root); // Start in-order traversal from the root of the tree.
    return result; // Return the kth smallest element found during the traversal.
};

// Example usage:
// console.log(kthSmallest([3,1,4,null,2], 1)); // Output: 1
// console.log(kthSmallest([5,3,6,2,4,null,null,1], 3)); // Output: 3

/*
Explanation:

1. In-order Traversal:
   - In-order traversal visits nodes in ascending order in a binary search tree (BST). The order of traversal is:
     1) Traverse the left subtree.
        - Example: For the tree [3,1,4,null,2], first it traverses left subtree, visiting node 1.
     2) Visit the current node.
        - Example: After node 1, the current node is 3. We count 3 and move to the next.
     3) Then traverse the right subtree.
        - Example: After visiting node 3, it moves to the right child, which is node 4.
   - This order guarantees that if we visit nodes one by one, we’ll visit the smallest node first, the second smallest next, and so on.
   - For example, in the tree `root = [3,1,4,null,2]`, the in-order traversal visits nodes in this order: `[1, 2, 3, 4]`. Therefore, the 1st smallest element is 1, and the 3rd smallest element is 3.

2. Recursive Approach:
   - The `inorder` function is defined to traverse the tree recursively. This means we will explore the left child, visit the node, and then explore the right child, following a depth-first traversal.
   - We maintain a `count` variable to track how many nodes we've visited so far. When `count` reaches `k`, we've found the kth smallest element, and we store its value in `result`.
   - The traversal stops early once we find the kth smallest element, which helps to save time by avoiding unnecessary exploration of the tree.

3. Time Complexity:
   - O(n), where `n` is the number of nodes in the tree. In the worst case, we may need to traverse all nodes in the tree, especially if `k` is large or if the kth smallest element is near the last visited node.

4. Space Complexity:
   - O(h), where `h` is the height of the tree. This represents the space needed for the recursive call stack. In the worst case (e.g., for a skewed tree), the height `h` can be equal to `n` (i.e., O(n)).

*/
