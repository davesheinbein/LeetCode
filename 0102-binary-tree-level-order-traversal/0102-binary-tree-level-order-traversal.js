/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];  // If the tree is empty, return an empty array.

    const result = []; // This will store the final result.
    const queue = [root]; // Queue for BFS, starting with the root node.

    while (queue.length > 0) {
        const levelSize = queue.length; // Get the number of nodes at the current level.
        const currentLevel = []; // List to store the values of the nodes at the current level.

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Remove the node from the front of the queue.
            currentLevel.push(node.val); // Add its value to the current level list.

            // Add the left and right children to the queue if they exist.
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Add the current level's values to the result.
        result.push(currentLevel);
    }

    return result;
};

/*
Explanation:

1. Initialize a queue with the root node. This queue will help us traverse the tree level by level.
2. While the queue is not empty:
   - Determine how many nodes are at the current level (i.e., the length of the queue).
   - Iterate over all the nodes at that level, adding their values to a temporary list (`currentLevel`).
   - If a node has a left child, enqueue it. If a node has a right child, enqueue it as well.
3. After processing all nodes at a given level, add the `currentLevel` list to the result array.
4. The process continues until the queue is empty (i.e., all levels have been processed).

Time complexity:
- The time complexity is \( O(n) \), where \( n \) is the number of nodes in the tree, because each node is processed exactly once.

Space complexity:
- The space complexity is \( O(n) \) for the queue and result array, where \( n \) is the number of nodes.

Example Walkthrough:
Input:
      3
     / \
    9  20
       /  \
      15   7

Output:
[[3], [9, 20], [15, 7]]

- First, we start with the root node 3. It is the only node at the first level, so we add `[3]` to the result.
- Next, nodes 9 and 20 are added to the queue for the second level. We add `[9, 20]` to the result.
- Finally, nodes 15 and 7 are added for the third level. We add `[15, 7]` to the result.

The final output is `[[3], [9, 20], [15, 7]]`.
*/
