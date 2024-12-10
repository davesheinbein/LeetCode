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
var zigzagLevelOrder = function(root) {
    if (!root) return []; // If the tree is empty, return an empty array.

    const result = []; // To store the final zigzag level order traversal.
    const queue = [root]; // Initialize the queue with the root node.
    let isReverse = false; // Track whether the current level should be reversed.

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level.
        const currentLevel = []; // List to store node values at the current level.

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the next node.
            currentLevel.push(node.val); // Add the node's value to the current level list.

            // Add the node's children to the queue for the next level.
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Reverse the current level's order if needed.
        if (isReverse) {
            currentLevel.reverse();
        }

        result.push(currentLevel); // Add the current level to the result.
        isReverse = !isReverse; // Toggle the reverse flag for the next level.
    }

    return result;
};

/*
Explanation:

1. We initialize the queue with the root node to begin the BFS traversal.
2. For each level, we process all nodes currently in the queue:
   - Extract their values into a `currentLevel` list.
   - Add their left and right children to the queue for the next level.
3. If the `isReverse` flag is `true`, we reverse the `currentLevel` list before adding it to the result.
4. We toggle the `isReverse` flag for the next level.
5. Repeat until the queue is empty and return the final `result`.

Time complexity:
- \( O(n) \), where \( n \) is the number of nodes in the tree. Each node is processed once.

Space complexity:
- \( O(n) \), for the queue and result storage.

Example Walkthrough:

Input:
      3
     / \
    9  20
       /  \
      15   7

Output:
[[3], [20, 9], [15, 7]]

1. Start with the root node `[3]`. Add it to the result: `[[3]]`.
2. The next level has nodes `[9, 20]`. Reverse it to get `[20, 9]`. Add it to the result: `[[3], [20, 9]]`.
3. The final level has nodes `[15, 7]`. Add it to the result without reversing: `[[3], [20, 9], [15, 7]]`.

This approach ensures we alternate between left-to-right and right-to-left traversal for each level.
*/
