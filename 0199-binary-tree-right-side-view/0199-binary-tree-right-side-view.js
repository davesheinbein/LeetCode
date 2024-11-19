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
 * @return {number[]}
 */

var rightSideView = function(root) {
    // Return empty array if the tree is empty
    if (!root) return [];
    
    // Initialize queue for BFS and result array for the right-side view
    let queue = [root];
    let result = [];

    // Perform level-order traversal using BFS
    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift(); // Dequeue the front node
            
            // If it's the last node in this level, add its value to the result
            if (i === levelSize - 1) {
                result.push(currentNode.val);
            }
            
            // Enqueue left and right children (if they exist)
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    return result;
};

/*
 Explanation:
 1. Edge Case:
    - If the root is null, return an empty array [].
 
 2. BFS Traversal:
    - Use a queue to perform a level-order traversal.
    - For each level, iterate through all nodes.
    - Keep track of the last node's value at each level and add it to the result array.
 
 3. Enqueue Children:
    - After processing a node, enqueue its left and right children (if they exist)
      for processing in the next level.
 */
