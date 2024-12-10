/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * BSTIterator initializes with the root of a BST.
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
	this.stack = [];
	this._leftmostInorder(root);
};

/**
 * Helper function to push all the left nodes of the current node onto the stack.
 * @param {TreeNode} node
 */
BSTIterator.prototype._leftmostInorder = function (node) {
	while (node) {
		this.stack.push(node);
		node = node.left;
	}
};

/**
 * @return {number} The next smallest number in the in-order traversal.
 */
BSTIterator.prototype.next = function () {
	// Pop the top node from the stack, which is the next smallest element.
	const topNode = this.stack.pop();
	// If the popped node has a right child, process its leftmost subtree.
	if (topNode.right) {
		this._leftmostInorder(topNode.right);
	}
	return topNode.val;
};

/**
 * @return {boolean} True if there are still nodes to process; otherwise, false.
 */
BSTIterator.prototype.hasNext = function () {
	return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/*
Explanation:
1. Initialization: The constructor `BSTIterator` takes the root of the BST. It precomputes the leftmost path of the tree and stores the nodes in a stack.
   - This ensures that the smallest element is always at the top of the stack.
   
2. next():
   - Retrieves the top node from the stack, which is the smallest unprocessed element.
   - If this node has a right child, the helper `_leftmostInorder` is called on the right child to push its leftmost path onto the stack.

3. hasNext():
   - Checks if the stack has any nodes left to process.

4. Time Complexity:
   - next(): Amortized O(1). Each node is pushed and popped from the stack once.
   - hasNext(): O(1).

5. Space Complexity:
   - O(h), where h is the height of the tree, since the stack stores at most h nodes at any time.

Example Walkthrough:
Input:
      7
     / \
    3   15
       /  \
      9    20

Initialization:
Stack = [7, 3] (leftmost path from root)

Operations:
1. `next()`: Pop 3, stack becomes [7], return 3.
2. `next()`: Pop 7, push 15 and its leftmost path (15, 9), stack becomes [15, 9], return 7.
3. `hasNext()`: True (stack = [15, 9]).
4. `next()`: Pop 9, stack becomes [15], return 9.
5. `hasNext()`: True (stack = [15]).
6. `next()`: Pop 15, push 20, stack becomes [20], return 15.
7. `hasNext()`: True (stack = [20]).
8. `next()`: Pop 20, stack becomes [], return 20.
9. `hasNext()`: False (stack is empty).

Output:
[null, 3, 7, true, 9, true, 15, true, 20, false]
*/
