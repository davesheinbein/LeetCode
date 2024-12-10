/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val); // Initialize the node value; default is 0.
 *     this.left = (left === undefined ? null : left); // Initialize the left child; default is null.
 *     this.right = (right === undefined ? null : right); // Initialize the right child; default is null.
 * }
 */

/**
 * Reconstructs a binary tree from preorder and inorder traversals.
 * @param {number[]} preorder - Preorder traversal of the tree (root, left, right).
 * @param {number[]} inorder - Inorder traversal of the tree (left, root, right).
 * @return {TreeNode} - Root of the reconstructed binary tree.
 */
var buildTree = function (preorder, inorder) {
    // Base case: If either preorder or inorder is empty, return null.
    // This happens when we've processed all nodes for a subtree.
    if (!preorder.length || !inorder.length) {
        return null;
    }

    // The first element of the preorder array is always the root of the current subtree.
    const rootVal = preorder[0]; // Get the root value.
    const root = new TreeNode(rootVal); // Create a new TreeNode with this root value.

    // Find the index of the root value in the inorder array.
    // This index splits the inorder array into the left and right subtrees.
    const rootIndex = inorder.indexOf(rootVal);

    // Partition the inorder array into left and right subtrees.
    // All elements before `rootIndex` belong to the left subtree.
    const leftInorder = inorder.slice(0, rootIndex); 
    // All elements after `rootIndex` belong to the right subtree.
    const rightInorder = inorder.slice(rootIndex + 1); 

    // Partition the preorder array into left and right subtrees.
    // The left subtree in preorder starts at index 1 and has the same length as `leftInorder`.
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length); 
    // The right subtree in preorder starts right after the left subtree.
    const rightPreorder = preorder.slice(1 + leftInorder.length);

    // Recursively construct the left subtree using the left parts of preorder and inorder.
    root.left = buildTree(leftPreorder, leftInorder);

    // Recursively construct the right subtree using the right parts of preorder and inorder.
    root.right = buildTree(rightPreorder, rightInorder);

    // Return the constructed tree's root node.
    return root;
};

/*
Detailed Breakdown:

1. Base Case:
   - If `preorder` or `inorder` is empty, it means there are no nodes left to process for the current subtree, so return `null`.

2. Identify the Root:
   - The first element of `preorder` is always the root of the current subtree. This is because `preorder` traversal visits the root first, followed by the left and right subtrees.

3. Find Root Index in Inorder:
   - Locate the root value in `inorder` to determine the boundary between the left and right subtrees.
   - The left subtree includes all elements before the root's index in `inorder`.
   - The right subtree includes all elements after the root's index in `inorder`.

4. Partition Preorder and Inorder Arrays:
   - Use the size of the left subtree (from `inorder`) to split `preorder` into left and right subtrees.
   - The left subtree starts at index 1 in `preorder` (right after the root) and spans the same number of elements as in `leftInorder`.
   - The right subtree contains the remaining elements in `preorder`.

5. Recursive Construction:
   - Recursively construct the left and right subtrees by calling `buildTree` on the respective partitions of `preorder` and `inorder`.
   - Assign the constructed subtrees to the `left` and `right` properties of the root node.

6. Return Root:
   - Once all recursive calls complete, return the root of the reconstructed tree.

Example Walkthrough:

Given:
- Preorder: `[3, 9, 20, 15, 7]`
- Inorder: `[9, 3, 15, 20, 7]`

Step-by-Step:
1. Root is `3` (first element of `preorder`).
2. Find `3` in `inorder`. Left subtree: `[9]`, Right subtree: `[15, 20, 7]`.
3. Split `preorder`: Left subtree: `[9]`, Right subtree: `[20, 15, 7]`.
4. Recursively build:
   - Left subtree (`preorder: [9]`, `inorder: [9]`) -> Single node with value `9`.
   - Right subtree (`preorder: [20, 15, 7]`, `inorder: [15, 20, 7]`) -> Root is `20`, with left and right subtrees.

Result:
   3
  / \
 9   20
     / \
    15  7

Time and Space Complexity:

1. Time Complexity:
   - O(n): Each node is processed once. Array slicing and `indexOf` are efficient.

2. Space Complexity:
   - O(h): The recursion stack grows proportional to the height of the tree. In the worst case (skewed tree), this can be O(n).
*/
