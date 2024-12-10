/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val; // Initialize the node's value, default is null.
 *    this.left = left === undefined ? null : left; // Initialize the left child, default is null.
 *    this.right = right === undefined ? null : right; // Initialize the right child, default is null.
 *    this.next = next === undefined ? null : next; // Initialize the next pointer, default is null.
 * };
 */

/**
 * Populates each `next` pointer to point to the next right node.
 * If there is no next right node, the `next` pointer should be set to null.
 * @param {Node} root - The root node of the binary tree.
 * @return {Node} - The root node with updated `next` pointers.
 */

var connect = function (root) {
	// Base case: If the tree is empty, return null.
	if (!root) return null;

	// `dummy` is a placeholder node used to connect nodes at the next level.
	let dummy = new Node(0); // Represents the starting point of the next level.
	let current = dummy; // Pointer to track the last connected node at the next level.
	let node = root; // Pointer to traverse nodes at the current level.

	// Outer loop: Traverse level by level until there are no more levels.
	while (node) {
		// Inner loop: Traverse nodes at the current level using their `next` pointers.
		if (node.left) {
			// If the current node has a left child, connect it to the current node at the next level.
			current.next = node.left;
			current = current.next; // Move `current` pointer to the newly connected node.
		}
		if (node.right) {
			// If the current node has a right child, connect it similarly.
			current.next = node.right;
			current = current.next; // Move `current` pointer to the newly connected node.
		}

		// Move to the next node in the current level using the `next` pointer.
		node = node.next;

		// If we've reached the end of the current level:
		if (!node) {
			// Move `node` to the start of the next level (tracked by `dummy.next`).
			node = dummy.next;
			// Reset the `dummy` node for the next level.
			dummy.next = null;
			// Reset `current` to `dummy` for the next level traversal.
			current = dummy;
		}
	}

	// Return the root of the tree, now with updated `next` pointers.
	return root;
};

/*
Explanation:

Core Idea:
1. Level-by-Level Traversal:
   - The tree is processed level by level using the `next` pointers.
   - At each level, child nodes are connected to form the next level.

2. Dummy Node:
   - A `dummy` node is used to simplify tracking the starting node of the next level.
   - The `dummy.next` pointer always points to the first node in the next level.

3. Connection Logic:
   - For every node at the current level:
     - If the node has a left child, it is connected to the `next` pointer of the current level.
     - Similarly, if the node has a right child, it is connected.

4. End of Level:
   - Once all nodes in the current level are processed, move to the next level using `dummy.next`.

Time Complexity:
- O(n):
  - Each node is visited exactly once.
  - The traversal of `next` pointers within a level takes constant time per node.

Space Complexity:
- O(1):
  - The algorithm uses a constant amount of extra space for pointers (`dummy` and `current`).

Example Walkthrough:

Input:

    1
   / \
  2   3
 / \    \
4   5    7

Step-by-Step Execution:
1. Start at the root (level 0: `1`).
   - Connect left child `2` and right child `3` using `dummy`.
   - Move to the next level (`dummy.next = 2`).

2. Process level 1 (`2 -> 3`):
   - For `2`: Connect left child `4` and right child `5`.
   - For `3`: Connect right child `7`.
   - Move to the next level (`dummy.next = 4`).

3. Process level 2 (`4 -> 5 -> 7`):
   - No children to connect.
   - End of traversal.

Output:

    1 -> null
   /  \
  2 -> 3 -> null
 / \     \
4-> 5 -> 7 -> null


Edge Cases:
1. Empty Tree:
   - Input: `null`
   - Output: `null`

2. Single Node:
   - Input: `[1]`
   - Output: `1 -> null`

3. Tree with Only Left or Right Children:
   - Handles these cases seamlessly as only the available children are connected.
*/
