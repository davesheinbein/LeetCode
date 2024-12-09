/**
 * // Definition for a Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
	// If the list is empty, return null.
	if (!head) return null;

	// Interweave original list with copied nodes
	// Traverse through the original list and insert a new node after each original node.
	let current = head;
	while (current) {
		// Create a new node that copies the value of the current node.
		let newNode = new _Node(
			current.val, // Copy the value of the original node
			current.next, // Set the 'next' pointer of the new node to the next original node
			null // Initialize the 'random' pointer of the new node to null
		);
		// Link the original node to the newly created node by setting the current node's 'next' to the new node
		current.next = newNode;
		// Move the current pointer to the next original node
		current = newNode.next;
	}

	// Assign random pointers for the copied nodes
	// Traverse through the list again and set the 'random' pointer of the copied nodes.
	current = head;
	while (current) {
		// If the current original node has a random pointer
		if (current.random) {
			// Set the random pointer of the copied node (which is current.next) to the corresponding copied node
			// of the original random node (i.e., current.random.next)
			current.next.random = current.random.next;
		}
		// Move to the next original node, skipping the interwoven copied node.
		current = current.next.next;
	}

	// Separate the original list and the copied list
	// Now we need to restore the original list and extract the copied list.
	current = head;
	// 'copiedHead' points to the head of the copied list (which is right after the original head)
	let copiedHead = head.next;
	let copiedCurrent = copiedHead;

	while (current) {
		// Restore the original list by skipping the copied node.
		current.next = current.next.next;
		// If the copied node exists, move the copied list pointer to the next copied node
		if (copiedCurrent.next) {
			copiedCurrent.next = copiedCurrent.next.next;
		}
		// Move to the next original node.
		current = current.next;
		// Move to the next copied node.
		copiedCurrent = copiedCurrent.next;
	}

	// Return the head of the copied list
	return copiedHead;
};

// Example explanation:

/*
Explanation:
1. Interweaving Original and Copied Nodes:
   - Insert a new node after each node in the original list.
   - New nodes have the same value as their corresponding original nodes.
   - This step ensures that we can easily access the `random` pointers.

2. Assign Random Pointers:
   - For each original node, set its copied node's random pointer.
   - `current.next.random = current.random.next`.

3. Restore the Original List and Separate the Copied List:
   - Restore the original list by skipping every other node.
   - Extract the copied list by also skipping nodes appropriately.

Time Complexity: O(n)  
- We traverse the list three times: once for interweaving, once for assigning random pointers, and once for separating the lists. Each traversal is O(n).

Space Complexity: O(1)  
- The space complexity is O(1) because we don't use any extra data structures, aside from the new copied nodes, which are interwoven into the original list.

--
Node:

Is the basic building block of a linked list. Each node in a linked list typically contains at least two pieces of information:

val (or value): This is the data that the node holds (it could be any type of data like numbers, strings, etc.).

next: This is a pointer (or reference) to the next node in the list. It helps us traverse the list.

In the code, a random pointer is added to the Node, which is not typically present in a standard linked list. This pointer can point to any node in the list (or be null), and it adds a level of complexity, especially when we need to duplicate the list. This random pointer is the reason why the list is called a "random pointer list".
*/
