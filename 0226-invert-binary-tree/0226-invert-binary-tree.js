/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val); // Initialize the value of the node. Default is 0 if not provided.
 *     this.left = (left === undefined ? null : left); // Initialize the left child. Default is null if not provided.
 *     this.right = (right === undefined ? null : right); // Initialize the right child. Default is null if not provided.
 * }
 */

/**
 * Function to invert a binary tree.
 * @param {TreeNode} root - The root node of the binary tree
 * @return {TreeNode} - The root node of the inverted binary tree
 */
var invertTree = function(root) {
    // Base case: if the node is null, return null. There is nothing to invert.
    if (root === null) {
        return null;  // If the tree is empty (root is null), no inversion is needed.
    }

    // Swap the left and right children of the current node
    // Create a temporary variable to store the left child temporarily
    let temp = root.left; // Save the left child to a temporary variable
    root.left = root.right; // Assign the right child to the left child position
    root.right = temp; // Assign the saved left child to the right child position

    // Recursively invert the left and right subtrees
    // Now that the children have been swapped, we need to invert the subtrees
    invertTree(root.left);  // Invert the left subtree (which is originally the right subtree)
    invertTree(root.right); // Invert the right subtree (which is originally the left subtree)

    // Return the root of the inverted tree (it is the same root node but with its subtrees inverted)
    return root;
};

/*
Explanation:

1. Base Case: 
   - If the `root` is `null`, there is no tree to invert, so we simply return `null`.

2. Swapping Left and Right: 
   - The core operation in this function is to swap the left and right children of the current node. 
   - We use a temporary variable `temp` to store the left child temporarily, then assign the right child to the left, and finally assign the saved left child to the right.

3. Recursive Inversion:
   - After swapping the current node’s children, we recursively call `invertTree` on both the left and right subtrees.
   - This ensures that all nodes in the tree are processed and inverted, including deeper levels.

4. Returning the Root:
   - After all nodes have been inverted, we return the `root` node of the inverted tree. This is the same root as the input, but with the entire tree structure inverted.

5. Time Complexity:
   - The time complexity of this function is O(n), where `n` is the number of nodes in the tree. This is because we visit each node exactly once to swap its children.

6. Space Complexity:
   - The space complexity is O(h), where `h` is the height of the tree. This is due to the recursion stack, which grows as the depth of the tree increases. 
   - In the worst case (for an unbalanced tree), the recursion stack could grow to O(n), where `n` is the number of nodes.

### Example Walkthrough:

1. Example 1:
   - Input: `root = [4, 2, 7, 1, 3, 6, 9]`
   - The binary tree looks like this before inversion:
     ```
         4
        / \
       2   7
      / \ / \
     1  3 6  9
     ```
   - After inverting the tree, the structure changes as follows:
     ```
         4
        / \
       7   2
      / \ / \
     9  6 3  1
     ```
   - Output: `[4, 7, 2, 9, 6, 3, 1]`

2. Example 2:
   - Input: `root = [2, 1, 3]`
   - The binary tree looks like this before inversion:
     ```
         2
        / \
       1   3
     ```
   - After inverting the tree, the structure changes as follows:
     ```
         2
        / \
       3   1
     ```
   - Output: `[2, 3, 1]`

3. Example 3:
   - Input: `root = []` (empty tree)
   - Since there are no nodes, the function simply returns an empty tree.
   - Output: `[]`
   
*/
