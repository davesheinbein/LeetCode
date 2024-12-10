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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	if (!root) return [];

	const result = [];
	const queue = [root]; // Queue to hold nodes for level-order traversal

	while (queue.length > 0) {
		const levelSize = queue.length;
		let levelSum = 0;

		for (let i = 0; i < levelSize; i++) {
			const currentNode = queue.shift();
			levelSum += currentNode.val;

			// Add children to the queue
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		// Calculate average for the current level and add it to the result
		result.push(levelSum / levelSize);
	}

	return result;
};

/*
Explanation:

1. Initialization:
   - Create a result array to store averages.
   - Use a queue to perform level-order traversal of the tree.

2. Traversal:
   - For each level, determine its size (`levelSize`) to know how many nodes to process.
   - Sum up all node values at the current level.

3. Average Calculation:
   - Compute the average by dividing the total sum of the level by `levelSize`.
   - Add the average to the result array.

4. Queue Management:
   - Add the left and right children of each node to the queue to process the next level.

5. Time Complexity:
   - \( O(n) \): Each node is visited once.

6. Space Complexity:
   - \( O(m) \): The maximum number of nodes in the queue at any point is proportional to the width of the tree.

Examples:

Input:
Tree:

       3
      / \
     9   20
         / \
        15  7


Steps:
- Level 0: Only node `3`. Average = \( 3 \).
- Level 1: Nodes `9` and `20`. Average = \( (9 + 20) / 2 = 14.5 \).
- Level 2: Nodes `15` and `7`. Average = \( (15 + 7) / 2 = 11 \).

Output:
\[ 3, 14.5, 11 \].

*/
